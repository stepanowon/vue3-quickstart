<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div classe="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <TodoList :todoList="todoList" @delete-todo="deleteTodo" @toggle-completed="toggleCompleted" />
      </div>
    </div>
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue'
  import InputTodo from './components/InputTodo.vue'

  let ts = new Date().getTime()

  export default {
    name: "App",
    components : { InputTodo, TodoList },
    data() {
      return {
        todoList : [
          { id: ts, todo:"자전거 타기", completed: false },
          { id: ts+1, todo:"딸과 공원 산책", completed: true },
          { id: ts+2, todo:"일요일 애견 카페", completed: false },
          { id: ts+3, todo:"Vue 원고 집필", completed: false },
        ]
      }
    },
    methods: {
      addTodo(todo) {
        if (todo.length >= 2) {
          this.todoList.push({ id: new Date().getTime(), todo: todo, completed: false });
        }
      },
      deleteTodo(id) {
        let index = this.todoList.findIndex((item) => id === item.id);
        this.todoList.splice(index, 1);
      },
      toggleCompleted(id) {
        let index = this.todoList.findIndex((item) => id === item.id);
        this.todoList[index].completed = !this.todoList[index].completed;
      }
    }
  }
</script>