let array = [1];
let head = [1, 2, 1, 2, 1, 2];
let newarray = [];
for (let i = 0; i < head.length; i++) {
  if (!array.includes(head[i])) {
    newarray.push(head[i]);
  }
}
console.log(newarray);
