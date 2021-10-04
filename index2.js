const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick(){
//   const currentClass = title?.className;
//   if(currentClass !== CLICKED_CLASS){
//     //@ts-ignore
//     title.className = CLICKED_CLASS;
//   }else{
//     //@ts-ignore
//     title.className = "";
//   }
// }

// function init(){
//   title?.addEventListener("click",handleClick);
// }
// init();

function handleClick(){
  title?.classList.toggle(CLICKED_CLASS);
}
function init(){
  title?.addEventListener("click",handleClick);
}
init();