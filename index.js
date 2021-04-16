const input = document.querySelector('#todo_text_input');
const addBtn = document.querySelector('#add_todo');
const list = document.querySelector('#list');
const finishTodo = document.querySelector('.finish_todo');

const app = () => {
    let inputValue = input.value.trim();

    if (inputValue !== '') {
        input.value = '';

        const li = document.createElement('li');
        const span = document.createElement('span');
        const finishBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        li.classList.add('list_item');
        span.classList.add('todo_text');

        finishBtn.classList.add('finish_todo');
        finishBtn.innerHTML = 'Ավարտել';

        removeBtn.classList.add('remove_todo');
        removeBtn.innerHTML = 'Ջնջել';

        list.appendChild(li);
        li.appendChild(span);
        span.textContent = inputValue;

        li.appendChild(finishBtn);
        li.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => {
            li.remove();
        });

        finishBtn.addEventListener('click', () => {
            li.classList.add('finished')
        });

        // const allLi = list.querySelectorAll('li');

        // allLi.forEach(item => {
        //     // const toJson = item.querySelector('span').innerHTML;

        //     // localStorage.setItem('ToDo', JSON.stringify(toJson));
        // });
    }
}

addBtn.addEventListener('click', app);
window.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        app();
    }
});