let input = document.querySelector('#inputText');
let btn = document.querySelector('#addBtn');

function add(){
    let p = document.createElement('p');
    let txt = document.createTextNode(inputText.value);

    p.appendChild(txt);
    document.querySelector('#list').appendChild(p);


    let btn1 = document.createElement('button');
    let btnA1 = document.createAttribute('id');
    let btn2 = document.createElement('button');
    let btnA2 = document.createAttribute('id');
    let shape1 = document.createTextNode('▶');
    let shape2 = document.createTextNode('▷');

    btnA1.value='btnA1'
    btnA2.value='btnA2'

    btn1.appendChild(shape1);
    btn2.appendChild(shape2);
    btn1.setAttributeNode(btnA1);
    btn2.setAttributeNode(btnA2);
    document.querySelector('#list').appendChild(btn1);
    document.querySelector('#list').appendChild(btn2);

    console.log(btn1);
    console.log(btn2);
    // 생성되었음

    let checkBtn = document.querySelector("#list>button");

    function check() {}
}

btn.addEventListener('click', add);