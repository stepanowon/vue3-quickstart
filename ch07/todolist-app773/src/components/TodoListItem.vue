<template>
    <li class="list-group-item" 
        :class="{ 'list-group-item-success': todoItem.completed } "
        @click="emitter.emit('toggle-completed', todoItem.id)" >
        <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
            {{todoItem.todo}} {{ todoItem.completed ? "(완료)" : "" }}
        </span>
        <span class="float-end badge bg-secondary pointer"
            @click.stop="emitter.emit('delete-todo', todoItem.id)">삭제</span>
    </li>
</template>

<script>
    export default {
        name : "TodoListItem",
        props : {
            todoItem : { type : Object, required: true }
        }
    }
</script>