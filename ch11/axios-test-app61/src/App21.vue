<template>
    <div>
        <h2>콘솔을 확인합니다.</h2>
    </div>
</template>
  
<script setup>
import axios from 'axios'

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

//전체 목록을 조회한 후 한 건씩 순차적으로 순회하며 조회하기 + 예외처리 
const requestAPI = async () => {
  let todoList;

  try {
    let response = await axios.get(listUrl);
    todoList = response.data;
    console.log("# TodoList : ", todoList);
    for (let i = 0; i < todoList.length; i++) {
      response = await axios.get(todoUrlPrefix + todoList[i].id);
      console.log(`# ${i + 1}번째 Todo : `, response.data);
    }
  } catch(e) {
    if (e instanceof Error)  console.log(e.message);
    else console.log(e);
  }

};

requestAPI();
</script>