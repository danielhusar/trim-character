# trim-character [![Build Status](https://secure.travis-ci.org/danielhusar/trim-character.svg?branch=master)](http://travis-ci.org/danielhusar/trim-character)

Trim characters from teh string.

## Install

```
npm install --save trim-character
```

## Example

```javascript
var trim = require('trim-character');
trim(',foo,bar,', ','); // foo,bar
```

## Api

#### String

Type: `String`  
Default: ''

String to be trimmed.

#### Characters

Type: `String`  
Default: ''

Characters to trim.

#### RegExp flags (optional)

Type: `String`  
Default: 'g'

Regexp flags to add to regexp match.

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
