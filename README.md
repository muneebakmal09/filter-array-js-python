# Filter Array/List Elements in JS & Python

This repository contains scripts in **JavaScript** and **Python** to filter elements from one array/list based on another array/list.

## Features
- Beginner-friendly code
- Works in both JS and Python
- Efficient array/list filtering
- Easy to customize

## Example

**JavaScript**
```javascript
let array = [1];
let head = [1,2,1,2,1,2];
let newarray = [];
for(let i=0;i<head.length;i++){
    if(!array.includes(head[i])){
        newarray.push(head[i]);
    }
}
console.log(newarray); // Output: [2,2,2]
