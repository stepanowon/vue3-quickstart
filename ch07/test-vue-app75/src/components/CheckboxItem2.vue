<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{idol.name}}
    </li>
</template>

<script>
export default {
    name : "CheckboxItem2",
    props : ["idol"],
    // created() {
    //     this.idol.checked = true;
    // }
}
</script>