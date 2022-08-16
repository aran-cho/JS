let input = document.querySelector("#inputText");
let btn = document.querySelector("#addBtn");

function add(e) {
  e.preventDefault();
  if (inputText.value === "") {
    alert("Please add your list");
  } else {
    let div = document.createElement("div");
    let divI = document.createAttribute("id");
    divI.value = "divList";
    div.setAttributeNode(divI);

    let p = document.createElement("p");
    let txt = document.createTextNode(inputText.value);

    p.appendChild(txt);
    div.appendChild(p);

    input.value = "";

    document.querySelector("#list").appendChild(div);

    let click = document.querySelectorAll("p");

    for (let i = 0; i < click.length; i++) {
      click[i].addEventListener("click", function () {
        this.style.color = "#ccc";
        this.parentNode.style.color = "#ccc";
        this.parentNode.style.textDecoration = "line-through";
      });
    }
    let clear = document.querySelector('#clear');
    console.log(clear);
    
    function cle(){
      div.remove();
    }
    clear.addEventListener('click', cle);
  }
//   let clear = document.querySelector('#clear');

//   function cle(){
//     div.remove();
// }
// clear.addEventListener('click', cle);
}



btn.addEventListener("click", add);

