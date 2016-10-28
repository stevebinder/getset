function set(key, value) {
    if (key === undefined || key === null) {
        throw new Error("missing key for localStorage set");
    }
    if (value === undefined)
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

function get(key, defaultValue) {
    if (key === undefined || key === null) {
        throw new Error("missing key for localStorage retrieval");
    }
    var value = localStorage[key];
    if (value === undefined) {
        return defaultValue;
    }
    try {
        value = JSON.parse(value);
    }
    catch (e) {
        return defaultValue;
    }
    return value;
}
