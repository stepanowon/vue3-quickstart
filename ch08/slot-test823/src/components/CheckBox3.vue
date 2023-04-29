<template>
    <div>
        <slot name="icon"></slot>
        <input type="checkbox" :value="id" :checked="checked"
             @change="$emit('check-changed', {id, checked: $event.target.checked })" />
        <slot name="label">Item</slot>
    </div>
</template>

<script>
export default {
    name : "CheckBox2",
    props : ["id", "checked"]
}
</script>