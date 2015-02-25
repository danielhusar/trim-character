# trim-character [![Build Status](https://secure.travis-ci.org/danielhusar/trim-character.svg?branch=master)](http://travis-ci.org/danielhusar/trim-character)

Trim characters from the string.

## Install

```
npm install --save trim-character
```

## Example

```javascript
var trim = require('trim-character');
trim(',foo,bar,', ','); // foo,bar
trim.left(',foo,bar,', ','); // foo,bar,
trim.right(',foo,bar,', ','); // ,foo,bar
```

## Api

#### String

Type: `String`  
Default: undefined

String to be trimmed.

#### Characters

Type: `String`  
Default: undefined

Characters to trim.

#### RegExp flags (optional)

Type: `String`  
Default: 'g'

Regexp flags, `g` is always appended even if you dont specify it in your parameter.

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
