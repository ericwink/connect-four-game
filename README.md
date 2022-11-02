# Frontend Mentor - Connect Four game solution

This is a solution to the [Connect Four game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/connect-four-game-6G8QVH923s). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Connect Four game solution](#frontend-mentor---connect-four-game-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Video](#video)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the game rules
- Play a game of Connect Four against another human player (alternating turns on the same computer)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the discs animate into their position when a move is made
- **Bonus**: Play against the computer

### Video

![](./screenshot.jpg)

### Links

- Solution URL: [EricWink Github](https://github.com/ericwink/connect-four-game)
- Live Site URL: [Play Connect Four!](https://ericwink-connectfour.netlify.app/)

## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [GSAP](https://greensock.com/gsap/) - GSAP Animation Library

### What I learned

I was able to utilize some recent studies about datastructures to find inspriation to manage the gameboard. Each cell in the board is an object, and similar to a linked list, each cell has attributes that indicate what other cell it connects to and in which direction. I was then able to use that to traverse the board to check for connecting values to find the four-in-a-row!

A sample of the gameboard objects
```js
    {
        position: 0,
        value: null,
        right: 1,
        downright: 8,
        down: 7
    },
    {
        position: 1,
        value: null,
        left: 0,
        right: 2,
        downright: 9,
        down: 8,
        downleft: 7
    },
```

The function I wrote to 'check-next' and determine if there were four in a row

```js
//function to check value in a row by direction
function checkNext(board, position, direction) {
    let counter = 1
    let current = position
    let next = board[current][direction]
    let check = board[current].value
    let fourInARow = [current]
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a next position to check against
        if (board[current].value && next)
            if (board[next].value === check) {
                counter++
                //if matching, push the position onto the array to track winning selection
                fourInARow.push(next)
                current = next
                next = board[current][direction]
            }
    }
    return [counter, fourInARow]
}
```

### Continued development

I'd like to continue to study data structures/algorithms to broaden my understanding of solving common problems, which will allow me to continue to apply different strategies to other projects I build.

### Useful resources

- [Data Structures & Algorithms - JavaScript](https://www.udemy.com/course/data-structures-algorithms-javascript) - This course utilizes animations to explain DS/A and is greatly assisting my learning of the material

## Author

- Website - [Eric Winkelspecht](https://www.ericwink.dev/)
- Frontend Mentor - [@ericwink](https://www.frontendmentor.io/profile/ericwink)
- Twitter - [@ericwinkdev](https://twitter.com/ericwinkdev)
- GitHub - [EricWink](https://github.com/ericwink/)