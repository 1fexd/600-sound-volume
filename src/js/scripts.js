japp = document.createElement('script');
japp.src = resolveExtensionUrl() + 'js/app.js';
japp.type = 'text/javascript';
document.body.appendChild(japp);

function resolveExtensionUrl() {
    if (typeof browser !== 'undefined' && browser.extension && browser.extension.getURL) {
        return browser.extension.getURL('');
    } else {
        return 'chrome-extension://' + chrome.runtime.id + '/';
    }
}

window.prevSoundVolume = null;
window.localSoundVolume = 100;

const HOSTS_TO_IGNORE = [
    'cdn.videofarm.daum.net',
    'computerbase.de',
    'production.assets.clips.twitchcdn.net'
];
function _browser() {
    if (typeof browser !== 'undefined') {
        return browser;
    } else {
        return chrome;
    }
}

function hostToIgnore(url) {
    if (!url) {
        return false;
    }
    for (let i = 0; i < HOSTS_TO_IGNORE.length; i++) {
        if (url.indexOf(HOSTS_TO_IGNORE[i]) > -1) {
            return true;
        }
    }
    return false;
}

function sendToBackground(action, onResponse) {
    const data = {};
    data.soundVolume = localSoundVolume;
    try {
        _browser().runtime.sendMessage({'action': action, data: data},
            response => {
                let err = _browser().runtime.lastError;
                if (err && !err) {
                    console.warn(err);
                }
                if (onResponse) {
                    onResponse(response);
                }
            });
    } catch (e) {
        window.console.warn(e);
    }
}

function isMediaActive(media) {
    for (let i = 0; i < media.length; i++) {
        const target = media[i];
        if (!target.paused) {
            return true;
        }
    }
    return false;
}

function changeSoundVolume(document) {
    const media = [...document.querySelectorAll('video, audio')];
    if (window.localSoundVolume === window.prevSoundVolume || !isMediaActive(media)) {
        return;
    }

    window.prevSoundVolume = window.localSoundVolume;

    sendToBackground('changeSoundVolume');

    if (typeof browser === 'undefined') {
        return;
    }

    for (let i = 0; i < media.length; i++) {
        const target = media[i];
        let src = target.src || target.currentSrc;
        if (src && !hostToIgnore(src)) {
            if (!target.audiocontext) {
                if (target.crossOrigin !== 'anonymous') {
                    target.setAttribute('crossorigin', 'anonymous');
                    target.crossOrigin = 'anonymous';
                    if (src && src.indexOf('https://') === -1 && location.href && location.href.indexOf('https://') === 0) {
                        src = src.replace('http://', 'https://');
                    }
                    if (src.substring(0, 5) !== "blob:") {
                        const play = !target.paused;
                        target.src = src + '';
                        if (play) {
                            target.play();
                        }
                    }
                }
                target.audiocontext = new AudioContext();
                target.creategain = target.audiocontext.createGain();
                target.source = target.audiocontext.createMediaElementSource(target);
                target.source.connect(target.creategain);
                target.creategain.connect(target.audiocontext.destination);
            }
            const newVolume = window.localSoundVolume / 100;
            if (newVolume !== target.creategain.gain.value) {
                target.creategain.gain.value = newVolume;
            }
        }
    }
}

_browser().runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'changeSoundVolume') {
        if (request.data.soundVolume !== undefined) {
            window.localSoundVolume = Number(request.data.soundVolume);
            changeSoundVolume(window.document);
        }
        sendResponse({soundVolume: window.localSoundVolume});
    } else if (request.action === 'getSoundVolume') {
        sendResponse({soundVolume: window.localSoundVolume});
    }
});
