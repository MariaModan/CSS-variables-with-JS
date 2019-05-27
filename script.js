let color = document.getElementById("color-input");
let root = document.documentElement;
let blur = document.getElementById("blur-input")

color.addEventListener("input", function(){
  root.style.setProperty("--main-color", color.value);
})

blur.addEventListener("input", function(){
  root.style.setProperty("--blur-filter", "blur(" + blur.value + "px)");
})
