let input = document.querySelector("#inputText");
let btn = document.querySelector("#addBtn");

function add(e) {
  e.preventDefault();
  if (inputText.value === "") {
    alert("Please add your list");
  } else {
    let div = document.createElement("div");
    let divI = document.createAttribute("id");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let check = document.createAttribute('class');
    let txtCheck = document.createTextNode('√');
    //ㄷ 한자
    
    let txt = document.createTextNode(inputText.value);

    divI.value = 'divList';
    check.value = 'check';

    div.setAttributeNode(divI);
    span.setAttributeNode(check);

    // let img = document.createElement("img");
    // let src = document.createAttribute('src');
    // src.value = './image/check.png';
    // img.setAttributeNode(src);

    span.appendChild(txtCheck);
    p.appendChild(span);
    // div.appendChild(img);
    p.appendChild(txt);
    div.appendChild(p);

    console.log(div);

    input.value = "";

    //체크에 mouseover 하면 색변경
    function color(){
      txtCheck.style.color = 'red';
    }

    txtCheck.addEventListener('mouseover', color);
    
    // 체크하면 line-through
    document.querySelector("#list").appendChild(div);

    let click = document.querySelectorAll("p");

    for (let i = 0; i < click.length; i++) {
      click[i].addEventListener("click", function () {
        this.style.color = "#ccc";
        this.parentNode.style.color = "#ccc";
        this.parentNode.style.textDecoration = "line-through";
      });
    }

    //clear 누르면 사라짐
    let clear = document.querySelector('#clear');
    console.log(clear);
    
    function cle(){
      div.remove();
    }
    clear.addEventListener('click', cle);
  }
}

btn.addEventListener("click", add);

