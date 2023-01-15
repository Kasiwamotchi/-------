const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const tomorrowTaskSubmit= document.getElementsByClassName('tomorrow_task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];
const tomorrowTaskList= document.getElementsByClassName('tomorrow_task_list')[0];

'// 追加ボタンを作成//'
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  const Input = document.createElement('input');
  Input.type = 'text';
  Input.placeholder = 'メモ';
  const inputItem = taskList.appendChild(Input);
  showItem.innerHTML = task;
  inputItem.innerHTML = task;

  // タスクに削除ボタンを付与
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  listItem.appendChild(deleteButton);

  // 削除ボタンをクリックし、イベントを発動（タスクが削除）
  deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
    Input.parentNode.removeChild(inputItem);
  });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
  const Tasks = deleteButton.closest('li');
  taskList.removeChild(Tasks);
};

// 追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = '';
});

  const tomorrow_addTasks = (tomorrowTask) => {
// 入力したタスクを追加・表示
    const tomorrowListItem = document.createElement('li');
    const tomorrowInput = document.createElement('input');
    tomorrowInput.type = 'text';
    tomorrowInput.placeholder = 'メモ';
    const tomorrowShowItem = tomorrowTaskList.appendChild(tomorrowListItem);
    const tomorrowInputItem = tomorrowTaskList.appendChild(tomorrowInput);
    tomorrowShowItem.innerHTML = tomorrowTask;
    tomorrowInputItem.innerHTML = tomorrowTask;

      // タスクに削除ボタンを付与
    const tomorrowdeleteButton = document.createElement('button');
    tomorrowdeleteButton.innerHTML = 'Delete';
    tomorrowListItem.appendChild(tomorrowdeleteButton);

      // 削除ボタンをクリックし、イベントを発動（タスクが削除）

    tomorrowdeleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    tomorrowdeleteTasks(tomorrowdeleteButton);
    tomorrowInput.parentNode.removeChild(tomorrowInputItem);
    });

  };

  // 削除ボタンにタスクを消す機能を付与

  const tomorrowdeleteTasks = (tomorrowdeleteButton) => {
    const tomorrowTasks = tomorrowdeleteButton.closest('li');
    tomorrowTaskList.removeChild(tomorrowTasks);

  };

  // 追加ボタンをクリックし、イベントを発動（タスクが追加）
  tomorrowTaskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const tomorrowTask = taskValue.value;
    tomorrow_addTasks(tomorrowTask);
    taskValue.value = '';
});