// const hwInfo={
//   name : "HW",
//   age : 31,
//   gender : "Male",
//   isHandsome: true
// }
// console.log(hwInfo.name)

// function sayHello(hw, age){
//   return `${hw} is very handsome and ${age}`;
// }

// const first = sayHello("HW", "kind");
// console.log(first)

// const calp = {
//   plus: function(a,b){
//     return a + b;
//   }
// }
// const plus = calp.plus(5,5)
// console.log(plus)

// let calm = {
//   minus: function(a,b){
//     return a-b;
//   }
// }
// const minus = calm.minus(5,5)
// console.log(minus);

// const calmul = {
//   multi: function(a,b){
//     return a*b;
//   }
// }
// const multi = calmul.multi(5,5);
// console.log(multi);

// const caln = {
//   na:function(a,b){
//     return a/b;
//   }
// }
// const na = caln.na(10,5);
// console.log(na)

// const title = document.getElementById("#title");
// title.innerHTML = "Hi thedre!";
// title.style.color = "gold";
// console.dir(document)



function handleResize(){
  console.log("I've been resized")
}

window.addEventListener("resize",handleResize);

const txt = document.querySelector(".txt");
const BASE_COLOR = "red";
const OTHER_COLOR = "blue";

function handleClick(){
  //@ts-ignore
  const currnetColor = txt.style.color;
  if(currnetColor === BASE_COLOR){
    //@ts-ignore
    txt.style.color = OTHER_COLOR;
  }else{
    //@ts-ignore
    txt.style.color = BASE_COLOR;
  }
}
// // @ts-ignore
// txt.addEventListener("click", handleClick);

function init(){
  // @ts-ignore
  txt.style.color = BASE_COLOR;
  txt?.addEventListener("mouseenter",handleClick);
}
init();
