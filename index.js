/*
Copyright (c) 2018, Ebben Feagan and DataExchange Inc.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, 
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL 
MPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER 
IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR 
PERFORMANCE OF THIS SOFTWARE.
*/

const copyTextToClipboard = (text) => {
    if (!navigator.clipboard) {
        return new Promise((resolve, reject) => {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                const res = document.execCommand('copy');
                if (res === 'successful') {
                    resolve();
                    return;
                }
                reject();
            }
            catch (err) {
                reject();
            }
            finally {
                document.body.removeChild(textArea);
            }
        });
    }
    return navigator.clipboard.writeText(text);
};

export default copyTextToClipboard;