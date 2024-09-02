# Hold Focus on TAB
You can use the TAB key in editable HTML elements.

## Under the hood
The script adds an event listener to an element to:
- Inhibit the TAB key to lost focus from editable elements.
- Write the TAB as text.

## API (too big name for a 1-function script)
The script has only one function: `holdFocusOnTab(element = null, hold = true, tabString = "\t")`.

### Parameters
- **element**  
  - _null_: scan all TEXTAREAs and contenteditable elements. _This is the default value._  
  - _element_: work on any element.

- **hold**  
  - _true_: focus will hold while pressing the TAB key. _This is the default value._  
  - _false_: Removes the inhibitor.

- **tabString**  
  - "\t": the tab character. _This is the default value._  
  - _string_: you can use " " (two spaces) or any string you want.  
  This option will be ignored if the element is not editable.

**End of the API.**

## Examples
With the default values, the function initialize all TEXTAREAs and elements with `contenteditable` attribute.  

```html
<html>
  <head>
    <script src="https://your_website/hold-focus-on-tab.min.js" defer></script>
  </head>
  <body>
    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
    <pre><code contenteditable>std::cout << "Hello Virtual World!\n";</code></pre>
    <button id="my_button">Press me!</button>
  </body>
  <script>holdFocusOnTab();</script>
</html>
```

---

With parameters, you can take advantage of the granularity, without worries about duplicated events or memory leaks.
- You can write TAB on all editable elements.
- And my_code will print two spaces instead of the TAB character.

```html
<html>
  <head>
    <script src="https://your_website/hold-focus-on-tab.min.js" defer></script>
  </head>
  <body>
    <textarea id="my_textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
    <pre><code id="my_code" contenteditable>std::cout << "Hello Virtual World!\n";</code></pre>
    <button id="my_button">Press me!</button>
  </body>
  <script>
    holdFocusOnTab();
    let my_code = document.getElementById("my_code");
    let two_spaces = "  ";
    holdFocusOnTab(my_code, true, two_spaces);
  </script>
</html>
```

---

You can also inhibit the TAB key on a non-editable element like a button.

```html
<html>
  <head>
    <script src="https://your_website/hold-focus-on-tab.min.js" async></script>
  </head>
  <body>
    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
    <pre><code contenteditable>std::cout << "Hello Virtual World!\n";</code></pre>
    <button id="my_button">Press me!</button>
  </body>
  <script>
    let my_button = document.getElementById("my_button");
    holdFocusOnTab(my_button);
  </script>
</html>
```

---

If you want to remove the inhibitor from an element

```html
<html>
  <head>
    <script src="https://your_website/hold-focus-on-tab.min.js" async></script>
  </head>
  <body>
    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
    <pre><code contenteditable>std::cout << "Hello Virtual World!\n";</code></pre>
    <button id="my_button">Press me!</button>
  </body>
  <script>
    let my_button = document.getElementById("my_button");
    holdFocusOnTab(my_button, false);
  </script>
</html>
```
