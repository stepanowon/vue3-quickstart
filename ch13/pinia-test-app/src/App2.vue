<template>
  <div>
      <h2>TodoList 테스트(Composition API)</h2>
      <hr />
      할일 추가 : 
      <input type="text" v-model="todo" />
      <button @click="addTodoHandler">추가</button>
      <hr />
      <ul>
          <li v-for="todoItem in todoList">
              <span style="cursor:pointer" @click="toggleDone(todoItem.id)">
              {{ todoItem.todo}} {{ todoItem.done ? "(완료)" : "" }}   
              </span>
              &nbsp;&nbsp;&nbsp;
              <button @click="deleteTodo(todoItem.id)">삭제</button>
          </li>
      </ul>
      <div>완료된 할일 수 : {{doneCount}}</div>
  </div>
</template>

<script>
import { useTodoList2Store } from '@/stores/todoList.js'
import { ref, computed } from 'vue';

export default {
  name:"App2",
  setup() {
      const todo = ref("");

      const todoListStore = useTodoList2Store();
      const { todoList, addTodo, deleteTodo, toggleDone } = todoListStore;
      const doneCount = computed(()=>todoListStore.doneCount);

      const addTodoHandler = () => {
          addTodo(todo.value);
          todo.value = "";
      }
      return { todo, todoList, doneCount, addTodoHandler, deleteTodo, toggleDone }
  }
}
</script>