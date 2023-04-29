<template>
    <div class="row mb-3">
        <div class="col">
            <div class="input-group">
                <input id="msg" type="text" class="form-control" name="msg" 
                    placeholder="할일을 여기에 입력!" v-model.trim="todo" 
                    @keyup.enter="addTodoHandler" />
                <span class="btn btn-primary input-group-addon" 
                    @click="addTodoHandler">추가</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name : "InputTodo",
    setup(props, context) {
        const todo = ref("");
        const addTodoHandler = () => {
            if (todo.value.length >= 3) {
                context.emit('add-todo', todo.value);
                todo.value = "";
            }
        }
        return { todo, addTodoHandler }
    }
}
</script>