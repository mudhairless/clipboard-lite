# Clipboard Lite

Easily copy text to the clipboard across browsers without a textarea element as the base.

## Usage

```javascript

import CopyToClipboard from 'clipboard-lite';

CopyToClipboard('Hello, World!');

```

## Browser Support

| Chrome | Edge | Firefox | Internet Explorer | Opera | Safari |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 12+ ✔ | 41+ ✔ | 9+ ✔ !| 29+ ✔ | 10+ ✔ |

(!) Internet Explorer versions below 11 will require a polyfill for ES6 Promises.

## API

### CopyToClipboard

`CopyToClipboard(String text) : Promise`

This is the sole function provided by the library. It is capable of handling TEXT only. The return value is a Promise that indicates if the copy was successful or not.

## License
 
 `ISC License`

 ```
Copyright (c) 2018, Ebben Feagan and DataExchange Inc.

Permission to use, copy, modify, and/or distribute this software for any purpose with
or without fee is hereby granted, provided that the above copyright notice and this
permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO
THIS SOFTWARE INCLUDING ALL MPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT
SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR
ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH
THE USE OR PERFORMANCE OF THIS SOFTWARE.
 ```