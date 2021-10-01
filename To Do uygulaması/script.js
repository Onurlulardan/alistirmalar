const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addEventItem);

    taskList.addEventListener('click', deleteItem);

    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function addEventItem (e){
    
    if(input.value === ''){
        alert('Yeni Görev Ekleyiniz!')
    }
    const li = document.createElement('li');
    li.className= 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));


    const a = document.createElement('a');
    a.className='delete-item float-end';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
    input.value='';

    console.log(li);
    e.preventDefault();
}

function deleteItem (e) {
    if(confirm('Görev silinecek emin misin?')){

    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.remove();
    }
    }
    e.preventDefault();
}

function deleteAllItems (e){
    if(confirm('Görev listesi silinecek emin misin?')){
    // taskList.innerHTML='';
    taskList.childNodes.forEach(function(item){
        if(item.nodeType === 1){
            item.remove();
        }
    });
    }
    e.preventDefault();
}