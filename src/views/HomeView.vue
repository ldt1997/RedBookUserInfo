<script setup>
import UserForm from '../components/UserForm.vue'
import UserInfo from '../components/UserInfo.vue'
import UserContent from '../components/UserContent.vue'
</script>

<template>
  <main>
    <UserForm />
    <UserInfo />
    <UserContent />
  </main>
  <footer>©️{{ new Date().getFullYear() }} ldt1997 · <a href="https://github.com/ldt1997/RedBookUserInfo">Github</a></footer>
</template>

<style>
footer {
  padding: 16px;
  text-align: center;
  background-color: #0e0e10;
  color: #6d7179;
}
footer a {
  color: #6d7179;
}
</style>
