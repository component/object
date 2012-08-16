
# object

  Object keys / values / length.

## Example

```js
var is = require('is');
is.date(obj);
```

## API
   - [.keys(obj)](#keysobj)
   - [.values(obj)](#valuesobj)
   - [.length(obj)](#lengthobj)
<a name="" />
 
<a name="keysobj" />
### .keys(obj)
should return the keys of an object.

```js
var obj = { name: 'tobi', age: 1 };
object.keys(obj).should.eql(['name', 'age']);
```

<a name="valuesobj" />
### .values(obj)
should return the values of an object.

```js
var obj = { name: 'tobi', age: 1 };
object.values(obj).should.eql(['tobi', 1]);
```

<a name="lengthobj" />
### .length(obj)
should return key count.

```js
var obj = { name: 'tobi', age: 1 };
object.length(obj).should.equal(2);
```

## License

  MIT