(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, { childList: !0, subtree: !0 });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();
var ac = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Gu(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var Zu = { exports: {} }, sl = {}, Ju = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr = Symbol.for("react.element"), cc = Symbol.for("react.portal"), fc = Symbol.for("react.fragment"),
    dc = Symbol.for("react.strict_mode"), pc = Symbol.for("react.profiler"), mc = Symbol.for("react.provider"),
    gc = Symbol.for("react.context"), hc = Symbol.for("react.forward_ref"), vc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.memo"), wc = Symbol.for("react.lazy"), Ui = Symbol.iterator;

function Sc(e) {
    return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null)
}

var qu = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, bu = Object.assign, es = {};

function gn(e, t, n) {
    this.props = e, this.context = t, this.refs = es, this.updater = n || qu
}

gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
gn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ts() {
}

ts.prototype = gn.prototype;

function Qo(e, t, n) {
    this.props = e, this.context = t, this.refs = es, this.updater = n || qu
}

var Ko = Qo.prototype = new ts;
Ko.constructor = Qo;
bu(Ko, gn.prototype);
Ko.isPureReactComponent = !0;
var Vi = Array.isArray, ns = Object.prototype.hasOwnProperty, Yo = { current: null },
    rs = { key: !0, ref: !0, __self: !0, __source: !0 };

function ls(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ns.call(t, r) && !rs.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n; else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return { $$typeof: nr, type: e, key: o, ref: i, props: l, _owner: Yo.current }
}

function kc(e, t) {
    return { $$typeof: nr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}

function Xo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === nr
}

function xc(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var $i = /\/+/g;

function El(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? xc("" + e.key) : t.toString(36)
}

function Cr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0; else switch (o) {
        case"string":
        case"number":
            i = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case nr:
                case cc:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + El(i, 0) : r, Vi(l) ? (n = "", e != null && (n = e.replace($i, "$&/") + "/"), Cr(l, t, n, "", function (c) {
        return c
    })) : l != null && (Xo(l) && (l = kc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace($i, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Vi(e)) for (var u = 0; u < e.length; u++) {
        o = e[u];
        var s = r + El(o, u);
        i += Cr(o, t, n, s, l)
    } else if (s = Sc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done;) o = o.value, s = r + El(o, u++), i += Cr(o, t, n, s, l); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function ar(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Cr(e, r, "", "", function (o) {
        return t.call(n, o, l++)
    }), r
}

function Ac(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var me = { current: null }, Nr = { transition: null },
    _c = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Yo };

function os() {
    throw Error("act(...) is not supported in production builds of React.")
}

M.Children = {
    map: ar, forEach: function (e, t, n) {
        ar(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return ar(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return ar(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!Xo(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
M.Component = gn;
M.Fragment = fc;
M.Profiler = pc;
M.PureComponent = Qo;
M.StrictMode = dc;
M.Suspense = vc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _c;
M.act = os;
M.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = bu({}, e.props), l = e.key, o = e.ref, i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Yo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (s in t) ns.call(t, s) && !rs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n; else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u
    }
    return { $$typeof: nr, type: e.type, key: l, ref: o, props: r, _owner: i }
};
M.createContext = function (e) {
    return e = {
        $$typeof: gc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = { $$typeof: mc, _context: e }, e.Consumer = e
};
M.createElement = ls;
M.createFactory = function (e) {
    var t = ls.bind(null, e);
    return t.type = e, t
};
M.createRef = function () {
    return { current: null }
};
M.forwardRef = function (e) {
    return { $$typeof: hc, render: e }
};
M.isValidElement = Xo;
M.lazy = function (e) {
    return { $$typeof: wc, _payload: { _status: -1, _result: e }, _init: Ac }
};
M.memo = function (e, t) {
    return { $$typeof: yc, type: e, compare: t === void 0 ? null : t }
};
M.startTransition = function (e) {
    var t = Nr.transition;
    Nr.transition = {};
    try {
        e()
    } finally {
        Nr.transition = t
    }
};
M.unstable_act = os;
M.useCallback = function (e, t) {
    return me.current.useCallback(e, t)
};
M.useContext = function (e) {
    return me.current.useContext(e)
};
M.useDebugValue = function () {
};
M.useDeferredValue = function (e) {
    return me.current.useDeferredValue(e)
};
M.useEffect = function (e, t) {
    return me.current.useEffect(e, t)
};
M.useId = function () {
    return me.current.useId()
};
M.useImperativeHandle = function (e, t, n) {
    return me.current.useImperativeHandle(e, t, n)
};
M.useInsertionEffect = function (e, t) {
    return me.current.useInsertionEffect(e, t)
};
M.useLayoutEffect = function (e, t) {
    return me.current.useLayoutEffect(e, t)
};
M.useMemo = function (e, t) {
    return me.current.useMemo(e, t)
};
M.useReducer = function (e, t, n) {
    return me.current.useReducer(e, t, n)
};
M.useRef = function (e) {
    return me.current.useRef(e)
};
M.useState = function (e) {
    return me.current.useState(e)
};
M.useSyncExternalStore = function (e, t, n) {
    return me.current.useSyncExternalStore(e, t, n)
};
M.useTransition = function () {
    return me.current.useTransition()
};
M.version = "18.3.1";
Ju.exports = M;
var Ne = Ju.exports;
const Ec = Gu(Ne);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc = Ne, Nc = Symbol.for("react.element"), Pc = Symbol.for("react.fragment"),
    Tc = Object.prototype.hasOwnProperty, zc = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Lc = { key: !0, ref: !0, __self: !0, __source: !0 };

function is(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Tc.call(t, r) && !Lc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return { $$typeof: Nc, type: e, key: o, ref: i, props: l, _owner: zc.current }
}

sl.Fragment = Pc;
sl.jsx = is;
sl.jsxs = is;
Zu.exports = sl;
var T = Zu.exports, Jl = {}, us = { exports: {} }, Ee = {}, ss = { exports: {} }, as = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(_, j) {
        var L = _.length;
        _.push(j);
        e:for (; 0 < L;) {
            var $ = L - 1 >>> 1, ne = _[$];
            if (0 < l(ne, j)) _[$] = j, _[L] = ne, L = $; else break e
        }
    }

    function n(_) {
        return _.length === 0 ? null : _[0]
    }

    function r(_) {
        if (_.length === 0) return null;
        var j = _[0], L = _.pop();
        if (L !== j) {
            _[0] = L;
            e:for (var $ = 0, ne = _.length, ur = ne >>> 1; $ < ur;) {
                var At = 2 * ($ + 1) - 1, _l = _[At], _t = At + 1, sr = _[_t];
                if (0 > l(_l, L)) _t < ne && 0 > l(sr, _l) ? (_[$] = sr, _[_t] = L, $ = _t) : (_[$] = _l, _[At] = L, $ = At); else if (_t < ne && 0 > l(sr, L)) _[$] = sr, _[_t] = L, $ = _t; else break e
            }
        }
        return j
    }

    function l(_, j) {
        var L = _.sortIndex - j.sortIndex;
        return L !== 0 ? L : _.id - j.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var i = Date, u = i.now();
        e.unstable_now = function () {
            return i.now() - u
        }
    }
    var s = [], c = [], h = 1, m = null, p = 3, x = !1, A = !1, g = !1,
        R = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function d(_) {
        for (var j = n(c); j !== null;) {
            if (j.callback === null) r(c); else if (j.startTime <= _) r(c), j.sortIndex = j.expirationTime, t(s, j); else break;
            j = n(c)
        }
    }

    function w(_) {
        if (g = !1, d(_), !A) if (n(s) !== null) A = !0, te(E); else {
            var j = n(c);
            j !== null && D(w, j.startTime - _)
        }
    }

    function E(_, j) {
        A = !1, g && (g = !1, f(v), v = -1), x = !0;
        var L = p;
        try {
            for (d(j), m = n(s); m !== null && (!(m.expirationTime > j) || _ && !z());) {
                var $ = m.callback;
                if (typeof $ == "function") {
                    m.callback = null, p = m.priorityLevel;
                    var ne = $(m.expirationTime <= j);
                    j = e.unstable_now(), typeof ne == "function" ? m.callback = ne : m === n(s) && r(s), d(j)
                } else r(s);
                m = n(s)
            }
            if (m !== null) var ur = !0; else {
                var At = n(c);
                At !== null && D(w, At.startTime - j), ur = !1
            }
            return ur
        } finally {
            m = null, p = L, x = !1
        }
    }

    var P = !1, N = null, v = -1, y = 5, k = -1;

    function z() {
        return !(e.unstable_now() - k < y)
    }

    function F() {
        if (N !== null) {
            var _ = e.unstable_now();
            k = _;
            var j = !0;
            try {
                j = N(!0, _)
            } finally {
                j ? X() : (P = !1, N = null)
            }
        } else P = !1
    }

    var X;
    if (typeof a == "function") X = function () {
        a(F)
    }; else if (typeof MessageChannel < "u") {
        var G = new MessageChannel, O = G.port2;
        G.port1.onmessage = F, X = function () {
            O.postMessage(null)
        }
    } else X = function () {
        R(F, 0)
    };

    function te(_) {
        N = _, P || (P = !0, X())
    }

    function D(_, j) {
        v = R(function () {
            _(e.unstable_now())
        }, j)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (_) {
        _.callback = null
    }, e.unstable_continueExecution = function () {
        A || x || (A = !0, te(E))
    }, e.unstable_forceFrameRate = function (_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : y = 0 < _ ? Math.floor(1e3 / _) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return p
    }, e.unstable_getFirstCallbackNode = function () {
        return n(s)
    }, e.unstable_next = function (_) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = p
        }
        var L = p;
        p = j;
        try {
            return _()
        } finally {
            p = L
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (_, j) {
        switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                _ = 3
        }
        var L = p;
        p = _;
        try {
            return j()
        } finally {
            p = L
        }
    }, e.unstable_scheduleCallback = function (_, j, L) {
        var $ = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? $ + L : $) : L = $, _) {
            case 1:
                var ne = -1;
                break;
            case 2:
                ne = 250;
                break;
            case 5:
                ne = 1073741823;
                break;
            case 4:
                ne = 1e4;
                break;
            default:
                ne = 5e3
        }
        return ne = L + ne, _ = {
            id: h++,
            callback: j,
            priorityLevel: _,
            startTime: L,
            expirationTime: ne,
            sortIndex: -1
        }, L > $ ? (_.sortIndex = L, t(c, _), n(s) === null && _ === n(c) && (g ? (f(v), v = -1) : g = !0, D(w, L - $))) : (_.sortIndex = ne, t(s, _), A || x || (A = !0, te(E))), _
    }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function (_) {
        var j = p;
        return function () {
            var L = p;
            p = j;
            try {
                return _.apply(this, arguments)
            } finally {
                p = L
            }
        }
    }
})(as);
ss.exports = as;
var jc = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc = Ne, _e = jc;

function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var cs = new Set, Un = {};

function Dt(e, t) {
    sn(e, t), sn(e + "Capture", t)
}

function sn(e, t) {
    for (Un[e] = t, e = 0; e < t.length; e++) cs.add(t[e])
}

var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ql = Object.prototype.hasOwnProperty,
    Oc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Bi = {}, Hi = {};

function Mc(e) {
    return ql.call(Hi, e) ? !0 : ql.call(Bi, e) ? !1 : Oc.test(e) ? Hi[e] = !0 : (Bi[e] = !0, !1)
}

function Ic(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Fc(e, t, n, r) {
    if (t === null || typeof t > "u" || Ic(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ge(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}

var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ue[e] = new ge(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    ue[t] = new ge(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    ue[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ue[e] = new ge(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    ue[e] = new ge(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ue[e] = new ge(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    ue[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Go = /[\-:]([a-z])/g;

function Zo(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Go, Zo);
    ue[t] = new ge(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Go, Zo);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Go, Zo);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ue.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Jo(e, t, n, r) {
    var l = ue.hasOwnProperty(t) ? ue[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Fc(t, n, l, r) && (n = null), r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var tt = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cr = Symbol.for("react.element"),
    Bt = Symbol.for("react.portal"), Ht = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"), fs = Symbol.for("react.provider"), ds = Symbol.for("react.context"),
    bo = Symbol.for("react.forward_ref"), eo = Symbol.for("react.suspense"), to = Symbol.for("react.suspense_list"),
    ei = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), ps = Symbol.for("react.offscreen"),
    Wi = Symbol.iterator;

function yn(e) {
    return e === null || typeof e != "object" ? null : (e = Wi && e[Wi] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Y = Object.assign, Cl;

function Cn(e) {
    if (Cl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Cl = t && t[1] || ""
    }
    return `
` + Cl + e
}

var Nl = !1;

function Pl(e, t) {
    if (!e || Nl) return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (c) {
                var r = c
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (c) {
                r = c
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
            for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
                if (i !== 1 || u !== 1) do if (i--, u--, 0 > u || l[i] !== o[u]) {
                    var s = `
` + l[i].replace(" at new ", " at ");
                    return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                } while (1 <= i && 0 <= u);
                break
            }
        }
    } finally {
        Nl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Cn(e) : ""
}

function Dc(e) {
    switch (e.tag) {
        case 5:
            return Cn(e.type);
        case 16:
            return Cn("Lazy");
        case 13:
            return Cn("Suspense");
        case 19:
            return Cn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Pl(e.type, !1), e;
        case 11:
            return e = Pl(e.type.render, !1), e;
        case 1:
            return e = Pl(e.type, !0), e;
        default:
            return ""
    }
}

function no(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ht:
            return "Fragment";
        case Bt:
            return "Portal";
        case bl:
            return "Profiler";
        case qo:
            return "StrictMode";
        case eo:
            return "Suspense";
        case to:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case ds:
            return (e.displayName || "Context") + ".Consumer";
        case fs:
            return (e._context.displayName || "Context") + ".Provider";
        case bo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ei:
            return t = e.displayName || null, t !== null ? t : no(e.type) || "Memo";
        case rt:
            t = e._payload, e = e._init;
            try {
                return no(e(t))
            } catch {
            }
    }
    return null
}

function Uc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return no(t);
        case 8:
            return t === qo ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function yt(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function ms(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Vc(e) {
    var t = ms(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get, o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return l.call(this)
            }, set: function (i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, { enumerable: n.enumerable }), {
            getValue: function () {
                return r
            }, setValue: function (i) {
                r = "" + i
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function fr(e) {
    e._valueTracker || (e._valueTracker = Vc(e))
}

function gs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ms(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Dr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ro(e, t) {
    var n = t.checked;
    return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Qi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = yt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function hs(e, t) {
    t = t.checked, t != null && Jo(e, "checked", t, !1)
}

function lo(e, t) {
    hs(e, t);
    var n = yt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? oo(e, t.type, n) : t.hasOwnProperty("defaultValue") && oo(e, t.type, yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ki(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function oo(e, t, n) {
    (t !== "number" || Dr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var Nn = Array.isArray;

function tn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + yt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function io(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue })
}

function Yi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(S(92));
            if (Nn(n)) {
                if (1 < n.length) throw Error(S(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = { initialValue: yt(n) }
}

function vs(e, t) {
    var n = yt(t.value), r = yt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Xi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ys(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function uo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ys(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var dr, ws = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (dr = dr || document.createElement("div"), dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Vn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, $c = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function (e) {
    $c.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e]
    })
});

function Ss(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px"
}

function ks(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, l = Ss(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
    }
}

var Bc = Y({ menuitem: !0 }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function so(e, t) {
    if (t) {
        if (Bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(S(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(S(62))
    }
}

function ao(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var co = null;

function ti(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var fo = null, nn = null, rn = null;

function Gi(e) {
    if (e = or(e)) {
        if (typeof fo != "function") throw Error(S(280));
        var t = e.stateNode;
        t && (t = pl(t), fo(e.stateNode, e.type, t))
    }
}

function xs(e) {
    nn ? rn ? rn.push(e) : rn = [e] : nn = e
}

function As() {
    if (nn) {
        var e = nn, t = rn;
        if (rn = nn = null, Gi(e), t) for (e = 0; e < t.length; e++) Gi(t[e])
    }
}

function _s(e, t) {
    return e(t)
}

function Es() {
}

var Tl = !1;

function Cs(e, t, n) {
    if (Tl) return e(t, n);
    Tl = !0;
    try {
        return _s(e, t, n)
    } finally {
        Tl = !1, (nn !== null || rn !== null) && (Es(), As())
    }
}

function $n(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = pl(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(S(231, t, typeof n));
    return n
}

var po = !1;
if (Je) try {
    var wn = {};
    Object.defineProperty(wn, "passive", {
        get: function () {
            po = !0
        }
    }), window.addEventListener("test", wn, wn), window.removeEventListener("test", wn, wn)
} catch {
    po = !1
}

function Hc(e, t, n, r, l, o, i, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (h) {
        this.onError(h)
    }
}

var Ln = !1, Ur = null, Vr = !1, mo = null, Wc = {
    onError: function (e) {
        Ln = !0, Ur = e
    }
};

function Qc(e, t, n, r, l, o, i, u, s) {
    Ln = !1, Ur = null, Hc.apply(Wc, arguments)
}

function Kc(e, t, n, r, l, o, i, u, s) {
    if (Qc.apply(this, arguments), Ln) {
        if (Ln) {
            var c = Ur;
            Ln = !1, Ur = null
        } else throw Error(S(198));
        Vr || (Vr = !0, mo = c)
    }
}

function Ut(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Ns(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Zi(e) {
    if (Ut(e) !== e) throw Error(S(188))
}

function Yc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ut(e), t === null) throw Error(S(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Zi(l), e;
                if (o === r) return Zi(l), t;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== r.return) n = l, r = o; else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (u === r) {
                    i = !0, r = l, n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u;) {
                    if (u === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (u === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(S(189))
            }
        }
        if (n.alternate !== r) throw Error(S(190))
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t
}

function Ps(e) {
    return e = Yc(e), e !== null ? Ts(e) : null
}

function Ts(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ts(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var zs = _e.unstable_scheduleCallback, Ji = _e.unstable_cancelCallback, Xc = _e.unstable_shouldYield,
    Gc = _e.unstable_requestPaint, J = _e.unstable_now, Zc = _e.unstable_getCurrentPriorityLevel,
    ni = _e.unstable_ImmediatePriority, Ls = _e.unstable_UserBlockingPriority, $r = _e.unstable_NormalPriority,
    Jc = _e.unstable_LowPriority, js = _e.unstable_IdlePriority, al = null, We = null;

function qc(e) {
    if (We && typeof We.onCommitFiberRoot == "function") try {
        We.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var De = Math.clz32 ? Math.clz32 : tf, bc = Math.log, ef = Math.LN2;

function tf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bc(e) / ef | 0) | 0
}

var pr = 64, mr = 4194304;

function Pn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Br(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = Pn(u) : (o &= i, o !== 0 && (r = Pn(o)))
    } else i = n & ~l, i !== 0 ? r = Pn(i) : o !== 0 && (r = Pn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function nf(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function rf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - De(o), u = 1 << i, s = l[i];
        s === -1 ? (!(u & n) || u & r) && (l[i] = nf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u
    }
}

function go(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Rs() {
    var e = pr;
    return pr <<= 1, !(pr & 4194240) && (pr = 64), e
}

function zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function rr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n
}

function lf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - De(n), o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function ri(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - De(n), l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}

var U = 0;

function Os(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}

var Ms, li, Is, Fs, Ds, ho = !1, gr = [], ct = null, ft = null, dt = null, Bn = new Map, Hn = new Map, it = [],
    of = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function qi(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            ct = null;
            break;
        case"dragenter":
        case"dragleave":
            ft = null;
            break;
        case"mouseover":
        case"mouseout":
            dt = null;
            break;
        case"pointerover":
        case"pointerout":
            Bn.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            Hn.delete(t.pointerId)
    }
}

function Sn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = or(t), t !== null && li(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function uf(e, t, n, r, l) {
    switch (t) {
        case"focusin":
            return ct = Sn(ct, e, t, n, r, l), !0;
        case"dragenter":
            return ft = Sn(ft, e, t, n, r, l), !0;
        case"mouseover":
            return dt = Sn(dt, e, t, n, r, l), !0;
        case"pointerover":
            var o = l.pointerId;
            return Bn.set(o, Sn(Bn.get(o) || null, e, t, n, r, l)), !0;
        case"gotpointercapture":
            return o = l.pointerId, Hn.set(o, Sn(Hn.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Us(e) {
    var t = Pt(e.target);
    if (t !== null) {
        var n = Ut(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Ns(n), t !== null) {
                    e.blockedOn = t, Ds(e.priority, function () {
                        Is(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Pr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            co = r, n.target.dispatchEvent(r), co = null
        } else return t = or(n), t !== null && li(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function bi(e, t, n) {
    Pr(e) && n.delete(t)
}

function sf() {
    ho = !1, ct !== null && Pr(ct) && (ct = null), ft !== null && Pr(ft) && (ft = null), dt !== null && Pr(dt) && (dt = null), Bn.forEach(bi), Hn.forEach(bi)
}

function kn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ho || (ho = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, sf)))
}

function Wn(e) {
    function t(l) {
        return kn(l, e)
    }

    if (0 < gr.length) {
        kn(gr[0], e);
        for (var n = 1; n < gr.length; n++) {
            var r = gr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ct !== null && kn(ct, e), ft !== null && kn(ft, e), dt !== null && kn(dt, e), Bn.forEach(t), Hn.forEach(t), n = 0; n < it.length; n++) r = it[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < it.length && (n = it[0], n.blockedOn === null);) Us(n), n.blockedOn === null && it.shift()
}

var ln = tt.ReactCurrentBatchConfig, Hr = !0;

function af(e, t, n, r) {
    var l = U, o = ln.transition;
    ln.transition = null;
    try {
        U = 1, oi(e, t, n, r)
    } finally {
        U = l, ln.transition = o
    }
}

function cf(e, t, n, r) {
    var l = U, o = ln.transition;
    ln.transition = null;
    try {
        U = 4, oi(e, t, n, r)
    } finally {
        U = l, ln.transition = o
    }
}

function oi(e, t, n, r) {
    if (Hr) {
        var l = vo(e, t, n, r);
        if (l === null) Vl(e, t, r, Wr, n), qi(e, r); else if (uf(l, e, t, n, r)) r.stopPropagation(); else if (qi(e, r), t & 4 && -1 < of.indexOf(e)) {
            for (; l !== null;) {
                var o = or(l);
                if (o !== null && Ms(o), o = vo(e, t, n, r), o === null && Vl(e, t, r, Wr, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Vl(e, t, r, null, n)
    }
}

var Wr = null;

function vo(e, t, n, r) {
    if (Wr = null, e = ti(r), e = Pt(e), e !== null) if (t = Ut(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = Ns(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Wr = e, null
}

function Vs(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (Zc()) {
                case ni:
                    return 1;
                case Ls:
                    return 4;
                case $r:
                case Jc:
                    return 16;
                case js:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var st = null, ii = null, Tr = null;

function $s() {
    if (Tr) return Tr;
    var e, t = ii, n = t.length, r, l = "value" in st ? st.value : st.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Tr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function zr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function hr() {
    return !0
}

function eu() {
    return !1
}

function Ce(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hr : eu, this.isPropagationStopped = eu, this
    }

    return Y(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr)
        }, persist: function () {
        }, isPersistent: hr
    }), t
}

var hn = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, ui = Ce(hn), lr = Y({}, hn, { view: 0, detail: 0 }), ff = Ce(lr), Ll, jl, xn, cl = Y({}, lr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: si,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Ll = e.screenX - xn.screenX, jl = e.screenY - xn.screenY) : jl = Ll = 0, xn = e), Ll)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : jl
        }
    }), tu = Ce(cl), df = Y({}, cl, { dataTransfer: 0 }), pf = Ce(df), mf = Y({}, lr, { relatedTarget: 0 }), Rl = Ce(mf),
    gf = Y({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hf = Ce(gf), vf = Y({}, hn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), yf = Ce(vf), wf = Y({}, hn, { data: 0 }), nu = Ce(wf), Sf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, kf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, xf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function Af(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xf[e]) ? !!t[e] : !1
}

function si() {
    return Af
}

var _f = Y({}, lr, {
    key: function (e) {
        if (e.key) {
            var t = Sf[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: si,
    charCode: function (e) {
        return e.type === "keypress" ? zr(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), Ef = Ce(_f), Cf = Y({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), ru = Ce(Cf), Nf = Y({}, lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: si
}), Pf = Ce(Nf), Tf = Y({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zf = Ce(Tf), Lf = Y({}, cl, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), jf = Ce(Lf), Rf = [9, 13, 27, 32], ai = Je && "CompositionEvent" in window, jn = null;
Je && "documentMode" in document && (jn = document.documentMode);
var Of = Je && "TextEvent" in window && !jn, Bs = Je && (!ai || jn && 8 < jn && 11 >= jn), lu = " ", ou = !1;

function Hs(e, t) {
    switch (e) {
        case"keyup":
            return Rf.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function Ws(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var Wt = !1;

function Mf(e, t) {
    switch (e) {
        case"compositionend":
            return Ws(t);
        case"keypress":
            return t.which !== 32 ? null : (ou = !0, lu);
        case"textInput":
            return e = t.data, e === lu && ou ? null : e;
        default:
            return null
    }
}

function If(e, t) {
    if (Wt) return e === "compositionend" || !ai && Hs(e, t) ? (e = $s(), Tr = ii = st = null, Wt = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return Bs && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var Ff = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ff[e.type] : t === "textarea"
}

function Qs(e, t, n, r) {
    xs(r), t = Qr(t, "onChange"), 0 < t.length && (n = new ui("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Rn = null, Qn = null;

function Df(e) {
    na(e, 0)
}

function fl(e) {
    var t = Yt(e);
    if (gs(t)) return e
}

function Uf(e, t) {
    if (e === "change") return t
}

var Ks = !1;
if (Je) {
    var Ol;
    if (Je) {
        var Ml = "oninput" in document;
        if (!Ml) {
            var uu = document.createElement("div");
            uu.setAttribute("oninput", "return;"), Ml = typeof uu.oninput == "function"
        }
        Ol = Ml
    } else Ol = !1;
    Ks = Ol && (!document.documentMode || 9 < document.documentMode)
}

function su() {
    Rn && (Rn.detachEvent("onpropertychange", Ys), Qn = Rn = null)
}

function Ys(e) {
    if (e.propertyName === "value" && fl(Qn)) {
        var t = [];
        Qs(t, Qn, e, ti(e)), Cs(Df, t)
    }
}

function Vf(e, t, n) {
    e === "focusin" ? (su(), Rn = t, Qn = n, Rn.attachEvent("onpropertychange", Ys)) : e === "focusout" && su()
}

function $f(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(Qn)
}

function Bf(e, t) {
    if (e === "click") return fl(t)
}

function Hf(e, t) {
    if (e === "input" || e === "change") return fl(t)
}

function Wf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var Ve = typeof Object.is == "function" ? Object.is : Wf;

function Kn(e, t) {
    if (Ve(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ql.call(t, l) || !Ve(e[l], t[l])) return !1
    }
    return !0
}

function au(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function cu(e, t) {
    var n = au(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = au(n)
    }
}

function Xs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Gs() {
    for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = Dr(e.document)
    }
    return t
}

function ci(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Qf(e) {
    var t = Gs(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Xs(n.ownerDocument.documentElement, n)) {
        if (r !== null && ci(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length, o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = cu(n, o);
                var i = cu(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var Kf = Je && "documentMode" in document && 11 >= document.documentMode, Qt = null, yo = null, On = null, wo = !1;

function fu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wo || Qt == null || Qt !== Dr(r) || (r = Qt, "selectionStart" in r && ci(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), On && Kn(On, r) || (On = r, r = Qr(yo, "onSelect"), 0 < r.length && (t = new ui("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Qt)))
}

function vr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var Kt = {
    animationend: vr("Animation", "AnimationEnd"),
    animationiteration: vr("Animation", "AnimationIteration"),
    animationstart: vr("Animation", "AnimationStart"),
    transitionend: vr("Transition", "TransitionEnd")
}, Il = {}, Zs = {};
Je && (Zs = document.createElement("div").style, "AnimationEvent" in window || (delete Kt.animationend.animation, delete Kt.animationiteration.animation, delete Kt.animationstart.animation), "TransitionEvent" in window || delete Kt.transitionend.transition);

function dl(e) {
    if (Il[e]) return Il[e];
    if (!Kt[e]) return e;
    var t = Kt[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Zs) return Il[e] = t[n];
    return e
}

var Js = dl("animationend"), qs = dl("animationiteration"), bs = dl("animationstart"), ea = dl("transitionend"),
    ta = new Map,
    du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function St(e, t) {
    ta.set(e, t), Dt(t, [e])
}

for (var Fl = 0; Fl < du.length; Fl++) {
    var Dl = du[Fl], Yf = Dl.toLowerCase(), Xf = Dl[0].toUpperCase() + Dl.slice(1);
    St(Yf, "on" + Xf)
}
St(Js, "onAnimationEnd");
St(qs, "onAnimationIteration");
St(bs, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(ea, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
Dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));

function pu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Kc(r, t, void 0, e), e.currentTarget = null
}

function na(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], l = r.event;
        r = r.listeners;
        e:{
            var o = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
                var u = r[i], s = u.instance, c = u.currentTarget;
                if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
                pu(l, u, c), o = s
            } else for (i = 0; i < r.length; i++) {
                if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
                pu(l, u, c), o = s
            }
        }
    }
    if (Vr) throw e = mo, Vr = !1, mo = null, e
}

function B(e, t) {
    var n = t[_o];
    n === void 0 && (n = t[_o] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ra(t, e, 2, !1), n.add(r))
}

function Ul(e, t, n) {
    var r = 0;
    t && (r |= 4), ra(n, e, r, t)
}

var yr = "_reactListening" + Math.random().toString(36).slice(2);

function Yn(e) {
    if (!e[yr]) {
        e[yr] = !0, cs.forEach(function (n) {
            n !== "selectionchange" && (Gf.has(n) || Ul(n, !1, e), Ul(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[yr] || (t[yr] = !0, Ul("selectionchange", !1, t))
    }
}

function ra(e, t, n, r) {
    switch (Vs(t)) {
        case 1:
            var l = af;
            break;
        case 4:
            l = cf;
            break;
        default:
            l = oi
    }
    n = l.bind(null, t, n, e), l = void 0, !po || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1)
}

function Vl(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (i === 4) for (i = r.return; i !== null;) {
                var s = i.tag;
                if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                i = i.return
            }
            for (; u !== null;) {
                if (i = Pt(u), i === null) return;
                if (s = i.tag, s === 5 || s === 6) {
                    r = o = i;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Cs(function () {
        var c = o, h = ti(n), m = [];
        e:{
            var p = ta.get(e);
            if (p !== void 0) {
                var x = ui, A = e;
                switch (e) {
                    case"keypress":
                        if (zr(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        x = Ef;
                        break;
                    case"focusin":
                        A = "focus", x = Rl;
                        break;
                    case"focusout":
                        A = "blur", x = Rl;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        x = Rl;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        x = tu;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        x = pf;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        x = Pf;
                        break;
                    case Js:
                    case qs:
                    case bs:
                        x = hf;
                        break;
                    case ea:
                        x = zf;
                        break;
                    case"scroll":
                        x = ff;
                        break;
                    case"wheel":
                        x = jf;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        x = yf;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        x = ru
                }
                var g = (t & 4) !== 0, R = !g && e === "scroll", f = g ? p !== null ? p + "Capture" : null : p;
                g = [];
                for (var a = c, d; a !== null;) {
                    d = a;
                    var w = d.stateNode;
                    if (d.tag === 5 && w !== null && (d = w, f !== null && (w = $n(a, f), w != null && g.push(Xn(a, w, d)))), R) break;
                    a = a.return
                }
                0 < g.length && (p = new x(p, A, null, n, h), m.push({ event: p, listeners: g }))
            }
        }
        if (!(t & 7)) {
            e:{
                if (p = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", p && n !== co && (A = n.relatedTarget || n.fromElement) && (Pt(A) || A[qe])) break e;
                if ((x || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, x ? (A = n.relatedTarget || n.toElement, x = c, A = A ? Pt(A) : null, A !== null && (R = Ut(A), A !== R || A.tag !== 5 && A.tag !== 6) && (A = null)) : (x = null, A = c), x !== A)) {
                    if (g = tu, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (g = ru, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), R = x == null ? p : Yt(x), d = A == null ? p : Yt(A), p = new g(w, a + "leave", x, n, h), p.target = R, p.relatedTarget = d, w = null, Pt(h) === c && (g = new g(f, a + "enter", A, n, h), g.target = d, g.relatedTarget = R, w = g), R = w, x && A) t:{
                        for (g = x, f = A, a = 0, d = g; d; d = Vt(d)) a++;
                        for (d = 0, w = f; w; w = Vt(w)) d++;
                        for (; 0 < a - d;) g = Vt(g), a--;
                        for (; 0 < d - a;) f = Vt(f), d--;
                        for (; a--;) {
                            if (g === f || f !== null && g === f.alternate) break t;
                            g = Vt(g), f = Vt(f)
                        }
                        g = null
                    } else g = null;
                    x !== null && mu(m, p, x, g, !1), A !== null && R !== null && mu(m, R, A, g, !0)
                }
            }
            e:{
                if (p = c ? Yt(c) : window, x = p.nodeName && p.nodeName.toLowerCase(), x === "select" || x === "input" && p.type === "file") var E = Uf; else if (iu(p)) if (Ks) E = Hf; else {
                    E = $f;
                    var P = Vf
                } else (x = p.nodeName) && x.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Bf);
                if (E && (E = E(e, c))) {
                    Qs(m, E, n, h);
                    break e
                }
                P && P(e, p, c), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && oo(p, "number", p.value)
            }
            switch (P = c ? Yt(c) : window, e) {
                case"focusin":
                    (iu(P) || P.contentEditable === "true") && (Qt = P, yo = c, On = null);
                    break;
                case"focusout":
                    On = yo = Qt = null;
                    break;
                case"mousedown":
                    wo = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    wo = !1, fu(m, n, h);
                    break;
                case"selectionchange":
                    if (Kf) break;
                case"keydown":
                case"keyup":
                    fu(m, n, h)
            }
            var N;
            if (ai) e:{
                switch (e) {
                    case"compositionstart":
                        var v = "onCompositionStart";
                        break e;
                    case"compositionend":
                        v = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        v = "onCompositionUpdate";
                        break e
                }
                v = void 0
            } else Wt ? Hs(e, n) && (v = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (v = "onCompositionStart");
            v && (Bs && n.locale !== "ko" && (Wt || v !== "onCompositionStart" ? v === "onCompositionEnd" && Wt && (N = $s()) : (st = h, ii = "value" in st ? st.value : st.textContent, Wt = !0)), P = Qr(c, v), 0 < P.length && (v = new nu(v, e, null, n, h), m.push({
                event: v,
                listeners: P
            }), N ? v.data = N : (N = Ws(n), N !== null && (v.data = N)))), (N = Of ? Mf(e, n) : If(e, n)) && (c = Qr(c, "onBeforeInput"), 0 < c.length && (h = new nu("onBeforeInput", "beforeinput", null, n, h), m.push({
                event: h,
                listeners: c
            }), h.data = N))
        }
        na(m, t)
    })
}

function Xn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
}

function Qr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e, o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = $n(e, n), o != null && r.unshift(Xn(e, o, l)), o = $n(e, t), o != null && r.push(Xn(e, o, l))), e = e.return
    }
    return r
}

function Vt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function mu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var u = n, s = u.alternate, c = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 && c !== null && (u = c, l ? (s = $n(n, o), s != null && i.unshift(Xn(n, s, u))) : l || (s = $n(n, o), s != null && i.push(Xn(n, s, u)))), n = n.return
    }
    i.length !== 0 && e.push({ event: t, listeners: i })
}

var Zf = /\r\n?/g, Jf = /\u0000|\uFFFD/g;

function gu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zf, `
`).replace(Jf, "")
}

function wr(e, t, n) {
    if (t = gu(t), gu(e) !== t && n) throw Error(S(425))
}

function Kr() {
}

var So = null, ko = null;

function xo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var Ao = typeof setTimeout == "function" ? setTimeout : void 0,
    qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    hu = typeof Promise == "function" ? Promise : void 0,
    bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function (e) {
        return hu.resolve(null).then(e).catch(ed)
    } : Ao;

function ed(e) {
    setTimeout(function () {
        throw e
    })
}

function $l(e, t) {
    var n = t, r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
            if (r === 0) {
                e.removeChild(l), Wn(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Wn(t)
}

function pt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function vu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var vn = Math.random().toString(36).slice(2), He = "__reactFiber$" + vn, Gn = "__reactProps$" + vn,
    qe = "__reactContainer$" + vn, _o = "__reactEvents$" + vn, td = "__reactListeners$" + vn,
    nd = "__reactHandles$" + vn;

function Pt(e) {
    var t = e[He];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[qe] || n[He]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vu(e); e !== null;) {
                if (n = e[He]) return n;
                e = vu(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function or(e) {
    return e = e[He] || e[qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33))
}

function pl(e) {
    return e[Gn] || null
}

var Eo = [], Xt = -1;

function kt(e) {
    return { current: e }
}

function H(e) {
    0 > Xt || (e.current = Eo[Xt], Eo[Xt] = null, Xt--)
}

function V(e, t) {
    Xt++, Eo[Xt] = e.current, e.current = t
}

var wt = {}, fe = kt(wt), ye = kt(!1), Rt = wt;

function an(e, t) {
    var n = e.type.contextTypes;
    if (!n) return wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function we(e) {
    return e = e.childContextTypes, e != null
}

function Yr() {
    H(ye), H(fe)
}

function yu(e, t, n) {
    if (fe.current !== wt) throw Error(S(168));
    V(fe, t), V(ye, n)
}

function la(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, Uc(e) || "Unknown", l));
    return Y({}, n, r)
}

function Xr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wt, Rt = fe.current, V(fe, e), V(ye, ye.current), !0
}

function wu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n ? (e = la(e, t, Rt), r.__reactInternalMemoizedMergedChildContext = e, H(ye), H(fe), V(fe, e)) : H(ye), V(ye, n)
}

var Ye = null, ml = !1, Bl = !1;

function oa(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}

function rd(e) {
    ml = !0, oa(e)
}

function xt() {
    if (!Bl && Ye !== null) {
        Bl = !0;
        var e = 0, t = U;
        try {
            var n = Ye;
            for (U = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ye = null, ml = !1
        } catch (l) {
            throw Ye !== null && (Ye = Ye.slice(e + 1)), zs(ni, xt), l
        } finally {
            U = t, Bl = !1
        }
    }
    return null
}

var Gt = [], Zt = 0, Gr = null, Zr = 0, Pe = [], Te = 0, Ot = null, Xe = 1, Ge = "";

function Et(e, t) {
    Gt[Zt++] = Zr, Gt[Zt++] = Gr, Gr = e, Zr = t
}

function ia(e, t, n) {
    Pe[Te++] = Xe, Pe[Te++] = Ge, Pe[Te++] = Ot, Ot = e;
    var r = Xe;
    e = Ge;
    var l = 32 - De(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - De(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Xe = 1 << 32 - De(t) + l | n << l | r, Ge = o + e
    } else Xe = 1 << o | n << l | r, Ge = e
}

function fi(e) {
    e.return !== null && (Et(e, 1), ia(e, 1, 0))
}

function di(e) {
    for (; e === Gr;) Gr = Gt[--Zt], Gt[Zt] = null, Zr = Gt[--Zt], Gt[Zt] = null;
    for (; e === Ot;) Ot = Pe[--Te], Pe[Te] = null, Ge = Pe[--Te], Pe[Te] = null, Xe = Pe[--Te], Pe[Te] = null
}

var Ae = null, xe = null, W = !1, Fe = null;

function ua(e, t) {
    var n = ze(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Su(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, xe = pt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, xe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? {
                id: Xe,
                overflow: Ge
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, xe = null, !0) : !1;
        default:
            return !1
    }
}

function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function No(e) {
    if (W) {
        var t = xe;
        if (t) {
            var n = t;
            if (!Su(e, t)) {
                if (Co(e)) throw Error(S(418));
                t = pt(n.nextSibling);
                var r = Ae;
                t && Su(e, t) ? ua(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Ae = e)
            }
        } else {
            if (Co(e)) throw Error(S(418));
            e.flags = e.flags & -4097 | 2, W = !1, Ae = e
        }
    }
}

function ku(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ae = e
}

function Sr(e) {
    if (e !== Ae) return !1;
    if (!W) return ku(e), W = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps)), t && (t = xe)) {
        if (Co(e)) throw sa(), Error(S(418));
        for (; t;) ua(e, t), t = pt(t.nextSibling)
    }
    if (ku(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            xe = pt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            xe = null
        }
    } else xe = Ae ? pt(e.stateNode.nextSibling) : null;
    return !0
}

function sa() {
    for (var e = xe; e;) e = pt(e.nextSibling)
}

function cn() {
    xe = Ae = null, W = !1
}

function pi(e) {
    Fe === null ? Fe = [e] : Fe.push(e)
}

var ld = tt.ReactCurrentBatchConfig;

function An(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(S(309));
                var r = n.stateNode
            }
            if (!r) throw Error(S(147, e));
            var l = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(S(284));
        if (!n._owner) throw Error(S(290, e))
    }
    return e
}

function kr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function xu(e) {
    var t = e._init;
    return t(e._payload)
}

function aa(e) {
    function t(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a)
        }
    }

    function n(f, a) {
        if (!e) return null;
        for (; a !== null;) t(f, a), a = a.sibling;
        return null
    }

    function r(f, a) {
        for (f = new Map; a !== null;) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
        return f
    }

    function l(f, a) {
        return f = vt(f, a), f.index = 0, f.sibling = null, f
    }

    function o(f, a, d) {
        return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function u(f, a, d, w) {
        return a === null || a.tag !== 6 ? (a = Gl(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a)
    }

    function s(f, a, d, w) {
        var E = d.type;
        return E === Ht ? h(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rt && xu(E) === a.type) ? (w = l(a, d.props), w.ref = An(f, a, d), w.return = f, w) : (w = Fr(d.type, d.key, d.props, null, f.mode, w), w.ref = An(f, a, d), w.return = f, w)
    }

    function c(f, a, d, w) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Zl(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a)
    }

    function h(f, a, d, w, E) {
        return a === null || a.tag !== 7 ? (a = jt(d, f.mode, w, E), a.return = f, a) : (a = l(a, d), a.return = f, a)
    }

    function m(f, a, d) {
        if (typeof a == "string" && a !== "" || typeof a == "number") return a = Gl("" + a, f.mode, d), a.return = f, a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case cr:
                    return d = Fr(a.type, a.key, a.props, null, f.mode, d), d.ref = An(f, null, a), d.return = f, d;
                case Bt:
                    return a = Zl(a, f.mode, d), a.return = f, a;
                case rt:
                    var w = a._init;
                    return m(f, w(a._payload), d)
            }
            if (Nn(a) || yn(a)) return a = jt(a, f.mode, d, null), a.return = f, a;
            kr(f, a)
        }
        return null
    }

    function p(f, a, d, w) {
        var E = a !== null ? a.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, a, "" + d, w);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case cr:
                    return d.key === E ? s(f, a, d, w) : null;
                case Bt:
                    return d.key === E ? c(f, a, d, w) : null;
                case rt:
                    return E = d._init, p(f, a, E(d._payload), w)
            }
            if (Nn(d) || yn(d)) return E !== null ? null : h(f, a, d, w, null);
            kr(f, d)
        }
        return null
    }

    function x(f, a, d, w, E) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, u(a, f, "" + w, E);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case cr:
                    return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, E);
                case Bt:
                    return f = f.get(w.key === null ? d : w.key) || null, c(a, f, w, E);
                case rt:
                    var P = w._init;
                    return x(f, a, d, P(w._payload), E)
            }
            if (Nn(w) || yn(w)) return f = f.get(d) || null, h(a, f, w, E, null);
            kr(a, w)
        }
        return null
    }

    function A(f, a, d, w) {
        for (var E = null, P = null, N = a, v = a = 0, y = null; N !== null && v < d.length; v++) {
            N.index > v ? (y = N, N = null) : y = N.sibling;
            var k = p(f, N, d[v], w);
            if (k === null) {
                N === null && (N = y);
                break
            }
            e && N && k.alternate === null && t(f, N), a = o(k, a, v), P === null ? E = k : P.sibling = k, P = k, N = y
        }
        if (v === d.length) return n(f, N), W && Et(f, v), E;
        if (N === null) {
            for (; v < d.length; v++) N = m(f, d[v], w), N !== null && (a = o(N, a, v), P === null ? E = N : P.sibling = N, P = N);
            return W && Et(f, v), E
        }
        for (N = r(f, N); v < d.length; v++) y = x(N, f, v, d[v], w), y !== null && (e && y.alternate !== null && N.delete(y.key === null ? v : y.key), a = o(y, a, v), P === null ? E = y : P.sibling = y, P = y);
        return e && N.forEach(function (z) {
            return t(f, z)
        }), W && Et(f, v), E
    }

    function g(f, a, d, w) {
        var E = yn(d);
        if (typeof E != "function") throw Error(S(150));
        if (d = E.call(d), d == null) throw Error(S(151));
        for (var P = E = null, N = a, v = a = 0, y = null, k = d.next(); N !== null && !k.done; v++, k = d.next()) {
            N.index > v ? (y = N, N = null) : y = N.sibling;
            var z = p(f, N, k.value, w);
            if (z === null) {
                N === null && (N = y);
                break
            }
            e && N && z.alternate === null && t(f, N), a = o(z, a, v), P === null ? E = z : P.sibling = z, P = z, N = y
        }
        if (k.done) return n(f, N), W && Et(f, v), E;
        if (N === null) {
            for (; !k.done; v++, k = d.next()) k = m(f, k.value, w), k !== null && (a = o(k, a, v), P === null ? E = k : P.sibling = k, P = k);
            return W && Et(f, v), E
        }
        for (N = r(f, N); !k.done; v++, k = d.next()) k = x(N, f, v, k.value, w), k !== null && (e && k.alternate !== null && N.delete(k.key === null ? v : k.key), a = o(k, a, v), P === null ? E = k : P.sibling = k, P = k);
        return e && N.forEach(function (F) {
            return t(f, F)
        }), W && Et(f, v), E
    }

    function R(f, a, d, w) {
        if (typeof d == "object" && d !== null && d.type === Ht && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case cr:
                    e:{
                        for (var E = d.key, P = a; P !== null;) {
                            if (P.key === E) {
                                if (E = d.type, E === Ht) {
                                    if (P.tag === 7) {
                                        n(f, P.sibling), a = l(P, d.props.children), a.return = f, f = a;
                                        break e
                                    }
                                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rt && xu(E) === P.type) {
                                    n(f, P.sibling), a = l(P, d.props), a.ref = An(f, P, d), a.return = f, f = a;
                                    break e
                                }
                                n(f, P);
                                break
                            } else t(f, P);
                            P = P.sibling
                        }
                        d.type === Ht ? (a = jt(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = Fr(d.type, d.key, d.props, null, f.mode, w), w.ref = An(f, a, d), w.return = f, f = w)
                    }
                    return i(f);
                case Bt:
                    e:{
                        for (P = d.key; a !== null;) {
                            if (a.key === P) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                                break e
                            } else {
                                n(f, a);
                                break
                            } else t(f, a);
                            a = a.sibling
                        }
                        a = Zl(d, f.mode, w), a.return = f, f = a
                    }
                    return i(f);
                case rt:
                    return P = d._init, R(f, a, P(d._payload), w)
            }
            if (Nn(d)) return A(f, a, d, w);
            if (yn(d)) return g(f, a, d, w);
            kr(f, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Gl(d, f.mode, w), a.return = f, f = a), i(f)) : n(f, a)
    }

    return R
}

var fn = aa(!0), ca = aa(!1), Jr = kt(null), qr = null, Jt = null, mi = null;

function gi() {
    mi = Jt = qr = null
}

function hi(e) {
    var t = Jr.current;
    H(Jr), e._currentValue = t
}

function Po(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function on(e, t) {
    qr = e, mi = Jt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ve = !0), e.firstContext = null)
}

function je(e) {
    var t = e._currentValue;
    if (mi !== e) if (e = { context: e, memoizedValue: t, next: null }, Jt === null) {
        if (qr === null) throw Error(S(308));
        Jt = e, qr.dependencies = { lanes: 0, firstContext: e }
    } else Jt = Jt.next = e;
    return t
}

var Tt = null;

function vi(e) {
    Tt === null ? Tt = [e] : Tt.push(e)
}

function fa(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, vi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, be(e, r)
}

function be(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var lt = !1;

function yi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null
    }
}

function da(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Ze(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}

function mt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, I & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, be(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, vi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, be(e, n)
}

function Lr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n)
    }
}

function Au(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function br(e, t, n, r) {
    var l = e.updateQueue;
    lt = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u, c = s.next;
        s.next = null, i === null ? o = c : i.next = c, i = s;
        var h = e.alternate;
        h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s))
    }
    if (o !== null) {
        var m = l.baseState;
        i = 0, h = c = s = null, u = o;
        do {
            var p = u.lane, x = u.eventTime;
            if ((r & p) === p) {
                h !== null && (h = h.next = {
                    eventTime: x,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e:{
                    var A = e, g = u;
                    switch (p = t, x = n, g.tag) {
                        case 1:
                            if (A = g.payload, typeof A == "function") {
                                m = A.call(x, m, p);
                                break e
                            }
                            m = A;
                            break e;
                        case 3:
                            A.flags = A.flags & -65537 | 128;
                        case 0:
                            if (A = g.payload, p = typeof A == "function" ? A.call(x, m, p) : A, p == null) break e;
                            m = Y({}, m, p);
                            break e;
                        case 2:
                            lt = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u))
            } else x = {
                eventTime: x,
                lane: p,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, h === null ? (c = h = x, s = m) : h = h.next = x, i |= p;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
            }
        } while (!0);
        if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        It |= i, e.lanes = i, e.memoizedState = m
    }
}

function _u(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], l = r.callback;
        if (l !== null) {
            if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
            l.call(r)
        }
    }
}

var ir = {}, Qe = kt(ir), Zn = kt(ir), Jn = kt(ir);

function zt(e) {
    if (e === ir) throw Error(S(174));
    return e
}

function wi(e, t) {
    switch (V(Jn, t), V(Zn, e), V(Qe, ir), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : uo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uo(t, e)
    }
    H(Qe), V(Qe, t)
}

function dn() {
    H(Qe), H(Zn), H(Jn)
}

function pa(e) {
    zt(Jn.current);
    var t = zt(Qe.current), n = uo(t, e.type);
    t !== n && (V(Zn, e), V(Qe, n))
}

function Si(e) {
    Zn.current === e && (H(Qe), H(Zn))
}

var Q = kt(0);

function el(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var Hl = [];

function ki() {
    for (var e = 0; e < Hl.length; e++) Hl[e]._workInProgressVersionPrimary = null;
    Hl.length = 0
}

var jr = tt.ReactCurrentDispatcher, Wl = tt.ReactCurrentBatchConfig, Mt = 0, K = null, b = null, re = null, tl = !1,
    Mn = !1, qn = 0, od = 0;

function se() {
    throw Error(S(321))
}

function xi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ve(e[n], t[n])) return !1;
    return !0
}

function Ai(e, t, n, r, l, o) {
    if (Mt = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jr.current = e === null || e.memoizedState === null ? ad : cd, e = n(r, l), Mn) {
        o = 0;
        do {
            if (Mn = !1, qn = 0, 25 <= o) throw Error(S(301));
            o += 1, re = b = null, t.updateQueue = null, jr.current = fd, e = n(r, l)
        } while (Mn)
    }
    if (jr.current = nl, t = b !== null && b.next !== null, Mt = 0, re = b = K = null, tl = !1, t) throw Error(S(300));
    return e
}

function _i() {
    var e = qn !== 0;
    return qn = 0, e
}

function Be() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return re === null ? K.memoizedState = re = e : re = re.next = e, re
}

function Re() {
    if (b === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = b.next;
    var t = re === null ? K.memoizedState : re.next;
    if (t !== null) re = t, b = e; else {
        if (e === null) throw Error(S(310));
        b = e, e = {
            memoizedState: b.memoizedState,
            baseState: b.baseState,
            baseQueue: b.baseQueue,
            queue: b.queue,
            next: null
        }, re === null ? K.memoizedState = re = e : re = re.next = e
    }
    return re
}

function bn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ql(e) {
    var t = Re(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = b, l = r.baseQueue, o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var u = i = null, s = null, c = o;
        do {
            var h = c.lane;
            if ((Mt & h) === h) s !== null && (s = s.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                var m = {
                    lane: h,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (u = s = m, i = r) : s = s.next = m, K.lanes |= h, It |= h
            }
            c = c.next
        } while (c !== null && c !== o);
        s === null ? i = r : s.next = u, Ve(r, t.memoizedState) || (ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, K.lanes |= o, It |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Kl(e) {
    var t = Re(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Ve(o, t.memoizedState) || (ve = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function ma() {
}

function ga(e, t) {
    var n = K, r = Re(), l = t(), o = !Ve(r.memoizedState, l);
    if (o && (r.memoizedState = l, ve = !0), r = r.queue, Ei(ya.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
        if (n.flags |= 2048, er(9, va.bind(null, n, r, l, t), void 0, null), le === null) throw Error(S(349));
        Mt & 30 || ha(n, t, l)
    }
    return l
}

function ha(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function va(e, t, n, r) {
    t.value = n, t.getSnapshot = r, wa(t) && Sa(e)
}

function ya(e, t, n) {
    return n(function () {
        wa(t) && Sa(e)
    })
}

function wa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ve(e, n)
    } catch {
        return !0
    }
}

function Sa(e) {
    var t = be(e, 1);
    t !== null && Ue(t, e, 1, -1)
}

function Eu(e) {
    var t = Be();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = sd.bind(null, K, e), [t.memoizedState, e]
}

function er(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ka() {
    return Re().memoizedState
}

function Rr(e, t, n, r) {
    var l = Be();
    K.flags |= e, l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r)
}

function gl(e, t, n, r) {
    var l = Re();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (b !== null) {
        var i = b.memoizedState;
        if (o = i.destroy, r !== null && xi(r, i.deps)) {
            l.memoizedState = er(t, n, o, r);
            return
        }
    }
    K.flags |= e, l.memoizedState = er(1 | t, n, o, r)
}

function Cu(e, t) {
    return Rr(8390656, 8, e, t)
}

function Ei(e, t) {
    return gl(2048, 8, e, t)
}

function xa(e, t) {
    return gl(4, 2, e, t)
}

function Aa(e, t) {
    return gl(4, 4, e, t)
}

function _a(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function Ea(e, t, n) {
    return n = n != null ? n.concat([e]) : null, gl(4, 4, _a.bind(null, t, e), n)
}

function Ci() {
}

function Ca(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Na(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Pa(e, t, n) {
    return Mt & 21 ? (Ve(n, t) || (n = Rs(), K.lanes |= n, It |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ve = !0), e.memoizedState = n)
}

function id(e, t) {
    var n = U;
    U = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Wl.transition;
    Wl.transition = {};
    try {
        e(!1), t()
    } finally {
        U = n, Wl.transition = r
    }
}

function Ta() {
    return Re().memoizedState
}

function ud(e, t, n) {
    var r = ht(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, za(e)) La(t, n); else if (n = fa(e, t, n, r), n !== null) {
        var l = pe();
        Ue(n, e, r, l), ja(n, t, r)
    }
}

function sd(e, t, n) {
    var r = ht(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (za(e)) La(t, l); else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState, u = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, Ve(u, i)) {
                var s = t.interleaved;
                s === null ? (l.next = l, vi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {
        } finally {
        }
        n = fa(e, t, l, r), n !== null && (l = pe(), Ue(n, e, r, l), ja(n, t, r))
    }
}

function za(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K
}

function La(e, t) {
    Mn = tl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ja(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n)
    }
}

var nl = {
    readContext: je,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1
}, ad = {
    readContext: je, useCallback: function (e, t) {
        return Be().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: je, useEffect: Cu, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, Rr(4194308, 4, _a.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return Rr(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return Rr(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = Be();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = Be();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = ud.bind(null, K, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = Be();
        return e = { current: e }, t.memoizedState = e
    }, useState: Eu, useDebugValue: Ci, useDeferredValue: function (e) {
        return Be().memoizedState = e
    }, useTransition: function () {
        var e = Eu(!1), t = e[0];
        return e = id.bind(null, e[1]), Be().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = K, l = Be();
        if (W) {
            if (n === void 0) throw Error(S(407));
            n = n()
        } else {
            if (n = t(), le === null) throw Error(S(349));
            Mt & 30 || ha(r, t, n)
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return l.queue = o, Cu(ya.bind(null, r, o, e), [e]), r.flags |= 2048, er(9, va.bind(null, r, o, n, t), void 0, null), n
    }, useId: function () {
        var e = Be(), t = le.identifierPrefix;
        if (W) {
            var n = Ge, r = Xe;
            n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = od++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, cd = {
    readContext: je,
    useCallback: Ca,
    useContext: je,
    useEffect: Ei,
    useImperativeHandle: Ea,
    useInsertionEffect: xa,
    useLayoutEffect: Aa,
    useMemo: Na,
    useReducer: Ql,
    useRef: ka,
    useState: function () {
        return Ql(bn)
    },
    useDebugValue: Ci,
    useDeferredValue: function (e) {
        var t = Re();
        return Pa(t, b.memoizedState, e)
    },
    useTransition: function () {
        var e = Ql(bn)[0], t = Re().memoizedState;
        return [e, t]
    },
    useMutableSource: ma,
    useSyncExternalStore: ga,
    useId: Ta,
    unstable_isNewReconciler: !1
}, fd = {
    readContext: je,
    useCallback: Ca,
    useContext: je,
    useEffect: Ei,
    useImperativeHandle: Ea,
    useInsertionEffect: xa,
    useLayoutEffect: Aa,
    useMemo: Na,
    useReducer: Kl,
    useRef: ka,
    useState: function () {
        return Kl(bn)
    },
    useDebugValue: Ci,
    useDeferredValue: function (e) {
        var t = Re();
        return b === null ? t.memoizedState = e : Pa(t, b.memoizedState, e)
    },
    useTransition: function () {
        var e = Kl(bn)[0], t = Re().memoizedState;
        return [e, t]
    },
    useMutableSource: ma,
    useSyncExternalStore: ga,
    useId: Ta,
    unstable_isNewReconciler: !1
};

function Me(e, t) {
    if (e && e.defaultProps) {
        t = Y({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function To(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var hl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Ut(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pe(), l = ht(e), o = Ze(r, l);
        o.payload = t, n != null && (o.callback = n), t = mt(e, o, l), t !== null && (Ue(t, e, l, r), Lr(t, e, l))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pe(), l = ht(e), o = Ze(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = mt(e, o, l), t !== null && (Ue(t, e, l, r), Lr(t, e, l))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pe(), r = ht(e), l = Ze(n, r);
        l.tag = 2, t != null && (l.callback = t), t = mt(e, l, r), t !== null && (Ue(t, e, r, n), Lr(t, e, r))
    }
};

function Nu(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Kn(n, r) || !Kn(l, o) : !0
}

function Ra(e, t, n) {
    var r = !1, l = wt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = je(o) : (l = we(t) ? Rt : fe.current, r = t.contextTypes, o = (r = r != null) ? an(e, l) : wt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Pu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null)
}

function zo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, yi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = je(o) : (o = we(t) ? Rt : fe.current, l.context = an(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (To(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), br(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function pn(e, t) {
    try {
        var n = "", r = t;
        do n += Dc(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return { value: e, source: t, stack: l, digest: null }
}

function Yl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}

function Lo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var dd = typeof WeakMap == "function" ? WeakMap : Map;

function Oa(e, t, n) {
    n = Ze(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function () {
        ll || (ll = !0, $o = r), Lo(e, t)
    }, n
}

function Ma(e, t, n) {
    n = Ze(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function () {
            return r(l)
        }, n.callback = function () {
            Lo(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        Lo(e, t), typeof r != "function" && (gt === null ? gt = new Set([this]) : gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" })
    }), n
}

function Tu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new dd;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Cd.bind(null, e, t, n), t.then(e, e))
}

function zu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Lu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ze(-1, 1), t.tag = 2, mt(n, t, 1))), n.lanes |= 1), e)
}

var pd = tt.ReactCurrentOwner, ve = !1;

function de(e, t, n, r) {
    t.child = e === null ? ca(t, null, n, r) : fn(t, e.child, n, r)
}

function ju(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return on(t, l), r = Ai(e, t, n, r, o, l), n = _i(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, et(e, t, l)) : (W && n && fi(t), t.flags |= 1, de(e, t, r, l), t.child)
}

function Ru(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Oi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ia(e, t, o, r, l)) : (e = Fr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Kn, n(i, r) && e.ref === t.ref) return et(e, t, l)
    }
    return t.flags |= 1, e = vt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ia(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Kn(o, r) && e.ref === t.ref) if (ve = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = !0); else return t.lanes = e.lanes, et(e, t, l)
    }
    return jo(e, t, n, r, l)
}

function Fa(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, V(bt, ke), ke |= n; else {
        if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, V(bt, ke), ke |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = o !== null ? o.baseLanes : n, V(bt, ke), ke |= r
    } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, V(bt, ke), ke |= r;
    return de(e, t, l, n), t.child
}

function Da(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function jo(e, t, n, r, l) {
    var o = we(n) ? Rt : fe.current;
    return o = an(t, o), on(t, l), n = Ai(e, t, n, r, o, l), r = _i(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, et(e, t, l)) : (W && r && fi(t), t.flags |= 1, de(e, t, n, l), t.child)
}

function Ou(e, t, n, r, l) {
    if (we(n)) {
        var o = !0;
        Xr(t)
    } else o = !1;
    if (on(t, l), t.stateNode === null) Or(e, t), Ra(t, n, r), zo(t, n, r, l), r = !0; else if (e === null) {
        var i = t.stateNode, u = t.memoizedProps;
        i.props = u;
        var s = i.context, c = n.contextType;
        typeof c == "object" && c !== null ? c = je(c) : (c = we(n) ? Rt : fe.current, c = an(t, c));
        var h = n.getDerivedStateFromProps,
            m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Pu(t, i, r, c), lt = !1;
        var p = t.memoizedState;
        i.state = p, br(t, r, i, l), s = t.memoizedState, u !== r || p !== s || ye.current || lt ? (typeof h == "function" && (To(t, n, h, r), s = t.memoizedState), (u = lt || Nu(t, n, u, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, da(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Me(t.type, u), i.props = c, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = je(s) : (s = we(n) ? Rt : fe.current, s = an(t, s));
        var x = n.getDerivedStateFromProps;
        (h = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && Pu(t, i, r, s), lt = !1, p = t.memoizedState, i.state = p, br(t, r, i, l);
        var A = t.memoizedState;
        u !== m || p !== A || ye.current || lt ? (typeof x == "function" && (To(t, n, x, r), A = t.memoizedState), (c = lt || Nu(t, n, c, r, p, A, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, A, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, A, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = A), i.props = r, i.state = A, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ro(e, t, n, r, o, l)
}

function Ro(e, t, n, r, l, o) {
    Da(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && wu(t, n, !1), et(e, t, o);
    r = t.stateNode, pd.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = fn(t, e.child, null, o), t.child = fn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && wu(t, n, !0), t.child
}

function Ua(e) {
    var t = e.stateNode;
    t.pendingContext ? yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yu(e, t.context, !1), wi(e, t.containerInfo)
}

function Mu(e, t, n, r, l) {
    return cn(), pi(l), t.flags |= 256, de(e, t, n, r), t.child
}

var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };

function Mo(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
}

function Va(e, t, n) {
    var r = t.pendingProps, l = Q.current, o = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), V(Q, l & 1), e === null) return No(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = wl(i, r, 0, null), e = jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Mo(n), t.memoizedState = Oo, e) : Ni(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return md(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
        var s = { mode: "hidden", children: r.children };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = vt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = vt(u, o) : (o = jt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Mo(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Oo, r
    }
    return o = e.child, e = o.sibling, r = vt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ni(e, t) {
    return t = wl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t
}

function xr(e, t, n, r) {
    return r !== null && pi(r), fn(t, e.child, null, n), e = Ni(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function md(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Yl(Error(S(422))), xr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = wl({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = jt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && fn(t, e.child, null, i), t.child.memoizedState = Mo(i), t.memoizedState = Oo, o);
    if (!(t.mode & 1)) return xr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, o = Error(S(419)), r = Yl(o, r, void 0), xr(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0, ve || u) {
        if (r = le, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, be(e, l), Ue(r, e, l, -1))
        }
        return Ri(), r = Yl(Error(S(421))), xr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Nd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, xe = pt(l.nextSibling), Ae = t, W = !0, Fe = null, e !== null && (Pe[Te++] = Xe, Pe[Te++] = Ge, Pe[Te++] = Ot, Xe = e.id, Ge = e.overflow, Ot = t), t = Ni(t, r.children), t.flags |= 4096, t)
}

function Iu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Po(e.return, t, n)
}

function Xl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function $a(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (de(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Iu(e, n, t); else if (e.tag === 19) Iu(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (V(Q, r), !(t.mode & 1)) t.memoizedState = null; else switch (l) {
        case"forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && el(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Xl(t, !1, l, n, o);
            break;
        case"backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && el(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Xl(t, !0, n, null, o);
            break;
        case"together":
            Xl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Or(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function et(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), It |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
        for (e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = vt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function gd(e, t, n) {
    switch (t.tag) {
        case 3:
            Ua(t), cn();
            break;
        case 5:
            pa(t);
            break;
        case 1:
            we(t.type) && Xr(t);
            break;
        case 4:
            wi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, l = t.memoizedProps.value;
            V(Jr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (V(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Va(e, t, n) : (V(Q, Q.current & 1), e = et(e, t, n), e !== null ? e.sibling : null);
            V(Q, Q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return $a(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(Q, Q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Fa(e, t, n)
    }
    return et(e, t, n)
}

var Ba, Io, Ha, Wa;
Ba = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Io = function () {
};
Ha = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, zt(Qe.current);
        var o = null;
        switch (n) {
            case"input":
                l = ro(e, l), r = ro(e, r), o = [];
                break;
            case"select":
                l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
                break;
            case"textarea":
                l = io(e, l), r = io(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr)
        }
        so(n, r);
        var i;
        n = null;
        for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
            var u = l[c];
            for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
        } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Un.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
                for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
            } else n || (o || (o = []), o.push(c, n)), n = s; else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Un.hasOwnProperty(c) ? (s != null && c === "onScroll" && B("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
Wa = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function _n(e, t) {
    if (!W) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling; else for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function hd(e, t, n) {
    var r = t.pendingProps;
    switch (di(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ae(t), null;
        case 1:
            return we(t.type) && Yr(), ae(t), null;
        case 3:
            return r = t.stateNode, dn(), H(ye), H(fe), ki(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fe !== null && (Wo(Fe), Fe = null))), Io(e, t), ae(t), null;
        case 5:
            Si(t);
            var l = zt(Jn.current);
            if (n = t.type, e !== null && t.stateNode != null) Ha(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(S(166));
                    return ae(t), null
                }
                if (e = zt(Qe.current), Sr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[He] = t, r[Gn] = o, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            B("cancel", r), B("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            B("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (l = 0; l < Tn.length; l++) B(Tn[l], r);
                            break;
                        case"source":
                            B("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            B("error", r), B("load", r);
                            break;
                        case"details":
                            B("toggle", r);
                            break;
                        case"input":
                            Qi(r, o), B("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
                            break;
                        case"textarea":
                            Yi(r, o), B("invalid", r)
                    }
                    so(n, o), l = null;
                    for (var i in o) if (o.hasOwnProperty(i)) {
                        var u = o[i];
                        i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && wr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && wr(r.textContent, u, e), l = ["children", "" + u]) : Un.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            fr(r), Ki(r, o, !0);
                            break;
                        case"textarea":
                            fr(r), Xi(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Kr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ys(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[He] = t, e[Gn] = r, Ba(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (i = ao(n, r), n) {
                            case"dialog":
                                B("cancel", e), B("close", e), l = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                B("load", e), l = r;
                                break;
                            case"video":
                            case"audio":
                                for (l = 0; l < Tn.length; l++) B(Tn[l], e);
                                l = r;
                                break;
                            case"source":
                                B("error", e), l = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                B("error", e), B("load", e), l = r;
                                break;
                            case"details":
                                B("toggle", e), l = r;
                                break;
                            case"input":
                                Qi(e, r), l = ro(e, r), B("invalid", e);
                                break;
                            case"option":
                                l = r;
                                break;
                            case"select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), B("invalid", e);
                                break;
                            case"textarea":
                                Yi(e, r), l = io(e, r), B("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        so(n, l), u = l;
                        for (o in u) if (u.hasOwnProperty(o)) {
                            var s = u[o];
                            o === "style" ? ks(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ws(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Vn(e, s) : typeof s == "number" && Vn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Un.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && Jo(e, o, s, i))
                        }
                        switch (n) {
                            case"input":
                                fr(e), Ki(e, r, !1);
                                break;
                            case"textarea":
                                fr(e), Xi(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + yt(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? tn(e, !!r.multiple, o, !1) : r.defaultValue != null && tn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Kr)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ae(t), null;
        case 6:
            if (e && t.stateNode != null) Wa(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
                if (n = zt(Jn.current), zt(Qe.current), Sr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (o = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
                        case 3:
                            wr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && wr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r
            }
            return ae(t), null;
        case 13:
            if (H(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (W && xe !== null && t.mode & 1 && !(t.flags & 128)) sa(), cn(), t.flags |= 98560, o = !1; else if (o = Sr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(S(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
                        o[He] = t
                    } else cn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ae(t), o = !1
                } else Fe !== null && (Wo(Fe), Fe = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? ee === 0 && (ee = 3) : Ri())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
        case 4:
            return dn(), Io(e, t), e === null && Yn(t.stateNode.containerInfo), ae(t), null;
        case 10:
            return hi(t.type._context), ae(t), null;
        case 17:
            return we(t.type) && Yr(), ae(t), null;
        case 19:
            if (H(Q), o = t.memoizedState, o === null) return ae(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) _n(o, !1); else {
                if (ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                    if (i = el(e), i !== null) {
                        for (t.flags |= 128, _n(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return V(Q, Q.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                o.tail !== null && J() > mn && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = el(i), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return ae(t), null
                } else 2 * J() - o.renderingStartTime > mn && n !== 1073741824 && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = Q.current, V(Q, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
        case 22:
        case 23:
            return ji(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(S(156, t.tag))
}

function vd(e, t) {
    switch (di(t), t.tag) {
        case 1:
            return we(t.type) && Yr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return dn(), H(ye), H(fe), ki(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Si(t), null;
        case 13:
            if (H(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(S(340));
                cn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return H(Q), null;
        case 4:
            return dn(), null;
        case 10:
            return hi(t.type._context), null;
        case 22:
        case 23:
            return ji(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var Ar = !1, ce = !1, yd = typeof WeakSet == "function" ? WeakSet : Set, C = null;

function qt(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        Z(e, t, r)
    } else n.current = null
}

function Fo(e, t, n) {
    try {
        n()
    } catch (r) {
        Z(e, t, r)
    }
}

var Fu = !1;

function wd(e, t) {
    if (So = Hr, e = Gs(), ci(e)) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd }; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0, u = -1, s = -1, c = 0, h = 0, m = e, p = null;
                t:for (; ;) {
                    for (var x; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (x = m.firstChild) !== null;) p = m, m = x;
                    for (; ;) {
                        if (m === e) break t;
                        if (p === n && ++c === l && (u = i), p === o && ++h === r && (s = i), (x = m.nextSibling) !== null) break;
                        m = p, p = m.parentNode
                    }
                    m = x
                }
                n = u === -1 || s === -1 ? null : { start: u, end: s }
            } else n = null
        }
        n = n || { start: 0, end: 0 }
    } else n = null;
    for (ko = {
        focusedElem: e,
        selectionRange: n
    }, Hr = !1, C = t; C !== null;) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e; else for (; C !== null;) {
        t = C;
        try {
            var A = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (A !== null) {
                        var g = A.memoizedProps, R = A.memoizedState, f = t.stateNode,
                            a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Me(t.type, g), R);
                        f.__reactInternalSnapshotBeforeUpdate = a
                    }
                    break;
                case 3:
                    var d = t.stateNode.containerInfo;
                    d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(S(163))
            }
        } catch (w) {
            Z(t, t.return, w)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, C = e;
            break
        }
        C = t.return
    }
    return A = Fu, Fu = !1, A
}

function In(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Fo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function vl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Do(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Qa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[Gn], delete t[_o], delete t[td], delete t[nd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ka(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Du(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Ka(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr)); else if (r !== 4 && (e = e.child, e !== null)) for (Uo(e, t, n), e = e.sibling; e !== null;) Uo(e, t, n), e = e.sibling
}

function Vo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (Vo(e, t, n), e = e.sibling; e !== null;) Vo(e, t, n), e = e.sibling
}

var oe = null, Ie = !1;

function nt(e, t, n) {
    for (n = n.child; n !== null;) Ya(e, t, n), n = n.sibling
}

function Ya(e, t, n) {
    if (We && typeof We.onCommitFiberUnmount == "function") try {
        We.onCommitFiberUnmount(al, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            ce || qt(n, t);
        case 6:
            var r = oe, l = Ie;
            oe = null, nt(e, t, n), oe = r, Ie = l, oe !== null && (Ie ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
            break;
        case 18:
            oe !== null && (Ie ? (e = oe, n = n.stateNode, e.nodeType === 8 ? $l(e.parentNode, n) : e.nodeType === 1 && $l(e, n), Wn(e)) : $l(oe, n.stateNode));
            break;
        case 4:
            r = oe, l = Ie, oe = n.stateNode.containerInfo, Ie = !0, nt(e, t, n), oe = r, Ie = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l, i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Fo(n, t, i), l = l.next
                } while (l !== r)
            }
            nt(e, t, n);
            break;
        case 1:
            if (!ce && (qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                Z(n, t, u)
            }
            nt(e, t, n);
            break;
        case 21:
            nt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null, nt(e, t, n), ce = r) : nt(e, t, n);
            break;
        default:
            nt(e, t, n)
    }
}

function Uu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new yd), t.forEach(function (r) {
            var l = Pd.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Oe(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
            var o = e, i = t, u = i;
            e:for (; u !== null;) {
                switch (u.tag) {
                    case 5:
                        oe = u.stateNode, Ie = !1;
                        break e;
                    case 3:
                        oe = u.stateNode.containerInfo, Ie = !0;
                        break e;
                    case 4:
                        oe = u.stateNode.containerInfo, Ie = !0;
                        break e
                }
                u = u.return
            }
            if (oe === null) throw Error(S(160));
            Ya(o, i, l), oe = null, Ie = !1;
            var s = l.alternate;
            s !== null && (s.return = null), l.return = null
        } catch (c) {
            Z(l, t, c)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Xa(t, e), t = t.sibling
}

function Xa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Oe(t, e), $e(e), r & 4) {
                try {
                    In(3, e, e.return), vl(3, e)
                } catch (g) {
                    Z(e, e.return, g)
                }
                try {
                    In(5, e, e.return)
                } catch (g) {
                    Z(e, e.return, g)
                }
            }
            break;
        case 1:
            Oe(t, e), $e(e), r & 512 && n !== null && qt(n, n.return);
            break;
        case 5:
            if (Oe(t, e), $e(e), r & 512 && n !== null && qt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Vn(l, "")
                } catch (g) {
                    Z(e, e.return, g)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    u === "input" && o.type === "radio" && o.name != null && hs(l, o), ao(u, i);
                    var c = ao(u, o);
                    for (i = 0; i < s.length; i += 2) {
                        var h = s[i], m = s[i + 1];
                        h === "style" ? ks(l, m) : h === "dangerouslySetInnerHTML" ? ws(l, m) : h === "children" ? Vn(l, m) : Jo(l, h, m, c)
                    }
                    switch (u) {
                        case"input":
                            lo(l, o);
                            break;
                        case"textarea":
                            vs(l, o);
                            break;
                        case"select":
                            var p = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var x = o.value;
                            x != null ? tn(l, !!o.multiple, x, !1) : p !== !!o.multiple && (o.defaultValue != null ? tn(l, !!o.multiple, o.defaultValue, !0) : tn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Gn] = o
                } catch (g) {
                    Z(e, e.return, g)
                }
            }
            break;
        case 6:
            if (Oe(t, e), $e(e), r & 4) {
                if (e.stateNode === null) throw Error(S(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (g) {
                    Z(e, e.return, g)
                }
            }
            break;
        case 3:
            if (Oe(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Wn(t.containerInfo)
            } catch (g) {
                Z(e, e.return, g)
            }
            break;
        case 4:
            Oe(t, e), $e(e);
            break;
        case 13:
            Oe(t, e), $e(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (zi = J())), r & 4 && Uu(e);
            break;
        case 22:
            if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ce = (c = ce) || h, Oe(t, e), ce = c) : Oe(t, e), $e(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (C = e, h = e.child; h !== null;) {
                    for (m = C = h; C !== null;) {
                        switch (p = C, x = p.child, p.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                In(4, p, p.return);
                                break;
                            case 1:
                                qt(p, p.return);
                                var A = p.stateNode;
                                if (typeof A.componentWillUnmount == "function") {
                                    r = p, n = p.return;
                                    try {
                                        t = r, A.props = t.memoizedProps, A.state = t.memoizedState, A.componentWillUnmount()
                                    } catch (g) {
                                        Z(r, n, g)
                                    }
                                }
                                break;
                            case 5:
                                qt(p, p.return);
                                break;
                            case 22:
                                if (p.memoizedState !== null) {
                                    $u(m);
                                    continue
                                }
                        }
                        x !== null ? (x.return = p, C = x) : $u(m)
                    }
                    h = h.sibling
                }
                e:for (h = null, m = e; ;) {
                    if (m.tag === 5) {
                        if (h === null) {
                            h = m;
                            try {
                                l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ss("display", i))
                            } catch (g) {
                                Z(e, e.return, g)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (h === null) try {
                            m.stateNode.nodeValue = c ? "" : m.memoizedProps
                        } catch (g) {
                            Z(e, e.return, g)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        h === m && (h = null), m = m.return
                    }
                    h === m && (h = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            Oe(t, e), $e(e), r & 4 && Uu(e);
            break;
        case 21:
            break;
        default:
            Oe(t, e), $e(e)
    }
}

function $e(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (Ka(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Vn(l, ""), r.flags &= -33);
                    var o = Du(e);
                    Vo(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo, u = Du(e);
                    Uo(e, u, i);
                    break;
                default:
                    throw Error(S(161))
            }
        } catch (s) {
            Z(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Sd(e, t, n) {
    C = e, Ga(e)
}

function Ga(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
        var l = C, o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Ar;
            if (!i) {
                var u = l.alternate, s = u !== null && u.memoizedState !== null || ce;
                u = Ar;
                var c = ce;
                if (Ar = i, (ce = s) && !c) for (C = l; C !== null;) i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? Bu(l) : s !== null ? (s.return = i, C = s) : Bu(l);
                for (; o !== null;) C = o, Ga(o), o = o.sibling;
                C = l, Ar = u, ce = c
            }
            Vu(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Vu(e)
    }
}

function Vu(e) {
    for (; C !== null;) {
        var t = C;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ce || vl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ce) if (n === null) r.componentDidMount(); else {
                            var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
                            r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var o = t.updateQueue;
                        o !== null && _u(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            _u(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case"img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var h = c.memoizedState;
                                if (h !== null) {
                                    var m = h.dehydrated;
                                    m !== null && Wn(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(S(163))
                }
                ce || t.flags & 512 && Do(t)
            } catch (p) {
                Z(t, t.return, p)
            }
        }
        if (t === e) {
            C = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function $u(e) {
    for (; C !== null;) {
        var t = C;
        if (t === e) {
            C = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function Bu(e) {
    for (; C !== null;) {
        var t = C;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        vl(4, t)
                    } catch (s) {
                        Z(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            Z(t, l, s)
                        }
                    }
                    var o = t.return;
                    try {
                        Do(t)
                    } catch (s) {
                        Z(t, o, s)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Do(t)
                    } catch (s) {
                        Z(t, i, s)
                    }
            }
        } catch (s) {
            Z(t, t.return, s)
        }
        if (t === e) {
            C = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, C = u;
            break
        }
        C = t.return
    }
}

var kd = Math.ceil, rl = tt.ReactCurrentDispatcher, Pi = tt.ReactCurrentOwner, Le = tt.ReactCurrentBatchConfig, I = 0,
    le = null, q = null, ie = 0, ke = 0, bt = kt(0), ee = 0, tr = null, It = 0, yl = 0, Ti = 0, Fn = null, he = null,
    zi = 0, mn = 1 / 0, Ke = null, ll = !1, $o = null, gt = null, _r = !1, at = null, ol = 0, Dn = 0, Bo = null,
    Mr = -1, Ir = 0;

function pe() {
    return I & 6 ? J() : Mr !== -1 ? Mr : Mr = J()
}

function ht(e) {
    return e.mode & 1 ? I & 2 && ie !== 0 ? ie & -ie : ld.transition !== null ? (Ir === 0 && (Ir = Rs()), Ir) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e) : 1
}

function Ue(e, t, n, r) {
    if (50 < Dn) throw Dn = 0, Bo = null, Error(S(185));
    rr(e, n, r), (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (yl |= n), ee === 4 && ut(e, ie)), Se(e, r), n === 1 && I === 0 && !(t.mode & 1) && (mn = J() + 500, ml && xt()))
}

function Se(e, t) {
    var n = e.callbackNode;
    rf(e, t);
    var r = Br(e, e === le ? ie : 0);
    if (r === 0) n !== null && Ji(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Ji(n), t === 1) e.tag === 0 ? rd(Hu.bind(null, e)) : oa(Hu.bind(null, e)), bf(function () {
            !(I & 6) && xt()
        }), n = null; else {
            switch (Os(r)) {
                case 1:
                    n = ni;
                    break;
                case 4:
                    n = Ls;
                    break;
                case 16:
                    n = $r;
                    break;
                case 536870912:
                    n = js;
                    break;
                default:
                    n = $r
            }
            n = rc(n, Za.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Za(e, t) {
    if (Mr = -1, Ir = 0, I & 6) throw Error(S(327));
    var n = e.callbackNode;
    if (un() && e.callbackNode !== n) return null;
    var r = Br(e, e === le ? ie : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = il(e, r); else {
        t = r;
        var l = I;
        I |= 2;
        var o = qa();
        (le !== e || ie !== t) && (Ke = null, mn = J() + 500, Lt(e, t));
        do try {
            _d();
            break
        } catch (u) {
            Ja(e, u)
        } while (!0);
        gi(), rl.current = o, I = l, q !== null ? t = 0 : (le = null, ie = 0, t = ee)
    }
    if (t !== 0) {
        if (t === 2 && (l = go(e), l !== 0 && (r = l, t = Ho(e, l))), t === 1) throw n = tr, Lt(e, 0), ut(e, r), Se(e, J()), n;
        if (t === 6) ut(e, r); else {
            if (l = e.current.alternate, !(r & 30) && !xd(l) && (t = il(e, r), t === 2 && (o = go(e), o !== 0 && (r = o, t = Ho(e, o))), t === 1)) throw n = tr, Lt(e, 0), ut(e, r), Se(e, J()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(S(345));
                case 2:
                    Ct(e, he, Ke);
                    break;
                case 3:
                    if (ut(e, r), (r & 130023424) === r && (t = zi + 500 - J(), 10 < t)) {
                        if (Br(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            pe(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Ao(Ct.bind(null, e, he, Ke), t);
                        break
                    }
                    Ct(e, he, Ke);
                    break;
                case 4:
                    if (ut(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - De(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kd(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ao(Ct.bind(null, e, he, Ke), r);
                        break
                    }
                    Ct(e, he, Ke);
                    break;
                case 5:
                    Ct(e, he, Ke);
                    break;
                default:
                    throw Error(S(329))
            }
        }
    }
    return Se(e, J()), e.callbackNode === n ? Za.bind(null, e) : null
}

function Ho(e, t) {
    var n = Fn;
    return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = he, he = n, t !== null && Wo(t)), e
}

function Wo(e) {
    he === null ? he = e : he.push.apply(he, e)
}

function xd(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var l = n[r], o = l.getSnapshot;
                l = l.value;
                try {
                    if (!Ve(o(), l)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function ut(e, t) {
    for (t &= ~Ti, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - De(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Hu(e) {
    if (I & 6) throw Error(S(327));
    un();
    var t = Br(e, 0);
    if (!(t & 1)) return Se(e, J()), null;
    var n = il(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = go(e);
        r !== 0 && (t = r, n = Ho(e, r))
    }
    if (n === 1) throw n = tr, Lt(e, 0), ut(e, t), Se(e, J()), n;
    if (n === 6) throw Error(S(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, he, Ke), Se(e, J()), null
}

function Li(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n, I === 0 && (mn = J() + 500, ml && xt())
    }
}

function Ft(e) {
    at !== null && at.tag === 0 && !(I & 6) && un();
    var t = I;
    I |= 1;
    var n = Le.transition, r = U;
    try {
        if (Le.transition = null, U = 1, e) return e()
    } finally {
        U = r, Le.transition = n, I = t, !(I & 6) && xt()
    }
}

function ji() {
    ke = bt.current, H(bt)
}

function Lt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, qf(n)), q !== null) for (n = q.return; n !== null;) {
        var r = n;
        switch (di(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Yr();
                break;
            case 3:
                dn(), H(ye), H(fe), ki();
                break;
            case 5:
                Si(r);
                break;
            case 4:
                dn();
                break;
            case 13:
                H(Q);
                break;
            case 19:
                H(Q);
                break;
            case 10:
                hi(r.type._context);
                break;
            case 22:
            case 23:
                ji()
        }
        n = n.return
    }
    if (le = e, q = e = vt(e.current, null), ie = ke = t, ee = 0, tr = null, Ti = yl = It = 0, he = Fn = null, Tt !== null) {
        for (t = 0; t < Tt.length; t++) if (n = Tt[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var l = r.next, o = n.pending;
            if (o !== null) {
                var i = o.next;
                o.next = l, r.next = i
            }
            n.pending = r
        }
        Tt = null
    }
    return e
}

function Ja(e, t) {
    do {
        var n = q;
        try {
            if (gi(), jr.current = nl, tl) {
                for (var r = K.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                tl = !1
            }
            if (Mt = 0, re = b = K = null, Mn = !1, qn = 0, Pi.current = null, n === null || n.return === null) {
                ee = 1, tr = t, q = null;
                break
            }
            e:{
                var o = e, i = n.return, u = n, s = t;
                if (t = ie, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s, h = u, m = h.tag;
                    if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = h.alternate;
                        p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null)
                    }
                    var x = zu(i);
                    if (x !== null) {
                        x.flags &= -257, Lu(x, i, u, o, t), x.mode & 1 && Tu(o, c, t), t = x, s = c;
                        var A = t.updateQueue;
                        if (A === null) {
                            var g = new Set;
                            g.add(s), t.updateQueue = g
                        } else A.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Tu(o, c, t), Ri();
                            break e
                        }
                        s = Error(S(426))
                    }
                } else if (W && u.mode & 1) {
                    var R = zu(i);
                    if (R !== null) {
                        !(R.flags & 65536) && (R.flags |= 256), Lu(R, i, u, o, t), pi(pn(s, u));
                        break e
                    }
                }
                o = s = pn(s, u), ee !== 4 && (ee = 2), Fn === null ? Fn = [o] : Fn.push(o), o = i;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = Oa(o, s, t);
                            Au(o, f);
                            break e;
                        case 1:
                            u = s;
                            var a = o.type, d = o.stateNode;
                            if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (gt === null || !gt.has(d)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = Ma(o, u, t);
                                Au(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            ec(n)
        } catch (E) {
            t = E, q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (!0)
}

function qa() {
    var e = rl.current;
    return rl.current = nl, e === null ? nl : e
}

function Ri() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4), le === null || !(It & 268435455) && !(yl & 268435455) || ut(le, ie)
}

function il(e, t) {
    var n = I;
    I |= 2;
    var r = qa();
    (le !== e || ie !== t) && (Ke = null, Lt(e, t));
    do try {
        Ad();
        break
    } catch (l) {
        Ja(e, l)
    } while (!0);
    if (gi(), I = n, rl.current = r, q !== null) throw Error(S(261));
    return le = null, ie = 0, ee
}

function Ad() {
    for (; q !== null;) ba(q)
}

function _d() {
    for (; q !== null && !Xc();) ba(q)
}

function ba(e) {
    var t = nc(e.alternate, e, ke);
    e.memoizedProps = e.pendingProps, t === null ? ec(e) : q = t, Pi.current = null
}

function ec(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = vd(n, t), n !== null) {
                n.flags &= 32767, q = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                ee = 6, q = null;
                return
            }
        } else if (n = hd(n, t, ke), n !== null) {
            q = n;
            return
        }
        if (t = t.sibling, t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    ee === 0 && (ee = 5)
}

function Ct(e, t, n) {
    var r = U, l = Le.transition;
    try {
        Le.transition = null, U = 1, Ed(e, t, n, r)
    } finally {
        Le.transition = l, U = r
    }
    return null
}

function Ed(e, t, n, r) {
    do un(); while (at !== null);
    if (I & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (lf(e, o), e === le && (q = le = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _r || (_r = !0, rc($r, function () {
        return un(), null
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Le.transition, Le.transition = null;
        var i = U;
        U = 1;
        var u = I;
        I |= 4, Pi.current = null, wd(e, n), Xa(n, e), Qf(ko), Hr = !!So, ko = So = null, e.current = n, Sd(n), Gc(), I = u, U = i, Le.transition = o
    } else e.current = n;
    if (_r && (_r = !1, at = e, ol = l), o = e.pendingLanes, o === 0 && (gt = null), qc(n.stateNode), Se(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
        componentStack: l.stack,
        digest: l.digest
    });
    if (ll) throw ll = !1, e = $o, $o = null, e;
    return ol & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Bo ? Dn++ : (Dn = 0, Bo = e) : Dn = 0, xt(), null
}

function un() {
    if (at !== null) {
        var e = Os(ol), t = Le.transition, n = U;
        try {
            if (Le.transition = null, U = 16 > e ? 16 : e, at === null) var r = !1; else {
                if (e = at, at = null, ol = 0, I & 6) throw Error(S(331));
                var l = I;
                for (I |= 4, C = e.current; C !== null;) {
                    var o = C, i = o.child;
                    if (C.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (C = c; C !== null;) {
                                    var h = C;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            In(8, h, o)
                                    }
                                    var m = h.child;
                                    if (m !== null) m.return = h, C = m; else for (; C !== null;) {
                                        h = C;
                                        var p = h.sibling, x = h.return;
                                        if (Qa(h), h === c) {
                                            C = null;
                                            break
                                        }
                                        if (p !== null) {
                                            p.return = x, C = p;
                                            break
                                        }
                                        C = x
                                    }
                                }
                            }
                            var A = o.alternate;
                            if (A !== null) {
                                var g = A.child;
                                if (g !== null) {
                                    A.child = null;
                                    do {
                                        var R = g.sibling;
                                        g.sibling = null, g = R
                                    } while (g !== null)
                                }
                            }
                            C = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i; else e:for (; C !== null;) {
                        if (o = C, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                In(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) {
                            f.return = o.return, C = f;
                            break e
                        }
                        C = o.return
                    }
                }
                var a = e.current;
                for (C = a; C !== null;) {
                    i = C;
                    var d = i.child;
                    if (i.subtreeFlags & 2064 && d !== null) d.return = i, C = d; else e:for (i = a; C !== null;) {
                        if (u = C, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    vl(9, u)
                            }
                        } catch (E) {
                            Z(u, u.return, E)
                        }
                        if (u === i) {
                            C = null;
                            break e
                        }
                        var w = u.sibling;
                        if (w !== null) {
                            w.return = u.return, C = w;
                            break e
                        }
                        C = u.return
                    }
                }
                if (I = l, xt(), We && typeof We.onPostCommitFiberRoot == "function") try {
                    We.onPostCommitFiberRoot(al, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            U = n, Le.transition = t
        }
    }
    return !1
}

function Wu(e, t, n) {
    t = pn(n, t), t = Oa(e, t, 1), e = mt(e, t, 1), t = pe(), e !== null && (rr(e, 1, t), Se(e, t))
}

function Z(e, t, n) {
    if (e.tag === 3) Wu(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            Wu(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gt === null || !gt.has(r))) {
                e = pn(n, e), e = Ma(t, e, 1), t = mt(t, e, 1), e = pe(), t !== null && (rr(t, 1, e), Se(t, e));
                break
            }
        }
        t = t.return
    }
}

function Cd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ie & n) === n && (ee === 4 || ee === 3 && (ie & 130023424) === ie && 500 > J() - zi ? Lt(e, 0) : Ti |= n), Se(e, t)
}

function tc(e, t) {
    t === 0 && (e.mode & 1 ? (t = mr, mr <<= 1, !(mr & 130023424) && (mr = 4194304)) : t = 1);
    var n = pe();
    e = be(e, t), e !== null && (rr(e, t, n), Se(e, n))
}

function Nd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), tc(e, n)
}

function Pd(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(S(314))
    }
    r !== null && r.delete(t), tc(e, n)
}

var nc;
nc = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ye.current) ve = !0; else {
        if (!(e.lanes & n) && !(t.flags & 128)) return ve = !1, gd(e, t, n);
        ve = !!(e.flags & 131072)
    } else ve = !1, W && t.flags & 1048576 && ia(t, Zr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Or(e, t), e = t.pendingProps;
            var l = an(t, fe.current);
            on(t, n), l = Ai(null, t, r, e, l, n);
            var o = _i();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (o = !0, Xr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, yi(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, zo(t, r, e, n), t = Ro(null, t, r, !0, o, n)) : (t.tag = 0, W && o && fi(t), de(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (Or(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = zd(r), e = Me(r, e), l) {
                    case 0:
                        t = jo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ou(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ju(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ru(null, t, r, Me(r.type, e), n);
                        break e
                }
                throw Error(S(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), jo(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Ou(e, t, r, l, n);
        case 3:
            e:{
                if (Ua(t), e === null) throw Error(S(387));
                r = t.pendingProps, o = t.memoizedState, l = o.element, da(e, t), br(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated) if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    l = pn(Error(S(423)), t), t = Mu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = pn(Error(S(424)), t), t = Mu(e, t, r, n, l);
                    break e
                } else for (xe = pt(t.stateNode.containerInfo.firstChild), Ae = t, W = !0, Fe = null, n = ca(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (cn(), r === l) {
                        t = et(e, t, n);
                        break e
                    }
                    de(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return pa(t), e === null && No(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, xo(r, l) ? i = null : o !== null && xo(r, o) && (t.flags |= 32), Da(e, t), de(e, t, i, n), t.child;
        case 6:
            return e === null && No(t), null;
        case 13:
            return Va(e, t, n);
        case 4:
            return wi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fn(t, null, r, n) : de(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), ju(e, t, r, l, n);
        case 7:
            return de(e, t, t.pendingProps, n), t.child;
        case 8:
            return de(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return de(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, V(Jr, r._currentValue), r._currentValue = i, o !== null) if (Ve(o.value, i)) {
                    if (o.children === l.children && !ye.current) {
                        t = et(e, t, n);
                        break e
                    }
                } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                    var u = o.dependencies;
                    if (u !== null) {
                        i = o.child;
                        for (var s = u.firstContext; s !== null;) {
                            if (s.context === r) {
                                if (o.tag === 1) {
                                    s = Ze(-1, n & -n), s.tag = 2;
                                    var c = o.updateQueue;
                                    if (c !== null) {
                                        c = c.shared;
                                        var h = c.pending;
                                        h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s
                                    }
                                }
                                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Po(o.return, n, t), u.lanes |= n;
                                break
                            }
                            s = s.next
                        }
                    } else if (o.tag === 10) i = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                        if (i = o.return, i === null) throw Error(S(341));
                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Po(i, n, t), i = o.sibling
                    } else i = o.child;
                    if (i !== null) i.return = o; else for (i = o; i !== null;) {
                        if (i === t) {
                            i = null;
                            break
                        }
                        if (o = i.sibling, o !== null) {
                            o.return = i.return, i = o;
                            break
                        }
                        i = i.return
                    }
                    o = i
                }
                de(e, t, l.children, n), t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, on(t, n), l = je(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Me(r, t.pendingProps), l = Me(r.type, l), Ru(e, t, r, l, n);
        case 15:
            return Ia(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Or(e, t), t.tag = 1, we(r) ? (e = !0, Xr(t)) : e = !1, on(t, n), Ra(t, r, l), zo(t, r, l, n), Ro(null, t, r, !0, e, n);
        case 19:
            return $a(e, t, n);
        case 22:
            return Fa(e, t, n)
    }
    throw Error(S(156, t.tag))
};

function rc(e, t) {
    return zs(e, t)
}

function Td(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ze(e, t, n, r) {
    return new Td(e, t, n, r)
}

function Oi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function zd(e) {
    if (typeof e == "function") return Oi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === bo) return 11;
        if (e === ei) return 14
    }
    return 2
}

function vt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Fr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Oi(e) && (i = 1); else if (typeof e == "string") i = 5; else e:switch (e) {
        case Ht:
            return jt(n.children, l, o, t);
        case qo:
            i = 8, l |= 8;
            break;
        case bl:
            return e = ze(12, n, t, l | 2), e.elementType = bl, e.lanes = o, e;
        case eo:
            return e = ze(13, n, t, l), e.elementType = eo, e.lanes = o, e;
        case to:
            return e = ze(19, n, t, l), e.elementType = to, e.lanes = o, e;
        case ps:
            return wl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case fs:
                    i = 10;
                    break e;
                case ds:
                    i = 9;
                    break e;
                case bo:
                    i = 11;
                    break e;
                case ei:
                    i = 14;
                    break e;
                case rt:
                    i = 16, r = null;
                    break e
            }
            throw Error(S(130, e == null ? e : typeof e, ""))
    }
    return t = ze(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function jt(e, t, n, r) {
    return e = ze(7, e, r, t), e.lanes = n, e
}

function wl(e, t, n, r) {
    return e = ze(22, e, r, t), e.elementType = ps, e.lanes = n, e.stateNode = { isHidden: !1 }, e
}

function Gl(e, t, n) {
    return e = ze(6, e, null, t), e.lanes = n, e
}

function Zl(e, t, n) {
    return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Ld(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Mi(e, t, n, r, l, o, i, u, s) {
    return e = new Ld(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ze(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, yi(o), e
}

function jd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Bt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }
}

function lc(e) {
    if (!e) return wt;
    e = e._reactInternals;
    e:{
        if (Ut(e) !== e || e.tag !== 1) throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (we(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (we(n)) return la(e, n, t)
    }
    return t
}

function oc(e, t, n, r, l, o, i, u, s) {
    return e = Mi(n, r, !0, e, l, o, i, u, s), e.context = lc(null), n = e.current, r = pe(), l = ht(n), o = Ze(r, l), o.callback = t ?? null, mt(n, o, l), e.current.lanes = l, rr(e, l, r), Se(e, r), e
}

function Sl(e, t, n, r) {
    var l = t.current, o = pe(), i = ht(l);
    return n = lc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ze(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mt(l, t, i), e !== null && (Ue(e, l, i, o), Lr(e, l, i)), i
}

function ul(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Qu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ii(e, t) {
    Qu(e, t), (e = e.alternate) && Qu(e, t)
}

function Rd() {
    return null
}

var ic = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Fi(e) {
    this._internalRoot = e
}

kl.prototype.render = Fi.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    Sl(e, t, null, null)
};
kl.prototype.unmount = Fi.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ft(function () {
            Sl(null, e, null, null)
        }), t[qe] = null
    }
};

function kl(e) {
    this._internalRoot = e
}

kl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Fs();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++) ;
        it.splice(n, 0, e), n === 0 && Us(e)
    }
};

function Di(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ku() {
}

function Od(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = ul(i);
                o.call(c)
            }
        }
        var i = oc(t, r, e, 0, null, !1, !1, "", Ku);
        return e._reactRootContainer = i, e[qe] = i.current, Yn(e.nodeType === 8 ? e.parentNode : e), Ft(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var c = ul(s);
            u.call(c)
        }
    }
    var s = Mi(e, 0, !1, null, null, !1, !1, "", Ku);
    return e._reactRootContainer = s, e[qe] = s.current, Yn(e.nodeType === 8 ? e.parentNode : e), Ft(function () {
        Sl(t, s, n, r)
    }), s
}

function Al(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var s = ul(i);
                u.call(s)
            }
        }
        Sl(t, i, e, l)
    } else i = Od(n, t, e, l, r);
    return ul(i)
}

Ms = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Pn(t.pendingLanes);
                n !== 0 && (ri(t, n | 1), Se(t, J()), !(I & 6) && (mn = J() + 500, xt()))
            }
            break;
        case 13:
            Ft(function () {
                var r = be(e, 1);
                if (r !== null) {
                    var l = pe();
                    Ue(r, e, 1, l)
                }
            }), Ii(e, 1)
    }
};
li = function (e) {
    if (e.tag === 13) {
        var t = be(e, 134217728);
        if (t !== null) {
            var n = pe();
            Ue(t, e, 134217728, n)
        }
        Ii(e, 134217728)
    }
};
Is = function (e) {
    if (e.tag === 13) {
        var t = ht(e), n = be(e, t);
        if (n !== null) {
            var r = pe();
            Ue(n, e, t, r)
        }
        Ii(e, t)
    }
};
Fs = function () {
    return U
};
Ds = function (e, t) {
    var n = U;
    try {
        return U = e, t()
    } finally {
        U = n
    }
};
fo = function (e, t, n) {
    switch (t) {
        case"input":
            if (lo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = pl(r);
                        if (!l) throw Error(S(90));
                        gs(r), lo(r, l)
                    }
                }
            }
            break;
        case"textarea":
            vs(e, n);
            break;
        case"select":
            t = n.value, t != null && tn(e, !!n.multiple, t, !1)
    }
};
_s = Li;
Es = Ft;
var Md = { usingClientEntryPoint: !1, Events: [or, Yt, pl, xs, As, Li] },
    En = { findFiberByHostInstance: Pt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Id = {
        bundleType: En.bundleType,
        version: En.version,
        rendererPackageName: En.rendererPackageName,
        rendererConfig: En.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: tt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Ps(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: En.findFiberByHostInstance || Rd,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Er.isDisabled && Er.supportsFiber) try {
        al = Er.inject(Id), We = Er
    } catch {
    }
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
Ee.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Di(t)) throw Error(S(200));
    return jd(e, t, null, n)
};
Ee.createRoot = function (e, t) {
    if (!Di(e)) throw Error(S(299));
    var n = !1, r = "", l = ic;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Mi(e, 1, !1, null, null, n, !1, r, l), e[qe] = t.current, Yn(e.nodeType === 8 ? e.parentNode : e), new Fi(t)
};
Ee.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
    return e = Ps(t), e = e === null ? null : e.stateNode, e
};
Ee.flushSync = function (e) {
    return Ft(e)
};
Ee.hydrate = function (e, t, n) {
    if (!xl(t)) throw Error(S(200));
    return Al(null, e, t, !0, n)
};
Ee.hydrateRoot = function (e, t, n) {
    if (!Di(e)) throw Error(S(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = ic;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = oc(t, null, e, 1, n ?? null, l, !1, o, i), e[qe] = t.current, Yn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new kl(t)
};
Ee.render = function (e, t, n) {
    if (!xl(t)) throw Error(S(200));
    return Al(null, e, t, !1, n)
};
Ee.unmountComponentAtNode = function (e) {
    if (!xl(e)) throw Error(S(40));
    return e._reactRootContainer ? (Ft(function () {
        Al(null, null, e, !1, function () {
            e._reactRootContainer = null, e[qe] = null
        })
    }), !0) : !1
};
Ee.unstable_batchedUpdates = Li;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!xl(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return Al(e, t, n, !1, r)
};
Ee.version = "18.3.1-next-f1338f8080-20240426";

function uc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)
    } catch (e) {
        console.error(e)
    }
}

uc(), us.exports = Ee;
var Fd = us.exports, Yu = Fd;
Jl.createRoot = Yu.createRoot, Jl.hydrateRoot = Yu.hydrateRoot;
var sc = { exports: {} };
(function (e, t) {
    (function (n, r) {
        r(e)
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ac, function (n) {
        var r, l;
        if (!((l = (r = globalThis.chrome) == null ? void 0 : r.runtime) != null && l.id)) throw new Error("This script should only be loaded in a browser extension.");
        if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
            const o = "The message port closed before a response was received.", i = u => {
                const s = {
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
                    webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
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
                if (Object.keys(s).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");

                class c extends WeakMap {
                    constructor(y, k = void 0) {
                        super(k), this.createItem = y
                    }

                    get(y) {
                        return this.has(y) || this.set(y, this.createItem(y)), super.get(y)
                    }
                }

                const h = v => v && typeof v == "object" && typeof v.then == "function", m = (v, y) => (...k) => {
                    u.runtime.lastError ? v.reject(new Error(u.runtime.lastError.message)) : y.singleCallbackArg || k.length <= 1 && y.singleCallbackArg !== !1 ? v.resolve(k[0]) : v.resolve(k)
                }, p = v => v == 1 ? "argument" : "arguments", x = (v, y) => function (z, ...F) {
                    if (F.length < y.minArgs) throw new Error(`Expected at least ${y.minArgs} ${p(y.minArgs)} for ${v}(), got ${F.length}`);
                    if (F.length > y.maxArgs) throw new Error(`Expected at most ${y.maxArgs} ${p(y.maxArgs)} for ${v}(), got ${F.length}`);
                    return new Promise((X, G) => {
                        if (y.fallbackToNoCallback) try {
                            z[v](...F, m({ resolve: X, reject: G }, y))
                        } catch (O) {
                            console.warn(`${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, O), z[v](...F), y.fallbackToNoCallback = !1, y.noCallback = !0, X()
                        } else y.noCallback ? (z[v](...F), X()) : z[v](...F, m({ resolve: X, reject: G }, y))
                    })
                }, A = (v, y, k) => new Proxy(y, {
                    apply(z, F, X) {
                        return k.call(F, v, ...X)
                    }
                });
                let g = Function.call.bind(Object.prototype.hasOwnProperty);
                const R = (v, y = {}, k = {}) => {
                    let z = Object.create(null), F = {
                        has(G, O) {
                            return O in v || O in z
                        }, get(G, O, te) {
                            if (O in z) return z[O];
                            if (!(O in v)) return;
                            let D = v[O];
                            if (typeof D == "function") if (typeof y[O] == "function") D = A(v, v[O], y[O]); else if (g(k, O)) {
                                let _ = x(O, k[O]);
                                D = A(v, v[O], _)
                            } else D = D.bind(v); else if (typeof D == "object" && D !== null && (g(y, O) || g(k, O))) D = R(D, y[O], k[O]); else if (g(k, "*")) D = R(D, y[O], k["*"]); else return Object.defineProperty(z, O, {
                                configurable: !0,
                                enumerable: !0,
                                get() {
                                    return v[O]
                                },
                                set(_) {
                                    v[O] = _
                                }
                            }), D;
                            return z[O] = D, D
                        }, set(G, O, te, D) {
                            return O in z ? z[O] = te : v[O] = te, !0
                        }, defineProperty(G, O, te) {
                            return Reflect.defineProperty(z, O, te)
                        }, deleteProperty(G, O) {
                            return Reflect.deleteProperty(z, O)
                        }
                    }, X = Object.create(v);
                    return new Proxy(X, F)
                }, f = v => ({
                    addListener(y, k, ...z) {
                        y.addListener(v.get(k), ...z)
                    }, hasListener(y, k) {
                        return y.hasListener(v.get(k))
                    }, removeListener(y, k) {
                        y.removeListener(v.get(k))
                    }
                }), a = new c(v => typeof v != "function" ? v : function (k) {
                    const z = R(k, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    v(z)
                }), d = new c(v => typeof v != "function" ? v : function (k, z, F) {
                    let X = !1, G, O = new Promise(j => {
                        G = function (L) {
                            X = !0, j(L)
                        }
                    }), te;
                    try {
                        te = v(k, z, G)
                    } catch (j) {
                        te = Promise.reject(j)
                    }
                    const D = te !== !0 && h(te);
                    if (te !== !0 && !D && !X) return !1;
                    const _ = j => {
                        j.then(L => {
                            F(L)
                        }, L => {
                            let $;
                            L && (L instanceof Error || typeof L.message == "string") ? $ = L.message : $ = "An unexpected error occurred", F({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: $
                            })
                        }).catch(L => {
                            console.error("Failed to send onMessage rejected reply", L)
                        })
                    };
                    return _(D ? te : O), !0
                }), w = ({ reject: v, resolve: y }, k) => {
                    u.runtime.lastError ? u.runtime.lastError.message === o ? y() : v(new Error(u.runtime.lastError.message)) : k && k.__mozWebExtensionPolyfillReject__ ? v(new Error(k.message)) : y(k)
                }, E = (v, y, k, ...z) => {
                    if (z.length < y.minArgs) throw new Error(`Expected at least ${y.minArgs} ${p(y.minArgs)} for ${v}(), got ${z.length}`);
                    if (z.length > y.maxArgs) throw new Error(`Expected at most ${y.maxArgs} ${p(y.maxArgs)} for ${v}(), got ${z.length}`);
                    return new Promise((F, X) => {
                        const G = w.bind(null, { resolve: F, reject: X });
                        z.push(G), k.sendMessage(...z)
                    })
                }, P = {
                    devtools: { network: { onRequestFinished: f(a) } },
                    runtime: {
                        onMessage: f(d),
                        onMessageExternal: f(d),
                        sendMessage: E.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
                    },
                    tabs: { sendMessage: E.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
                }, N = {
                    clear: { minArgs: 1, maxArgs: 1 },
                    get: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 }
                };
                return s.privacy = { network: { "*": N }, services: { "*": N }, websites: { "*": N } }, R(u, P, s)
            };
            n.exports = i(chrome)
        } else n.exports = globalThis.browser
    })
})(sc);
var Dd = sc.exports;
const Nt = Gu(Dd),
    Ud = ".notification{display:none;border-color:#b8daff;border-radius:.25rem;position:relative;padding:.75em 2.5em .75em 1em;color:#004085;background-color:#cce5ff;line-height:22px;font-size:14px}.notification.is-active{display:block}.notification__close{font-weight:700;font-size:1.5em;position:absolute;top:.25em;right:.25em;line-height:1;outline:0;cursor:pointer;border-color:transparent;background-color:transparent;color:#00408566}.notification__close:hover{color:#004085}.notification__title{font-weight:700}",
    Vd = (e, t) => Nt.storage.local.set({ [e]: t }), $d = async e => await Nt.storage.local.get(e);

async function en(e, t) {
    await Vd(e, t)
}

async function ot(e) {
    const t = await $d(e);
    return t && t instanceof String ? t : t && Object(t)[e] ? Object(t)[e] : null
}

const Xu = [{
    id: "short_key",
    title: "💡Tip: Keyboard shortcut",
    message: '<strong>Ctrl+Shift+6</strong> is a shortcut to open "600% Sound Volume".⚡',
    minUsages: 2,
    shows: 4
}, {
    id: "right_after_opening",
    title: "💡Tip: Use keys 0 - 6 to adjust volume",
    message: 'Right after opening "600% Sound Volume" press keys 0 - 6 to change volume from 0% to 600% respectively.🗝️',
    minUsages: 4,
    shows: 4
}, {
    id: "volume_up_down",
    title: "💡Tip: Adjust volume with arrow keys",
    message: 'Right after opening "600% Sound Volume" press:<ul><li>&#x2b06;&#xfe0f; or &#x27a1;&#xfe0f; to volume up</li><li>&#x2b07;&#xfe0f; or &#x2b05;&#xfe0f; to volume down</li></ul>',
    minUsages: 6,
    shows: 4
}
,
    {
    id: "rate_it",
    title: "🙏Please Rate Us",
    message: `If you like "600% Sound Volume" please rate it <div class="stars">
  <a class="stars__star-wrapper" target="_blank"
     href="https://forms.gle/TV8ehLw1j3enHyeaA"></a>
  <a class="stars__star-wrapper" target="_blank"
     href="https://forms.gle/TV8ehLw1j3enHyeaA"></a>
  <a class="stars__star-wrapper" target="_blank"
     href="https://forms.gle/TV8ehLw1j3enHyeaA"></a>
  <a class="stars__star-wrapper" target="_blank"
     href="https://addons.mozilla.org/firefox/addon/600-sound-volume/"></a>
  <a class="stars__star-wrapper" target="_blank"
     href="https://addons.mozilla.org/firefox/addon/600-sound-volume/"></a>
</div> to let us know that. If you don't want to - it's ok. Thank you for your feedback and have a nice day!🌞`,
    minUsages: 8,
    shows: 400
}
];

function Bd() {
    const [e, t] = Ne.useState(""), [n, r] = Ne.useState("");
    Ne.useEffect(() => {
        l()
    }, []);

    async function l() {
        await u();
        const g = await o();
        g && (await s(), p(), t(g.title), r(g.message), await h() >= g.shows && i(g))
    }

    async function o() {
        let g = Number(await ot("usages"));
        g = g === null ? 0 : Number(g);
        let R = await ot("completedTips");
        R = R || "";
        for (let f = 0; f < Xu.length; f++) {
            const a = Xu[f];
            if (R.indexOf(a.id) === -1 && g > a.minUsages) return a
        }
        return null
    }

    async function i(g) {
        if (!g) return;
        let R = await ot("completedTips");
        R = R || "", R.indexOf(g.id) === -1 && en("completedTips", R + (R ? "," : "") + g.id), c()
    }

    async function u() {
        let g = Number(await ot("usages"));
        g = g === null ? 0 : Number(g), en("usages", g + 1)
    }

    async function s() {
        let g = Number(await ot("tipUsages"));
        g = g === null ? 0 : Number(g), en("tipUsages", g + 1)
    }

    function c() {
        en("tipUsages", 0)
    }

    async function h() {
        let g = Number(await ot("tipUsages"));
        return g = g === null ? 0 : Number(g), g
    }

    function m() {
        var g;
        (g = document.querySelector(".notification")) == null || g.classList.remove("is-active")
    }

    function p() {
        var g;
        (g = document.querySelector(".notification")) == null || g.classList.add("is-active")
    }

    async function x() {
        i(await o())
    }

    function A() {
        m(), x()
    }

    return T.jsxs(T.Fragment, {
        children: [T.jsx("style", { children: Ud }), T.jsxs("section", {
            className: "notification",
            children: [T.jsx("button", {
                className: "notification__close",
                onClick: A,
                children: "×"
            }), T.jsx("div", {
                className: "notification__title",
                children: e
            }), T.jsx("div", { className: "notification__message", dangerouslySetInnerHTML: { __html: n || "" } })]
        })]
    })
}

var $t = (e => (e.changeSoundVolume = "changeSoundVolume", e.removeAudioState = "removeAudioState", e.getSoundVolume = "getSoundVolume", e.offscreenTag = "offscreenTag", e.offscreenTagSuccess = "offscreenTagSuccess", e.loadExtConfig = "loadExtConfig", e.bannerEnabled = "bannerEnabled", e.logBannerShown = "logBannerShown", e))($t || {});
const Hd = () => {
    const [e, t] = Ne.useState(100), [n, r] = Ne.useState(100), [l, o] = Ne.useState([]), [i, u] = Ne.useState(!1),
        s = Ne.createRef();
    let c;
    c = { soundVolume: 100, storedSoundVolume: 100, audibleTabs: [], tabId: null }, Ne.useEffect(() => {
        h()
    }, []);

    async function h() {
        var y;
        try {
            await a(), await d();
            const k = Number(await ot("usages")), z = Number(await ot("permittedToShowBanner"));
            k >= 7 && z === 0 && u(!0);
            const F = await E(), X = localStorage.getItem(F);
            X ? (t(Number(X)), c.storedSoundVolume = e) : (t(100), c.storedSoundVolume = e), (y = document.getElementById("volume-slider")) == null || y.focus(), document.documentElement.addEventListener("keypress", async D => {
                const _ = parseInt(D.key.toLowerCase());
                _ >= 0 && _ <= 6 && (r(100 * _), c.soundVolume = n, await p(100 * _), await m("changeSoundVolume", null))
            });
            const G = document.getElementsByClassName("advert"), O = G.item(Math.round(Math.random() * (G.length - 1)));
            for (let D = 0; D < G.length; D++) if (G.item(D) !== O) {
                const _ = G.item(D);
                _ !== null && _.parentNode.removeChild(G.item(D))
            }
            const te = O == null ? void 0 : O.parentNode;
            te.style.display = ""
        } catch (k) {
            console.warn(k)
        }
    }

    async function m(y, k) {
        const z = await Nt.tabs.query({ currentWindow: !0, active: !0 });
        try {
            const F = await Nt.tabs.sendMessage(Number(z[0].id), { action: y, data: c });
            k && k(F)
        } catch (F) {
            console.warn(F)
        }
    }

    async function p(y) {
        t(y), c.storedSoundVolume = y;
        const k = await E();
        localStorage.setItem(k, String(e))
    }

    async function x() {
        var k, z;
        const y = Number((k = s.current) == null ? void 0 : k.valueAsNumber);
        r(y), c.soundVolume = y, await p(Number((z = s.current) == null ? void 0 : z.valueAsNumber)), await m($t.changeSoundVolume, null)
    }

    async function A() {
        r(100), c.soundVolume = 100, await m($t.changeSoundVolume, null)
    }

    async function g() {
        r(0), c.soundVolume = 0, await m($t.changeSoundVolume, null)
    }

    async function R() {
        r(e), c.soundVolume = e, await m($t.changeSoundVolume, null)
    }

    async function f(y) {
        await Nt.tabs.update(y.id, { active: !0 }), await a()
    }

    async function a() {
        await m($t.getSoundVolume, async y => {
            c.soundVolume = y && y.soundVolume >= 0 ? Number(y.soundVolume) : 100, await r(c.soundVolume)
        })
    }

    async function d() {
        const y = await Nt.tabs.query({ audible: !0 }), k = function (z, F) {
            return !z.title || !F.title ? 0 : z.title.localeCompare(F.title)
        };
        y.sort(k), o(y), c.audibleTabs = y
    }

    function w(y) {
        if (!y) return null;
        const { hostname: k } = new URL(y);
        return k
    }

    async function E() {
        const y = await Nt.tabs.query({ currentWindow: !0, active: !0 });
        return y && y.length > 0 ? String(w(String(y[0].url))) : ""
    }

    async function P(y) {
        s.current && (y.deltaY < 0 ? s.current.valueAsNumber += 10 : s.current.valueAsNumber -= 10, await x()), y.stopPropagation()
    }

    async function N() {
        await en("permittedToShowBanner", 1), location.reload()
    }

    async function v() {
        await en("permittedToShowBanner", 2), location.reload()
    }

    return T.jsx(T.Fragment, {
        children:
            i ? T.jsx("div", {
            children: T.jsxs("header", {
                className: "header",
                children: [T.jsx("h1", {
                    className: "header__name",
                    children: "600% Sound Volume"
                }), T.jsxs("p", {
                    className: "header__description",
                    children: ['Support "600% Sound Volume" 🚀 and keep it running! 🎉 Just click "Yes" below ✅ to allow a small ad banner at the bottom of some pages. This helps us continue development. 🙏', T.jsx("br", {}), "Is that okay?"]
                }), T.jsxs("div", {
                    style: { textAlign: "center" },
                    children: [T.jsx("button", {
                        style: { padding: "5px", margin: "15px", width: "100px" },
                        onClick: N,
                        children: "Yes"
                    }), T.jsx("button", {
                        style: { padding: "5px", margin: "15px", width: "100px" },
                        onClick: v,
                        children: "No"
                    })]
                })]
            })
        }) :
            T.jsxs("div", {
            onWheel: P,
            children: [T.jsxs("header", {
                className: "header",
                children: [T.jsx("h1", {
                    className: "header__name",
                    children: "600% Sound Volume"
                }), T.jsx("p", {
                    className: "header__description",
                    children: "Control volume of the current tab with the slider below. Switch to any tab playing audio with just one click."
                })]
            }), T.jsx(Bd, {}), T.jsxs("section", {
                className: "volume-slider",
                children: [T.jsx("button", {
                    onClick: g,
                    style: { verticalAlign: "middle !important", height: "25px !important" },
                    children: T.jsx("span", { color: "black", children: "🔇" })
                }), " ", T.jsx("button", {
                    onClick: A,
                    style: { verticalAlign: "middle !important", height: "25px; !important" },
                    children: "💯%"
                }), " ", e !== 100 ? T.jsxs("button", {
                    onClick: R,
                    style: { verticalAlign: "middle !important", height: "25px !important" },
                    children: ["🔄 ", e, "%"]
                }) : null, T.jsx("div", { style: { height: "5px" } }), T.jsx("input", {
                    id: "volume-slider",
                    className: "volume-slider__slider",
                    type: "range",
                    ref: s,
                    value: n,
                    min: "0",
                    max: "600",
                    step: "10",
                    autoFocus: !0,
                    onInput: x
                })]
            }), T.jsxs("section", {
                className: "volume-info",
                children: [T.jsx("span", {
                    className: "volume-info__volume-min",
                    children: "0 %"
                }), T.jsxs("span", {
                    className: "volume-info__volume-current",
                    children: ["Volume: ", n, " %"]
                }), T.jsx("span", { className: "volume-info__volume-max", children: "600 %" })]
            }), T.jsxs("section", {
                className: "tabs",
                children: [l.length ? T.jsx("div", {
                    className: "tabs__title",
                    children: "Tabs playing audio right now"
                }) : T.jsx("div", {
                    className: "tabs__title",
                    children: "No tabs playing audio right now"
                }), T.jsx("div", {
                    className: "tabs__list",
                    children: l.map(y => T.jsxs("a", {
                        href: "#",
                        className: "tab",
                        onClick: () => f(y),
                        children: [T.jsx("div", {
                            className: "tab__item tab__icon",
                            children: T.jsx("img", { className: "tab__icon-image", src: y.favIconUrl, alt: "" })
                        }), T.jsx("div", { className: "tab__item tab__title", children: y.title })]
                    }))
                })]
            })
                , T.jsx("br", {}), T.jsxs("footer", {
                style: { width: "100%" },
                children: [T.jsxs("div", {
                    className: "stars",
                    style: { marginBottom: "1em" },
                    children: [T.jsx("a", {
                        className: "stars__star-wrapper",
                        target: "_blank",
                        "data-action": "support",
                        href: "https://forms.gle/TV8ehLw1j3enHyeaA"
                    }), T.jsx("a", {
                        className: "stars__star-wrapper",
                        target: "_blank",
                        "data-action": "support",
                        href: "https://forms.gle/TV8ehLw1j3enHyeaA"
                    }), T.jsx("a", {
                        className: "stars__star-wrapper",
                        target: "_blank",
                        "data-action": "support",
                        href: "https://forms.gle/TV8ehLw1j3enHyeaA"
                    }), T.jsx("a", {
                        className: "stars__star-wrapper",
                        target: "_blank",
                        "data-action": "review",
                        href: "https://addons.mozilla.org/firefox/addon/600-sound-volume/"
                    }), T.jsx("a", {
                        className: "stars__star-wrapper",
                        target: "_blank",
                        "data-action": "review",
                        href: "https://addons.mozilla.org/firefox/addon/600-sound-volume/"
                    })]
                })
                    ,
                    T.jsxs("div", {
                    style: { textAlign: "center", display: "none", width: "100%" },
                    children: ["🚀", T.jsx("span", {
                        style: { color: "red" },
                        children: "NEW"
                    }), " ", T.jsx("a", {
                        href: "https://addons.mozilla.org/firefox/addon/web-proxy/",
                        className: "advert",
                        target: "_blank",
                        children: "Try Web Proxy Addon"
                    })]
                })
                ]
            })
]
        })
    })
};
Jl.createRoot(document.getElementById("app")).render(T.jsx(Ec.StrictMode, { children: T.jsx(Hd, {}) }));
