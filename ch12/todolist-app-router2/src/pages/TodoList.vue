<template>
    <div class="row">
        <div class="col p-3">
            <router-link class="btn btn-primary" to="/todos/add">
            할일 추가
            </router-link>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
            </ul>
        </div>
    </div>
</template>

<script setup>
import {inject} from 'vue';
import TodoItem from '@/pages/TodoItem.vue'

const todoList = inject('todoList');
</script>