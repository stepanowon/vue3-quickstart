<template>
  <div class="container">
      <Header />
      <router-view />
      <Loading v-if="states.isLoading" />
  </div>
</template>

<script setup>
import { reactive, provide, computed } from 'vue'
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'
import axios from 'axios';

const owner = "gdhong";
const BASEURI = "/api/todolist_long";

const states = reactive({ todoList:[], isLoading:false })

//TodoList 목록을 조회합니다.
const fetchTodoList = async () => {
  states.isLoading = true;
  try {
    const response = await axios.get(BASEURI + `/${owner}`);
    if (response.status === 200) {
        states.todoList = response.data;
    } else {
        alert('데이터 조회 실패');
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}

// 새로운 TodoItem을 추가합니다.
const addTodo = async ({ todo, desc }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { todo, desc };
    const response = await axios.post(BASEURI + `/${owner}`, payload)
    if (response.data.status === "success") {
      states.todoList.push({ id: response.data.item.id, todo, desc, done: false })
      successCallback();
    } else {
      alert('Todo 추가 실패 : ' + response.data.message);
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}
// 기존 TodoItem을 변경합니다.
const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { todo, desc, done };
    const response = await axios.put(BASEURI + `/${owner}/${id}`, payload)
    if (response.data.status === "success") {
        let index = states.todoList.findIndex((todo) => todo.id === id);
        states.todoList[index] = { id, todo, desc, done };
        successCallback();
    } else {
        alert('Todo 변경 실패 : ' + response.data.message);
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}
//기존 TodoItem을 삭제합니다.
const deleteTodo = async (id) => {
  states.isLoading = true;
  try {
    const response = await axios.delete(BASEURI + `/${owner}/${id}`)
    if (response.data.status === "success") {
      let index = states.todoList.findIndex((todo) => todo.id === id);
      states.todoList.splice(index, 1);
    } else {
      alert('Todo 삭제 실패 : ' + response.data.message);
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}
//기존 TodoItem의 완료여부(done) 값을 토글합니다.
const toggleDone = async (id) => {
  states.isLoading = true;
  try {
    const response = await axios.put(BASEURI + `/${owner}/${id}/done`)
    if (response.data.status === "success") {
        let index = states.todoList.findIndex((todo) => todo.id === id);
        states.todoList[index].done = !states.todoList[index].done;
    } else {
        alert('Todo 완료 변경 실패 : ' + response.data.message);
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
}

provide('todoList', computed(()=>states.todoList));
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo, fetchTodoList })

fetchTodoList();
</script>
