# Description
2 simple methods for handling localStorage in Javascript web development.

# Usage
```javascript
set("mykey", "myvalue"); // localStorage[key] = value;
set("mykey", [1, 2, 3]); // localStorage[key] = JSON.stringify([1, 2, 3]);
set("mykey"); // delete localStorage[key];
set("*"); // localStorage.clear();
get("mykey"); // returns localStorage[key];
get("mykey", 123); // returns 123 if localStorage[key] === undefined
```
