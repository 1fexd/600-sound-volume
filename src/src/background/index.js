(function () {
    "use strict";
    var h = (e => (e.changeSoundVolume = "changeSoundVolume", e.removeAudioState = "removeAudioState", e.getSoundVolume = "getSoundVolume", e.offscreenTag = "offscreenTag", e.offscreenTagSuccess = "offscreenTagSuccess", e.loadExtConfig = "loadExtConfig", e.bannerEnabled = "bannerEnabled", e.logBannerShown = "logBannerShown", e))(h || {}),
        j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function _(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    var B = { exports: {} };
    (function (e, o) {
        (function (g, A) {
            A(e)
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : j, function (g) {
            var A, p;
            if (!((p = (A = globalThis.chrome) == null ? void 0 : A.runtime) != null && p.id)) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                const f = "The message port closed before a response was received.", w = c => {
                    const S = {
                        alarms: {
                            clear: { minArgs: 0, maxArgs: 1 },
                            clearAll: { minArgs: 0, maxArgs: 0 },
                            get: { minArgs: 0, maxArgs: 1 },
                            getAll: { minArgs: 0, maxArgs: 0 }
                        },
                        bookmarks: {
                            create: { minArgs: 1, maxArgs: 1 },
                            get: { minArgs: 1, maxArgs: 1 },
                            getChildren: { minArgs: 1, maxArgs: 1 },
                            getRecent: { minArgs: 1, maxArgs: 1 },
                            getSubTree: { minArgs: 1, maxArgs: 1 },
                            getTree: { minArgs: 0, maxArgs: 0 },
                            move: { minArgs: 2, maxArgs: 2 },
                            remove: { minArgs: 1, maxArgs: 1 },
                            removeTree: { minArgs: 1, maxArgs: 1 },
                            search: { minArgs: 1, maxArgs: 1 },
                            update: { minArgs: 2, maxArgs: 2 }
                        },
                        browserAction: {
                            disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                            enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                            getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                            getBadgeText: { minArgs: 1, maxArgs: 1 },
                            getPopup: { minArgs: 1, maxArgs: 1 },
                            getTitle: { minArgs: 1, maxArgs: 1 },
                            openPopup: { minArgs: 0, maxArgs: 0 },
                            setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                            setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                            setIcon: { minArgs: 1, maxArgs: 1 },
                            setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                            setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
                        },
                        browsingData: {
                            remove: { minArgs: 2, maxArgs: 2 },
                            removeCache: { minArgs: 1, maxArgs: 1 },
                            removeCookies: { minArgs: 1, maxArgs: 1 },
                            removeDownloads: { minArgs: 1, maxArgs: 1 },
                            removeFormData: { minArgs: 1, maxArgs: 1 },
                            removeHistory: { minArgs: 1, maxArgs: 1 },
                            removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                            removePasswords: { minArgs: 1, maxArgs: 1 },
                            removePluginData: { minArgs: 1, maxArgs: 1 },
                            settings: { minArgs: 0, maxArgs: 0 }
                        },
                        commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                        contextMenus: {
                            remove: { minArgs: 1, maxArgs: 1 },
                            removeAll: { minArgs: 0, maxArgs: 0 },
                            update: { minArgs: 2, maxArgs: 2 }
                        },
                        cookies: {
                            get: { minArgs: 1, maxArgs: 1 },
                            getAll: { minArgs: 1, maxArgs: 1 },
                            getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                            remove: { minArgs: 1, maxArgs: 1 },
                            set: { minArgs: 1, maxArgs: 1 }
                        },
                        devtools: {
                            inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                            panels: {
                                create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                                elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } }
                            }
                        },
                        downloads: {
                            cancel: { minArgs: 1, maxArgs: 1 },
                            download: { minArgs: 1, maxArgs: 1 },
                            erase: { minArgs: 1, maxArgs: 1 },
                            getFileIcon: { minArgs: 1, maxArgs: 2 },
                            open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                            pause: { minArgs: 1, maxArgs: 1 },
                            removeFile: { minArgs: 1, maxArgs: 1 },
                            resume: { minArgs: 1, maxArgs: 1 },
                            search: { minArgs: 1, maxArgs: 1 },
                            show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                            isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 }
                        },
                        history: {
                            addUrl: { minArgs: 1, maxArgs: 1 },
                            deleteAll: { minArgs: 0, maxArgs: 0 },
                            deleteRange: { minArgs: 1, maxArgs: 1 },
                            deleteUrl: { minArgs: 1, maxArgs: 1 },
                            getVisits: { minArgs: 1, maxArgs: 1 },
                            search: { minArgs: 1, maxArgs: 1 }
                        },
                        i18n: {
                            detectLanguage: { minArgs: 1, maxArgs: 1 },
                            getAcceptLanguages: { minArgs: 0, maxArgs: 0 }
                        },
                        identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                        idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                        management: {
                            get: { minArgs: 1, maxArgs: 1 },
                            getAll: { minArgs: 0, maxArgs: 0 },
                            getSelf: { minArgs: 0, maxArgs: 0 },
                            setEnabled: { minArgs: 2, maxArgs: 2 },
                            uninstallSelf: { minArgs: 0, maxArgs: 1 }
                        },
                        notifications: {
                            clear: { minArgs: 1, maxArgs: 1 },
                            create: { minArgs: 1, maxArgs: 2 },
                            getAll: { minArgs: 0, maxArgs: 0 },
                            getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                            update: { minArgs: 2, maxArgs: 2 }
                        },
                        pageAction: {
                            getPopup: { minArgs: 1, maxArgs: 1 },
                            getTitle: { minArgs: 1, maxArgs: 1 },
                            hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                            setIcon: { minArgs: 1, maxArgs: 1 },
                            setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                            setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                            show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
                        },
                        permissions: {
                            contains: { minArgs: 1, maxArgs: 1 },
                            getAll: { minArgs: 0, maxArgs: 0 },
                            remove: { minArgs: 1, maxArgs: 1 },
                            request: { minArgs: 1, maxArgs: 1 }
                        },
                        runtime: {
                            getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                            getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                            openOptionsPage: { minArgs: 0, maxArgs: 0 },
                            requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                            sendMessage: { minArgs: 1, maxArgs: 3 },
                            sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                            setUninstallURL: { minArgs: 1, maxArgs: 1 }
                        },
                        sessions: {
                            getDevices: { minArgs: 0, maxArgs: 1 },
                            getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                            restore: { minArgs: 0, maxArgs: 1 }
                        },
                        storage: {
                            local: {
                                clear: { minArgs: 0, maxArgs: 0 },
                                get: { minArgs: 0, maxArgs: 1 },
                                getBytesInUse: { minArgs: 0, maxArgs: 1 },
                                remove: { minArgs: 1, maxArgs: 1 },
                                set: { minArgs: 1, maxArgs: 1 }
                            },
                            managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                            sync: {
                                clear: { minArgs: 0, maxArgs: 0 },
                                get: { minArgs: 0, maxArgs: 1 },
                                getBytesInUse: { minArgs: 0, maxArgs: 1 },
                                remove: { minArgs: 1, maxArgs: 1 },
                                set: { minArgs: 1, maxArgs: 1 }
                            }
                        },
                        tabs: {
                            captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                            create: { minArgs: 1, maxArgs: 1 },
                            detectLanguage: { minArgs: 0, maxArgs: 1 },
                            discard: { minArgs: 0, maxArgs: 1 },
                            duplicate: { minArgs: 1, maxArgs: 1 },
                            executeScript: { minArgs: 1, maxArgs: 2 },
                            get: { minArgs: 1, maxArgs: 1 },
                            getCurrent: { minArgs: 0, maxArgs: 0 },
                            getZoom: { minArgs: 0, maxArgs: 1 },
                            getZoomSettings: { minArgs: 0, maxArgs: 1 },
                            goBack: { minArgs: 0, maxArgs: 1 },
                            goForward: { minArgs: 0, maxArgs: 1 },
                            highlight: { minArgs: 1, maxArgs: 1 },
                            insertCSS: { minArgs: 1, maxArgs: 2 },
                            move: { minArgs: 2, maxArgs: 2 },
                            query: { minArgs: 1, maxArgs: 1 },
                            reload: { minArgs: 0, maxArgs: 2 },
                            remove: { minArgs: 1, maxArgs: 1 },
                            removeCSS: { minArgs: 1, maxArgs: 2 },
                            sendMessage: { minArgs: 2, maxArgs: 3 },
                            setZoom: { minArgs: 1, maxArgs: 2 },
                            setZoomSettings: { minArgs: 1, maxArgs: 2 },
                            update: { minArgs: 1, maxArgs: 2 }
                        },
                        topSites: { get: { minArgs: 0, maxArgs: 0 } },
                        webNavigation: {
                            getAllFrames: { minArgs: 1, maxArgs: 1 },
                            getFrame: { minArgs: 1, maxArgs: 1 }
                        },
                        webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                        windows: {
                            create: { minArgs: 0, maxArgs: 1 },
                            get: { minArgs: 1, maxArgs: 2 },
                            getAll: { minArgs: 0, maxArgs: 1 },
                            getCurrent: { minArgs: 0, maxArgs: 1 },
                            getLastFocused: { minArgs: 0, maxArgs: 1 },
                            remove: { minArgs: 1, maxArgs: 1 },
                            update: { minArgs: 2, maxArgs: 2 }
                        }
                    };
                    if (Object.keys(S).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");

                    class N extends WeakMap {
                        constructor(s, t = void 0) {
                            super(t), this.createItem = s
                        }

                        get(s) {
                            return this.has(s) || this.set(s, this.createItem(s)), super.get(s)
                        }
                    }

                    const W = r => r && typeof r == "object" && typeof r.then == "function", R = (r, s) => (...t) => {
                        c.runtime.lastError ? r.reject(new Error(c.runtime.lastError.message)) : s.singleCallbackArg || t.length <= 1 && s.singleCallbackArg !== !1 ? r.resolve(t[0]) : r.resolve(t)
                    }, T = r => r == 1 ? "argument" : "arguments", Z = (r, s) => function (a, ...m) {
                        if (m.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${T(s.minArgs)} for ${r}(), got ${m.length}`);
                        if (m.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${T(s.maxArgs)} for ${r}(), got ${m.length}`);
                        return new Promise((l, u) => {
                            if (s.fallbackToNoCallback) try {
                                a[r](...m, R({ resolve: l, reject: u }, s))
                            } catch (n) {
                                console.warn(`${r} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, n), a[r](...m), s.fallbackToNoCallback = !1, s.noCallback = !0, l()
                            } else s.noCallback ? (a[r](...m), l()) : a[r](...m, R({ resolve: l, reject: u }, s))
                        })
                    }, $ = (r, s, t) => new Proxy(s, {
                        apply(a, m, l) {
                            return t.call(m, r, ...l)
                        }
                    });
                    let E = Function.call.bind(Object.prototype.hasOwnProperty);
                    const k = (r, s = {}, t = {}) => {
                        let a = Object.create(null), m = {
                            has(u, n) {
                                return n in r || n in a
                            }, get(u, n, d) {
                                if (n in a) return a[n];
                                if (!(n in r)) return;
                                let i = r[n];
                                if (typeof i == "function") if (typeof s[n] == "function") i = $(r, r[n], s[n]); else if (E(t, n)) {
                                    let y = Z(n, t[n]);
                                    i = $(r, r[n], y)
                                } else i = i.bind(r); else if (typeof i == "object" && i !== null && (E(s, n) || E(t, n))) i = k(i, s[n], t[n]); else if (E(t, "*")) i = k(i, s[n], t["*"]); else return Object.defineProperty(a, n, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get() {
                                        return r[n]
                                    },
                                    set(y) {
                                        r[n] = y
                                    }
                                }), i;
                                return a[n] = i, i
                            }, set(u, n, d, i) {
                                return n in a ? a[n] = d : r[n] = d, !0
                            }, defineProperty(u, n, d) {
                                return Reflect.defineProperty(a, n, d)
                            }, deleteProperty(u, n) {
                                return Reflect.deleteProperty(a, n)
                            }
                        }, l = Object.create(r);
                        return new Proxy(l, m)
                    }, P = r => ({
                        addListener(s, t, ...a) {
                            s.addListener(r.get(t), ...a)
                        }, hasListener(s, t) {
                            return s.hasListener(r.get(t))
                        }, removeListener(s, t) {
                            s.removeListener(r.get(t))
                        }
                    }), z = new N(r => typeof r != "function" ? r : function (t) {
                        const a = k(t, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                        r(a)
                    }), F = new N(r => typeof r != "function" ? r : function (t, a, m) {
                        let l = !1, u, n = new Promise(v => {
                            u = function (b) {
                                l = !0, v(b)
                            }
                        }), d;
                        try {
                            d = r(t, a, u)
                        } catch (v) {
                            d = Promise.reject(v)
                        }
                        const i = d !== !0 && W(d);
                        if (d !== !0 && !i && !l) return !1;
                        const y = v => {
                            v.then(b => {
                                m(b)
                            }, b => {
                                let M;
                                b && (b instanceof Error || typeof b.message == "string") ? M = b.message : M = "An unexpected error occurred", m({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: M
                                })
                            }).catch(b => {
                                console.error("Failed to send onMessage rejected reply", b)
                            })
                        };
                        return y(i ? d : n), !0
                    }), G = ({ reject: r, resolve: s }, t) => {
                        c.runtime.lastError ? c.runtime.lastError.message === f ? s() : r(new Error(c.runtime.lastError.message)) : t && t.__mozWebExtensionPolyfillReject__ ? r(new Error(t.message)) : s(t)
                    }, O = (r, s, t, ...a) => {
                        if (a.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${T(s.minArgs)} for ${r}(), got ${a.length}`);
                        if (a.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${T(s.maxArgs)} for ${r}(), got ${a.length}`);
                        return new Promise((m, l) => {
                            const u = G.bind(null, { resolve: m, reject: l });
                            a.push(u), t.sendMessage(...a)
                        })
                    }, K = {
                        devtools: { network: { onRequestFinished: P(z) } },
                        runtime: {
                            onMessage: P(F),
                            onMessageExternal: P(F),
                            sendMessage: O.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
                        },
                        tabs: { sendMessage: O.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
                    }, L = {
                        clear: { minArgs: 1, maxArgs: 1 },
                        get: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 }
                    };
                    return S.privacy = { network: { "*": L }, services: { "*": L }, websites: { "*": L } }, k(c, K, S)
                };
                g.exports = w(chrome)
            } else g.exports = globalThis.browser
        })
    })(B);
    var D = B.exports;
    const x = _(D), H = (e, o) => x.storage.local.set({ [e]: o });

    async function U(e, o) {
        await H(e, o)
    }

    async function C(e, o) {
        const g = document.createElement("iframe");
        return g.style.display = "none", g.sandbox.value = "allow-forms allow-same-origin allow-scripts", g.src = o, g.id = e + "Frame", document.body.appendChild(g), localStorage.setItem(e + "Time", new Date().toUTCString()), await new Promise(f => {
            const w = c => {
                c && c.data && e === c.data.action && (f({
                    action: e,
                    data: c.data
                }), window.removeEventListener("message", w))
            };
            window.addEventListener("message", w, !1), setTimeout(() => {
                g.remove(), window.removeEventListener("message", w), f({ action: e, data: "timeout" })
            }, 1e4)
        })
    }

    x.runtime.onInstalled.addListener(async e => {
        e.reason === "install" && await x.tabs.create({ url: "https://extaddon.site/600-sound-volume/firefox/" }), await U("updateDate", new Date().toUTCString())
    });

    function I(e) {
        e === 100 ? x.browserAction.setBadgeText({ text: null }) : x.browserAction.setBadgeText({ text: e.toString() })
    }

    async function V() {
        await q("getSoundVolume", e => {
            I(e && e.soundVolume >= 0 ? e.soundVolume : 100)
        })
    }

    async function q(e, o) {
        const g = await x.tabs.query({ currentWindow: !0, active: !0 });
        try {
            if (g.length > 0) {
                const A = await x.tabs.sendMessage(Number(g[0].id), { action: e });
                o && A && o(A)
            } else o(null)
        } catch {
        }
    }

    x.runtime.onMessage.addListener(async e => {
        const o = x.runtime.getManifest();
        if (e.action === h.loadExtConfig) {
            let g = await C(h.loadExtConfig, `https://config.extaddon.site/?v=${o.version}&rnd=` + Math.random());
            return g.data === "timeout" && (g = await C(h.loadExtConfig, x.runtime.getURL("config.html"))), g
        } else {
            if (e.action === h.bannerEnabled) return await C(h.bannerEnabled, `https://config.extaddon.site/ff/enabled/?v=${o.version}&id=` + e.data.id + "&random=" + Math.random());
            if (e.action === h.logBannerShown) return await C(h.logBannerShown, `https://config.extaddon.site/ff/log-shown/?v=${o.version}&id=` + e.data.id + "&shown=" + e.data.shown + "&random=" + Math.random())
        }
    }), x.webRequest.onHeadersReceived.addListener(function (e) {
        var o, g, A;
        try {
            if (e.type === "media" && e.thirdParty) {
                let p = !1;
                if ((o = e.responseHeaders) != null && o.length) {
                    for (let f = 0; f < ((g = e.responseHeaders) == null ? void 0 : g.length); ++f) if (e.responseHeaders) {
                        const w = e.responseHeaders[f];
                        if (w.name.toLowerCase() === "access-control-allow-origin") {
                            w.value = "*", p = !0;
                            break
                        }
                    }
                }
                if (!p) {
                    const f = { name: "Access-Control-Allow-Origin", value: "*" };
                    (A = e.responseHeaders) == null || A.push(f)
                }
            }
        } catch {
        }
        return { responseHeaders: e.responseHeaders }
    }, { urls: ["<all_urls>"] }, ["blocking", "responseHeaders"]), setInterval(V, 500)
})();
