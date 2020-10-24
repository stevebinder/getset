var _DEBOUNCE_TIMEOUT = 0;
var _debouncers = {};

function _debounce(method, args, time) {
    var name = (method + "").match(/^function (.+?)\(/)[1];
    time = isNaN(time * 1) ? _DEBOUNCE_TIMEOUT : time;
    if (_debouncers[name]) {
        clearTimeout(_debouncers[name]);
    }
    _debouncers[name] = setTimeout(function() {
        delete _debouncers[name];
        method.apply(null, args);
    }, time);
}

export function set(key, value, debounce) {
    if (debounce) {
        _debounce(set, [key, value], debounce);
        return;
    }
    if (key === undefined || key === null) {
        throw new Error("missing key for localStorage set");
    }
    if (key === "*") {
        localStorage.clear();
    }
    else if (value === undefined || value === null)
    {
        delete localStorage[key];
    }
    else if (typeof(value) === "object") {
        try {
            localStorage[key] = JSON.stringify(value);
        }
        catch (e) {
            throw new Error("cannot set localStorage key with invalid json");
        }
    }
    else {
        localStorage[key] = value;
    }
}

export function get(key, defaultValue) {
    if (key === undefined || key === null) {
        throw new Error("missing key for localStorage retrieval");
    }
    if (key === "*") {
        var obj = {};
        for (var i in localStorage) {
            obj[i] = get(i);
        }
        return obj;
    }
    var value = localStorage[key];
    if (value === undefined) {
        return defaultValue;
    }
    if (value && /^[\{|\[]/.test(value[0])) {
        try {
            value = JSON.parse(value);
        }
        catch (e) {
            return defaultValue;
        }
    }
    return value;
}
