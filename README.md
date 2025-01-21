# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Notes
* Added an address to fetched data, so user can search full address and the autocomplete will still work
* Adding `e.preventDefault` to `onMouseDown` prevents the autocomplete from disappearing when you click on an option. It will ONLY disappear if you click outside the input box and filtered result dropdown. 
    * Why Does e.preventDefault() on mousedown Stop onBlur?
        * The onBlur event isn’t directly affected by e.preventDefault() in onMouseDown. What’s happening is this:
            1. onMouseDown default behavior includes a focus change:
                * When you click on another element, the browser typically moves focus to that element.
                * As part of this focus change, the previously focused element loses focus, triggering onBlur for the old element.
            2. Calling e.preventDefault() interrupts the focus change:
                * By preventing the default mousedown behavior, the browser does not perform the focus change.
                * Without a focus change, the previously focused element does not lose focus, and its onBlur event is not triggered.
* Ideally, import the images in first rather than trying to only reference the image by path. The images seem to load better when you import it first.
* Issue:
    * `setLocationData('')` is used b/c when you click on an autocomplete, the address is saved. If you delete the query and click the search, it will still search whatever you had clicked for autocomplete


## Credits
* Website Design - https://goodjiveet.best/product_details/17403159.html
* Info on Seasons - https://www.noaa.gov/media/cms-image/meteorological-and-astronomical-seasons-southern-hemisphere-graphic#:~:text=Astronomical%20seasons%3A%20Winter%20begins%20on,on%20the%20summer%20solstice%20(Dec.
* Hero Images
    * Winter - eberhard grossgasteiger
        * https://www.pexels.com/search/winter%20landscape/