# lang

A tiny language library. Put this on your page:

```html
<script type="text/x-i18n-json">
	{
        "numbers" {
            "one": "Un",
            "two": "Deux",
            "three": "Trois",
            "four": "Quatre"
        },
        "sentence": "Ce est une phrase"
    }
</script>
```

Then, you can use the lang function as follows:

```js
var lang = require('lang');

lang('numbers.two'); //=> Deux
lang('sentence'); //=> Ce est une phrase
```

You can have multiple script tags and it'll merge the objects. The idea is that
you output the JSON from the server using the already localised text, instead
of putting localised text straight into your JavaScript.

If this library is too simple for you, check out something like [i18next].

## Todo

Add tests.

## Install

```
$ npm install --save lang
```

(note: used to be tiny-lang, and is still available as tiny-lang on npm, but
that won't be updated)

## License

Released under the MIT license.

[i18next]: http://i18next.com/
