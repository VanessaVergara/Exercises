let nodeList = document.querySelectorAll('li');
for(let i = 0; i < nodeList.length; i++){
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

let close = document.getElementsByClassName('close')
for(let i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
},false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("You must write something!")
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value = "";
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for(i = 0; i < close.length; i++){
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}