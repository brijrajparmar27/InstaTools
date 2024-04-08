const viewed = [];

const liked = [];

let sawbutdidntlike = [];

viewed.forEach((each) => {
  if (!liked.includes(each)) {
    sawbutdidntlike.push(each);
  }
});

console.log(sawbutdidntlike);
console.log(sawbutdidntlike.length);
