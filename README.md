## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot
[](./images/screenshot.png)


### Links

- Solution URL: [GitHub]()
- Live Site URL: [LiveURL]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- CSS grid
- JavaScript

### What I learned

I interacted with local Storage and stored user's input in it. I also used Arra.prototype.filter() mulitple times and understood it better. I made use of Mutation Observer, just like in the last assignment and it tuned out pretty well. In css I worked with :before pseudo-element to create additional styling for the web-page

```css

input[type="checkbox"]:checked:before{
   content:'';
    position: absolute;
    background-image: url("../images/icon-check.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: inherit;
    height: inherit;
    background-size: 0.8rem;
}
```


## Author

- LinkedIn - [Luca Gabadadze](https://www.linkedin.com/in/luca-gabadadze-6068b324a/)