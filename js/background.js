function _browser() {
    if (typeof browser !== 'undefined') {
        return browser;
    } else {
        return chrome;
    }
}

function setBadgeText(soundVolume) {
    if (100 === soundVolume) {
        _browser().browserAction.setBadgeText({text: null});
    } else {
        _browser().browserAction.setBadgeText({text: soundVolume.toString()});
    }
}

function updateBadgeText() {
    sendToActiveTab('getSoundVolume', response => {
        setBadgeText(response && response.soundVolume >= 0 ? response.soundVolume : 100);
    });
}

function sendToActiveTab(action, onResponse) {
    _browser().tabs.query({'currentWindow': true, 'active': true},
        tabs => {
            try{
                if (tabs.length > 0) {
                    _browser().tabs.sendMessage(tabs[0].id, {'action': action},
                        response => {
                            window.lastError = _browser().runtime.lastError;
                            if (onResponse) {
                                onResponse(response);
                            }
                        });
                } else {
                    onResponse(null);
                }
            } catch (e) {
            }
        });
}

window.audioStates = [];
_browser().runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (sendResponse && !sendResponse) {
        console.warn(sendResponse);
    }
    if (request.action === 'changeSoundVolume') {
        // setBadgeText(request.data.soundVolume);
        if (_browser().tabCapture) {
            let audioState = window.audioStates[sender.tab.id];
            if (!audioState) {
                _browser().tabCapture.capture({
                    audio: true,
                    video: false
                }, stream => {
                    //const err = _browser().runtime.lastError;
                    if (!stream) {
                        // setBadgeText(100);
                        return;
                    }
                    audioState = {};
                    audioState.audiocontext = new AudioContext();
                    audioState.creategain = audioState.audiocontext.createGain();
                    audioState.source = audioState.audiocontext.createMediaStreamSource(stream);
                    audioState.source.connect(audioState.creategain);
                    audioState.creategain.connect(audioState.audiocontext.destination);
                    window.audioStates[sender.tab.id] = audioState;
                    if (request.data.soundVolume !== undefined) {
                        audioState.creategain.gain.value = request.data.soundVolume / 100;
                    }
                });
            } else {
                if (request.data.soundVolume !== undefined) {
                    audioState.creategain.gain.value = request.data.soundVolume / 100;
                }
            }
        } else {
            // setBadgeText(request.data.soundVolume);
        }
    }
});

_browser().tabs.onRemoved.addListener(tabId => {
    const audioState = audioStates[tabId];
    if (audioState) {
        audioState.audiocontext.close().then(() => {
            delete audioStates[tabId];
        });
    }
});

setInterval(updateBadgeText, 500);