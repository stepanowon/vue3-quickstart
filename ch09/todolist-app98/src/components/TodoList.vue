<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem v-for="todoItem in todoList" :key="todoItem.id" 
                    :todoItem="todoItem" @delete-todo="emit('delete-todo', todoItem.id)" 
                    @toggle-completed="emit('toggle-completed', todoItem.id)" />
            </ul>
        </div>
    </div>
</template>

<script setup>
    import TodoListItem from './TodoListItem.vue'
    
    const props = defineProps({
        todoList : { type : Array, required:true }
    })
    const emit = defineEmits(['delete-todo','toggle-completed'])
</script>