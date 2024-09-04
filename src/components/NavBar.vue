<template>
    <router-link to="/"><img src="../assets/logo.png" width="50"></router-link>|
    <router-link to="/counter">counter </router-link>|
    <router-link to="/employee">Employees </router-link>|
    <router-link to="/users">UserList </router-link>
    <router-view />

</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style></style>