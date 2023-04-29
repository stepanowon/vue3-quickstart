<template>
  <div class="container">
    <div>
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/login">Login</router-link>&nbsp;
      <router-link to="/users">Users</router-link>&nbsp;
      <router-link to="/admins">Admins</router-link>&nbsp;
    </div>
    <hr />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name : "App"
}
</script>

<style>
.container { margin:10px; }
</style>