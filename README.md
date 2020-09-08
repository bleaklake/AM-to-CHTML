# am-to-chtml

This MathJax wrapper converts AsciiMath (AM) to CompactHypertextMarkUpLanguage (CHTML). This package doesn't use any webworkers, webviews; so It can be used for your NodeJS, React and React Native projects.

**This project is still in its early development stages.**

For any bugs, typos, errors, feel free to open an issue on the associated Github repository.

## Installation

```cli
npm install am-to-chtml --save
```

## Examples

### JS (with the `options` parameter)

```js
const AMToCHTML = require("am-to-chtml");

const myAMEquation = "d/dxf(x)=lim_(h->0)(f(x+h)-f(x))/h";

const options = {
        width: 1280,
        ex: 8,
        em: 16,
        fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"
};

const CHTMLEquation = AMToCHTML(myAMEquation, options); // returns <mjx-math class=" MJX-TEX"><mjx-mstyle><mjx-mfrac><mjx-frac> ...
```

### TS (without the `options` parameter)

```ts
import AMToCHTML from "am-to-chtml";

const myAMEquation = "d/dxf(x)=lim_(h->0)(f(x+h)-f(x))/h";

const CHTMLEquation = AMToCHTML(myAMEquation); // returns <mjx-math class=" MJX-TEX"><mjx-mstyle><mjx-mfrac><mjx-frac> ...
```

## Documentation

`AMToCHTML(equation, options)` : **string** _The returned CompactHypertextMarkUpLanguage equation_

> `equation` : **string** _The AsciiMath equation_
>
> `options` ?: **object** _The options of the retuned CHTML_
>
> > `width` ?: **number** _The width of container in pixels_
> >
> > `ex` ?: **number** _The ex-size in pixels_
> >
> > `em` ?: **number** _The em-size in pixels_
> >
> > `fontURL` ?: **string** _The URL to use for web fonts_

### Notation

?: = optional parameter

## Notes

### Useful links

This wrapper is inspired by this project : https://github.com/mathjax/MathJax-demos-node/tree/master/direct

### Typescript

You **DON'T** have to install any types `@types/am-to-chtml`
