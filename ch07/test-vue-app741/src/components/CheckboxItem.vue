<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{name}}
    </li>
</template>

<script>
    export default {
        name : "CheckboxItem",
        props : ["name", "checked"],
    }
</script>