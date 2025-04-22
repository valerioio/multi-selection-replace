# Multi Selection Replace

Replace all the selections of text with the result of a JavaScript expression.

## Usage

1. Select the text that you want to replace (you can creat multiple selectors holding down <kbd>Alt</kbd> while clicking with the mouse)
2. Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> on Windows, <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> on Mac
3. Provide a JavaScript expression in the input box at the top of the screen. You can use:
    - `e`: to reference the current element
    - `i`: to reference the current index
    - `a`: to reference the whole array of selections
4. Press <kbd>Enter</kbd>

## Examples

### Increasing sequence
Using JavaScript expression `i+1`...  

![increasing sequence](https://raw.githubusercontent.com/valerioio/multi-selection-replace/main/resources/increasing-sequence.gif)

### Increasing sequence (2nd example)
Using JavaScript expression `e+1`...  

![increasing sequence (2nd example)](https://raw.githubusercontent.com/valerioio/multi-selection-replace/main/resources/increasing-sequence-2nd-example.gif)

### Fibonacci sequence
Using JavaScript expression `a[i] = i < 2 ? i : a[i] = a[i-2] + a[i-1]`...  

![fibonacci sequence](https://raw.githubusercontent.com/valerioio/multi-selection-replace/main/resources/fibonacci-sequence.gif)

## Source Code
Github repository with the source code [here](https://github.com/valerioio/multi-selection-replace/).

### 1.0.0

Initial release.
