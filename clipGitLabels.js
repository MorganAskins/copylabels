let x = []
let names = document.querySelectorAll(".js-new-label-name-input")
let descriptions = document.querySelectorAll(".js-new-label-description-input")
let colors = document.querySelectorAll(".js-new-label-color-input")

for( let i=0; i < names.length; i++ ){
  x.push({"name":names[i].value, "description":descriptions[i].value, "color":colors[i].value})
}

console.log(x)
