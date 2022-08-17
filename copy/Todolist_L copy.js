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
    // document.querySelector("#list").appendChild(p);

    let btn1 = document.createElement("button");
    let btnA1 = document.createAttribute("id");
    let btn2 = document.createElement("button");
    let btnA2 = document.createAttribute("id");
    let shape1 = document.createTextNode("▶");
    let shape2 = document.createTextNode("▷");

    btnA1.value = "btnA1";
    btnA2.value = "btnA2";

    btn1.appendChild(shape1);
    btn2.appendChild(shape2);
    btn1.setAttributeNode(btnA1);
    btn2.setAttributeNode(btnA2);
    // document.querySelector("#list").appendChild(btn1);
    // document.querySelector("#list").appendChild(btn2);
    div.appendChild(p);
    div.appendChild(btn1);
    div.appendChild(btn2);
    // document.querySelector("div").appendChild(p);
    // document.querySelector("div").appendChild(btn1);
    // document.querySelector("div").appendChild(btn2);
    document.querySelector("#list").appendChild(div);

    // 생성되었움

    // inputText.value='';

    //     let checkBtn = document.querySelectorAll("#btnA1");

    //     function check() {
    //     let p = document.querySelector("#list>p");
    //     let checkBtn2 = document.querySelector("#btnA2");

    //     // p.parentNode.removeChild(p);
    //     // checkBtn.parentNode.removeChild(checkBtn);
    //     // checkBtn2.parentNode.removeChild(checkBtn2);

    //     this.parentNode.removeChild(this);

    //     }
    //     checkBtn.addEventListener("click", check);
    //   }
    let items = document.querySelector("#divList"); //모든 항목(li) 가져오기
     console.log(items.length);
    for (i = 0; i < items.length; i++) {
      //입력되는 값과 비교
      console.log(items.length);
    
      items[i].addEventListener("click", function () {
        //항목 클릭했을 때 실행할 함수
        //if 문으로 부모노드 확인(부모노드가 있다면(true) 삭제해줘)
        if (this.parentNode)
          //부모노드가 있다면 아래 구문 실행
          this.parentNode.removeChild(this); //부모노드에서 자기 자신 삭제
        //this = 자기자신
        //if 조건문에서 실행할 코드가 한 줄이면 중괄호 생략가능
      });
    }
}
}

btn.addEventListener("click", add);

// e.target.delete(remove)->삭제
//사라지고 나타나고-> done
//삭제를 눌렀을때 txt 를 변수에 저장 클릭한 아이의 txt를
//공백이면 알럿
//remove
// done add txt변수를 저장
