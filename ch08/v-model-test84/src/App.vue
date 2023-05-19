<template>
  <div>
    <InputName :value="name" @input="$emit('update:name', $event.target.value)" />
    <h3> 검색어 : {{searchName}}</h3> 
  </div>
</template>

<script>
import InputName from './components/InputName.vue';

export default {
  name : "App",
  components : { InputName },
  data() {
    return { searchName : "John" }
  },
  methods : {
    changeSearchName(name) {
      console.log(name)
      this.searchName = name;
    }
  }
}
</script>