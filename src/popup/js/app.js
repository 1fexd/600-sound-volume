(function (t) {
    function e(e) {
        for (var i, s, r = e[0], l = e[1], u = e[2], d = 0, f = []; d < r.length; d++) s = r[d], Object.prototype.hasOwnProperty.call(a, s) && a[s] && f.push(a[s][0]), a[s] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        c && c(e);
        while (f.length) f.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], i = !0, r = 1; r < n.length; r++) {
                var l = n[r];
                0 !== a[l] && (i = !1)
            }
            i && (o.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }

    var i = {}, a = {app: 0}, o = [];

    function s(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {i: e, l: !1, exports: {}};
        return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.m = t, s.c = i, s.d = function (t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, s.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) s.d(n, i, function (e) {
            return t[e]
        }.bind(null, i));
        return n
    }, s.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [], l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var u = 0; u < r.length; u++) e(r[u]);
    var c = l;
    o.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("56d7")
    }, "49f8": function (t, e, n) {
        var i = {"./en.json": "edd4", "./ru.json": "7704"};

        function a(t) {
            var e = o(t);
            return n(e)
        }

        function o(t) {
            if (!n.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return i[t]
        }

        a.keys = function () {
            return Object.keys(i)
        }, a.resolve = o, t.exports = a, a.id = "49f8"
    }, "56d7": function (t, e, n) {
        "use strict";
        n.r(e);
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("2ca0"), n("caad"), n("2532"), n("4de4");
        var i = n("2b0e"), a = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {attrs: {id: "app"}}, [n("header", {staticClass: "header"}, [n("h1", {staticClass: "header__name"}, [t._v(t._s(t.$t("headerTitle")))]), n("p", {staticClass: "header__description"}, [t._v(" " + t._s(t.$t("headerDescription")) + " ")])]), n("section", {
                    ref: "notification",
                    staticClass: "notification js-notification",
                    attrs: {id: "notification"}
                }, [n("button", {
                    staticClass: "notification__close js-notification__close",
                    attrs: {tabindex: "-1"},
                    on: {click: t.$parent.buttonNotificationCloseClickHandler}
                }, [t._v("×")]), n("div", {
                    staticClass: "notification__title js-notification__title",
                    attrs: {id: "notification-title"},
                    domProps: {innerHTML: t._s(t.$parent.notificationTitle)}
                }, [t._v(" " + t._s(t.$parent.notificationTitle) + " ")]), n("div", {
                    staticClass: "notification__message js-notification__message",
                    attrs: {id: "notification-message"},
                    domProps: {innerHTML: t._s(t.$parent.notificationMessage)}
                }, [t._v(" " + t._s(t.$parent.notificationMessage) + " ")])]), n("section", {staticClass: "volume-slider"}, [n("button", {on: {click: t.$parent.buttonMuteClickHandler}}, [n("img", {attrs: {src: "mute.png"}})]), n("button", {on: {click: t.$parent.button100ClickHandler}}, [n("span", {staticStyle: {"font-size": "15px"}}, [t._v("100%")]), n("img", {
                    staticStyle: {
                        width: "0px",
                        height: "16px"
                    }, attrs: {src: "mute.png"}
                })]), n("input", {
                    ref: "volume-slider",
                    staticClass: "volume-slider__slider",
                    attrs: {id: "volume-slider", type: "range", min: "0", max: "600", step: "10", autofocus: ""},
                    domProps: {value: t.$parent.soundVolume},
                    on: {change: t.$parent.soundValueChangeHandler}
                })]), n("section", {staticClass: "volume-info"}, [n("span", {staticClass: "volume-info__volume-min"}, [t._v("0 %")]), n("span", {staticClass: "volume-info__volume-current"}, [t._v(t._s(t.$t("volumeLabel")) + " " + t._s(t.$parent.soundVolume) + " %")]), n("span", {staticClass: "volume-info__volume-max"}, [t._v("600 %")])]), n("section", {staticClass: "tabs"}, [t.$parent.audibleTabs.length ? n("div", {staticClass: "tabs__title"}, [t._v(t._s(t.$t("tabsLabel")))]) : n("div", {staticClass: "tabs__title"}, [t._v(t._s(t.$t("noTabsLabel")))]), t._l(t.$parent.audibleTabs, (function (e) {
                    return n("div", {key: e.id, staticClass: "tabs__list"}, [n("a", {
                        staticClass: "tab",
                        attrs: {href: "#"},
                        on: {
                            click: function (n) {
                                return t.$parent.audibleTabsClickHandler(e)
                            }
                        }
                    }, [n("div", {staticClass: "tab__item tab__icon"}, [n("img", {
                        staticClass: "tab__icon-image",
                        attrs: {src: e.favIconUrl, alt: ""}
                    })]), n("div", {staticClass: "tab__item tab__title"}, [t._v(t._s(e.title))])])])
                }))], 2), n("footer", {staticStyle: {width: "100%"}}, [n("span", {staticStyle: {float: "left"}}, [n("a", {
                    attrs: {
                        href: "https://addons.mozilla.org/firefox/addon/600-sound-volume/",
                        target: "_blank"
                    }
                })])])])
            }, o = [], s = {name: "App"}, r = s, l = n("2877"), u = Object(l["a"])(r, a, o, !1, null, null, null),
            c = u.exports, d = (n("159b"), n("d3b7"), n("ddb0"), n("ac1f"), n("466d"), n("a925"));
        i["a"].use(d["a"]);
        var f = navigator.language;

        function _() {
            var t = n("49f8"), e = {};
            return t.keys().forEach((function (n) {
                var i = n.match(/([A-Za-z0-9-_]+)\./i);
                if (i && i.length > 1) {
                    var a = i[1];
                    e[a] = t(n)
                }
            })), e
        }

        f = f && f.startsWith("ru") ? "ru" : "en";
        var p = new d["a"]({locale: f || "en", fallbackLocale: f || "en", messages: _()});
        i["a"].config.productionTip = !1;
        var m = function () {
            return "undefined" !== typeof window.browser ? window.browser : window.chrome
        }, h = navigator.language;
        h = h && h.startsWith("ru") ? "ru" : "en";
        var b = new i["a"]({
            i18n: p,
            el: "#app",
            data: {
                soundVolume: 100,
                audibleTabs: [],
                tabId: null,
                notificationTitle: null,
                notificationMessage: null,
                notificationId: null,
                notifications: [{
                    id: "v3za9vcy6rji3kx3t32wzjdqi7ztqmxw",
                    priority: 1,
                    title: "",
                    message: p.t("if_you_like_message"),
                    minUsages: 15
                }, {
                    id: "cvifms5exdmqy2g3ar4kzhmxi4zepvvq",
                    priority: 750,
                    title: p.t("ctrl_shift_v_title"),
                    message: p.t("ctrl_shift_v_message"),
                    minUsages: 3
                }, {
                    id: "h6s5u6eqgjpxwqasujret4vz2pnkj945",
                    priority: 500,
                    title: p.t("right_after_opening_title"),
                    message: p.t("right_after_opening_message"),
                    minUsages: 7
                }, {
                    id: "tk7tse8yedvsdyve2dtpzd349hkbnugk",
                    priority: 250,
                    title: p.t("volume_up_down_title"),
                    message: p.t("volume_up_down_message"),
                    minUsages: 12
                }]
            },
            methods: {
                sendToActiveTab: function (t, e) {
                    m().tabs.query({currentWindow: !0, active: !0}, (function (n) {
                        try {
                            m().tabs.sendMessage(n[0].id, {action: t, data: b.$data}, (function (t) {
                                window.lastError = m().runtime.lastError, e && e(t)
                            }))
                        } catch (i) {
                            window.console.warn(i)
                        }
                    }))
                }, setSoundVolume: function (t) {
                    this.soundVolume = t
                }, soundValueChangeHandler: function (t) {
                    this.setSoundVolume(t.target.value), this.sendToActiveTab("changeSoundVolume")
                }, button100ClickHandler: function () {
                    this.setSoundVolume(100), this.sendToActiveTab("changeSoundVolume")
                }, buttonMuteClickHandler: function () {
                    this.setSoundVolume(0), this.sendToActiveTab("changeSoundVolume")
                }, buttonNotificationCloseClickHandler: function () {
                    var t = this;
                    document.getElementById("notification").classList.remove("is-active"), m().storage.local.get({
                        installationDate: null,
                        used: []
                    }, (function (e) {
                        t.notificationId && !e.used.includes(t.notificationId) && (e.used.push(t.notificationId), m().storage.local.set(e))
                    }))
                }, audibleTabsClickHandler: function (t) {
                    m().tabs.update(t.id, {active: !0}, this.updateSoundVolume)
                }, updateSoundVolume: function () {
                    var t = this;
                    this.sendToActiveTab("getSoundVolume", (function (e) {
                        t.setSoundVolume(e && e.soundVolume >= 0 ? e.soundVolume : 100)
                    }))
                }, listAudible: function () {
                    var t = this;
                    m().tabs.query({audible: !0}, (function (e) {
                        var n = function (t, e) {
                            return t.title && e.title ? t.title.localeCompare(e.title) : 0
                        };
                        e.sort(n), t.audibleTabs = e
                    }))
                }, initNotification: function () {
                    var t = this;
                    m().storage.local.get({usageCounter: 0, used: [], permittedToShowBanner: -1}, (function (e) {
                        e.usageCounter++, m().storage.local.set(e);
                        var n = t.notifications.filter((function (t) {
                            var n = t.minUsages < e.usageCounter, i = !e.used.includes(t.id);
                            return n && i
                        })), i = n.sort((function (t, e) {
                            return t.priority - e.priority
                        })), a = i.length > 0 ? i[0] : null;
                        t.notificationTitle = a ? a["title"] : null, t.notificationMessage = a ? a["message"] : null, t.notificationId = a ? a.id : null, t.notificationMessage && document.getElementById("notification").classList.add("is-active")
                    }))
                }, init: function () {
                    var t = this;
                    try {
                        this.updateSoundVolume(), this.listAudible(), document.getElementById("volume-slider").focus(), this.initNotification(), document.documentElement.addEventListener("keypress", (function (e) {
                            var n = parseInt(e.key.toLowerCase());
                            n >= 0 && n <= 6 && (t.setSoundVolume(100 * n), t.sendToActiveTab("changeSoundVolume"))
                        }));
                        for (var e = document.getElementsByClassName("advert"), n = e.item(Math.round(Math.random() * (e.length - 1))), i = 0; i < e.length; i++) e.item(i) !== n && e.item(i).parentNode.removeChild(e.item(i))
                    } catch (a) {
                        window.console.warn(a)
                    }
                }
            },
            render: function (t) {
                return t(c)
            }
        }).$mount("#app");
    }, 7704: function (t) {
        t.exports = JSON.parse('{"headerTitle":"Громкость Звука 600%","headerDescription":"Регулируйте громкость звука текущей вкладки ползунком. Переключайтесь на любую вкладку со звуком одним кликом.","volumeLabel":"Громкость:","tabsLabel":"Вкладки со звуком","noTabsLabel":"Вкладок со звуком нет","rateItLabel":"Оценить!","if_you_like_title":"","if_you_like_message":"Если нравится \\"Громкость звука 600%\\", пожалуйста, оцените это расширение здесь <a href=\\"https://addons.mozilla.org/firefox/addon/600-sound-volume/\\" target=\\"_blank\\" tabindex=\\"-1\\">Firefox Browser Add-ons</a>. Спасибо за ваш отзыв и хорошего дня!","ctrl_shift_v_title":"Совет: Сочетание клавиш","ctrl_shift_v_message":"<strong>Ctrl+Shift+6</strong> - сочетание клавиш для открытия \\"600% Sound Volume\\".","right_after_opening_title":"Совет: используйте клавиши 0 - 6 для регулировки громкости","right_after_opening_message":"Сразу после открытия \\"Громкость звука 600%\\" нажимайте клавиши 0&nbsp;-&nbsp;6 , чтобы изменить громкость с 0&nbsp;% до 600&nbsp;% соответственно.","volume_up_down_title":"Совет: Регулируйте громкость с помощью клавиш со стрелками","volume_up_down_message":"Сразу после открытия \\"Громкость звука 600%\\" нажимайте:<ul><li>&#x2b06;&#xfe0f; или &#x27a1;&#xfe0f; для увеличения громкости</li><li>&#x2b07;&#xfe0f; или &#x2b05;&#xfe0f; для уменьшения громкости</li></ul>","buy_headsets":"Или купить наушники","buy_headphone_amplifier":"Купить усилитель наушников"}')
    }, edd4: function (t) {
        t.exports = JSON.parse('{"headerTitle":"600% Sound Volume","headerDescription":"Control volume of the current tab with the slider below. Switch to any tab playing audio with just one click.","volumeLabel":"Volume:","tabsLabel":"Tabs playing audio right now","noTabsLabel":"No tabs playing audio right now","rateItLabel":"Rate It!","if_you_like_title":"","if_you_like_message":"If you like \\"600% Sound Volume\\" please rate it on <a href=\\"https://addons.mozilla.org/firefox/addon/600-sound-volume/\\" target=\\"_blank\\" tabindex=\\"-1\\">Firefox Browser Add-ons</a> to let me know that. If you don\'t want to - it\'s ok. Thank you for your feedback and have a nice day!","ctrl_shift_v_title":"Tip: keyboard shortcut","ctrl_shift_v_message":"<strong>Ctrl+Shift+6</strong> is a shortcut to open \\"600% Sound Volume\\".","right_after_opening_title":"Tip: use keys 0 - 6 to adjust volume","right_after_opening_message":"Right after opening \\"600% Sound Volume\\" press keys 0&nbsp;-&nbsp;6 to change volume from 0&nbsp;% to 600&nbsp;% respectively.","volume_up_down_title":"Tip: adjust volume with arrow keys","volume_up_down_message":"Right after opening \\"600% Sound Volume\\" press:<ul><li>&#x2b06;&#xfe0f; or &#x27a1;&#xfe0f; to volume up</li><li>&#x2b07;&#xfe0f; or &#x2b05;&#xfe0f; to volume down</li></ul>","buy_headsets":"Or Buy Headsets","buy_headphone_amplifier":"Buy Headphone Amplifier"}')
    }
});
//# sourceMappingURL=app.js.map
