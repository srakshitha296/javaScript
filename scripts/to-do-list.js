const taskList = [
    {
        name: 'Learn Javascript',
        date: '22-07-2025'
    },
    {
        name: 'Learn Node.js',
        date: '22-08-2025'
    }
];

function todo() {
    const inputElement_task = document.querySelector('.js-inputElement');
    const inputElement_date = document.querySelector('.js-inputDate');

    const taskName = inputElement_task.value;
    const taskDate = inputElement_date.value;

    taskList.push({
        name: taskName,
        date: taskDate
    });

    document.querySelector('.js-inputElement').value = '';
    document.querySelector('.js-inputDate').value = 'date';


    renderToDoList();
}

function renderToDoList() {
    let htmlCode = '';

    for (let i = 0; i < taskList.length; i++) {
        const listObject = taskList[i];
        const html = `
        <div class="display-name">${listObject.name}</div>
        <div class="display-due-date">${listObject.date}</div>
        <button class="delete-button" onclick = "
            taskList.splice(${i}, 1)
            renderToDoList();"
        >Delete</button>
        `;
        htmlCode += html;
    }

    document.querySelector('.js-list-of-tasks').innerHTML = htmlCode;
}
