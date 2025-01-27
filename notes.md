# Notes (to self)

## Why does using `e.preventDefault()` on `onMouseDown` stop `onBlur`?
Adding `e.preventDefault` to `onMouseDown` prevents the autocomplete from disappearing when you click on an option. It will only disappear if you click outside the input and results dropdown. 

The onBlur event isn’t directly affected by e.preventDefault() in onMouseDown. What’s happening is this:
1. onMouseDown default behavior includes a focus change:
  * When you click on another element, the browser typically moves focus to that element.
  * As part of this focus change, the previously focused element loses focus, triggering onBlur for the old element.
2. Calling e.preventDefault() interrupts the focus change:
  * By preventing the default mousedown behavior, the browser does not perform the focus change.
  * Without a focus change, the previously focused element does not lose focus, and its onBlur event is not triggered.
  * You may need to import the images first rather than trying to only reference them by path. The images sometimes load better that way.

## Others
* Added a `geoLocation` variable to fetched data to ensure, for example, that typing either Bayside or Bayside, New York, United States will still yield results