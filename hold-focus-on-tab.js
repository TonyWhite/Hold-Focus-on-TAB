function holdFocusOnTab(element = null, hold = true, tabString = "\t") {
  const _ignoreTabKey = (e) => {
    if (e.key === 'Tab') {
      // Do not lose focus
      e.preventDefault();
      
      if (element.tagName === "TEXTAREA") {
        // Get the selection
        let start = this.selectionStart;
        let end = this.selectionEnd;

        // Set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);

        // Put the caret just after the TAB
        this.selectionStart = this.selectionEnd = start + 1;
      }
      else if (element.isContentEditable) {
        // Check valid selection
        let selection = document.getSelection();
        if (selection !== 'null' && selection.type !== "None") {
          // Get the selection
          let range = selection.getRangeAt(0);
          let start = range.startOffset;
          let end = range.endOffset;
          
          // Set text before caret + tab + text after caret
          let value = this.innerHTML; // Make the next line of code easier to read
          this.innerHTML = value.substring(0, start) + tabString + value.substring(end, value.length);
          
          // Put the caret just after the TAB
          selection.removeAllRanges();                         // Remove all ranges
          range = document.createRange();                      // Create a new range
          let container = this.childNodes[0];                  // The container is the CODE element
          range.setStart(container, start + tabString.length); // Select starts just after the TAB
          range.setEnd(container, start + tabString.length);   // Select ends just after the TAB
          selection.addRange(range);                           // Apply the selection
        }
      }
    }
  };
  
  if (element === null) {
    // Search for all
    let elements = document.getElementsByTagName("*");
    for (let i=0; i<elements.length; i++) {
      if (elements[i].tagName === "TEXTAREA" || elements[i].isContentEditable) {
        holdFocusOnTab(elements[i], hold, tabString); // Recursive call
      }
    }
  }
  else {
    element.removeEventListener('keydown', _ignoreTabKey);
    if (hold) element.addEventListener('keydown', _ignoreTabKey);
  }
}
