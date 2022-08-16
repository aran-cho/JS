//add 클릭 시 input 글자 가져오기
//글자가 들어간 list item 추가
// list item  추가 시 listner 기능 추가

let addButton = document.querySelector('#add-button');

//(#이름)은 고라이브 브라우저에서 해당부분 찍어보고 그 이름
let inputText = document.querySelector('#inputext');

let items = document.querySelector('#items');


addButton.addEventListener('click', function(event){
    let task = inputText.value;
    console.log(task);

    let item_html = `<li  class="item">` + 
    `<span class="task">${task}</span>` +
    `<span class="manage">` +
        `<span class="like">` +
            `<i class="material-icons">favorite_border</i>` +
        `</span>` +
        `<span class="delete">` +
            `<i class="material-icons">delete</i>` +
        `</span>` +
    `</span>` +
    `</li>`;
    //돔구조로 넣었음
    //버튼 눌렀을때 그 칸이 여러개 생기기 위해 백틱으로 사용

    items.insertAdjacentHTML('beforeend', item_html);
    // beforeend는 child의 마지막으로

    let target_item = document.querySelector('li:last-child');
    //이게 뭔뜻이냐..가상 셀렉터가,,=라스트에 넣는다는 느낌인가...?

    let like_icons= target_item.querySelector('.like>i'); 
    //favorite_border에서 favorite을 변경하려고
    like_icons.addEventListener('click',(event)=>{
        let target = event.target;
        //i의 elements
        target.innerText = 'favorite';

        return true;
    })

    return true;
} );