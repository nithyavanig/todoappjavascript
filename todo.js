
const taskLisst = [];

function addTask(target){
    
    const taskText = target.parentElement.firstElementChild.value;
    const t = document.createElement("INPUT");
    t.setAttribute("type", "text");
    t.value = taskText;
    t.setAttribute('readonly', true);

    const taskWrapper = document.createElement('div');
    const key = (Math.floor(Math.random()*10)).toString();
    taskWrapper.className = 'text-container-'+ key;

    const completeIconSpan = document.createElement('span');
    completeIconSpan.className = "complete-icon";
    completeIconSpan.innerHTML = '<i class="fas fa-check"></i>';

    const editIconSpan = document.createElement('span');
    editIconSpan.className = "edit-icon";
    editIconSpan.innerHTML = '<i class="fas fa-pencil-alt"></i>';

    const deleteIconspan = document.createElement('span');
    deleteIconspan.className = "del-icon";
    deleteIconspan.innerHTML = '<i class="far fa-trash-alt"></i>';

    editIconSpan.addEventListener('click', ()=> editHandler(this, key));
    deleteIconspan.addEventListener('click', ()=>removeHandler(this, key));
    completeIconSpan.addEventListener('click', ()=> completeHandler(this, key));

    // taskWrapper.appendChild(textSpan)
    taskWrapper.appendChild(t);
    taskWrapper.appendChild(completeIconSpan);
    taskWrapper.appendChild(editIconSpan);
    taskWrapper.appendChild(deleteIconspan);
    
    let nodeList = document.getElementsByClassName("task-list");
    nodeList[0].appendChild(taskWrapper);
}

function editHandler(target, key){
    const element = document.getElementsByClassName('text-container-'+key)[0].firstElementChild;
    element.removeAttribute('readonly');
    element.classList.remove('strike');
    element.classList.add('unstrike'); 
    element.focus();
}

function removeHandler(target, key){
    const element = document.getElementsByClassName('text-container-'+key)[0];
    element.remove();
}

function completeHandler(target ,key) {
    const element = document.getElementsByClassName('text-container-'+key)[0].firstElementChild;
    element.classList.remove('unstrike');
    element.classList.add('strike'); 
}