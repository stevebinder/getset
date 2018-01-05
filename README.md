# Description
2 simple Javscript methods for handling LocalStorage.

# Set a Key
```javascript
set('name', 'Joe');
set('list', [1, 2, 3]);
set('config', { saved: true });
```

# Clear a Single Key
```javascript
set('name');
```

# Clear All Keys
```javascript
set('*');
```

# Get a Key
```
get('name'); // 'Joe'
get('list'); // [1, 2, 3]
```


# Get All Keys
```javascript
get('*'); // { name: 'Joe', list: [1, 2, 3], config: { saved: true } }
```
