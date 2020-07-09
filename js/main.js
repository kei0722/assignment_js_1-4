'use strict';

const tasks = [
  ['机を片付ける', '掃除'],
  ['牛乳を買う', '買い物'],
  ['散歩する', '散歩'],
];

function todoList() {
  console.log('=========================');
  console.log('現在持っているタスク一覧');
  console.log('=========================');

  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i}：[内容]${tasks[i][0]}、[ジャンル]${tasks[i][1]}`);
  }
}

todoList();
const addTask = prompt('タスクを入力してください');
const newTask= [];
tasks.push(newTask);
newTask[0] = addTask;

if (addTask) {
  const addCategory = prompt('ジャンルを入力してください');

  if (addCategory) {

    alert('新しいタクスを追加しました。');
    newTask[1] = addCategory;
    todoList();
    const input = prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
  }
}