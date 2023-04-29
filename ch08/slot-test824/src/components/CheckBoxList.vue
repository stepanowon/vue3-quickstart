<template>
    <div v-for="item in items" :key="item.id">
        <slot name="icon" :checked="item.checked"></slot>
        <input type="checkbox" :value="item.id" :checked="item.checked"
     @change="$emit('check-changed', {id:item.id, checked: $event.target.checked })" />
        <slot :checked="item.checked" :label="item.label"></slot>
    </div> 
</template>

<script>
export default {
    name : "CheckBoxList",
    props : ["items"]
}
</script>
