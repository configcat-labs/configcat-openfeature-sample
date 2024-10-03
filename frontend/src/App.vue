<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from './stores/user';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

const userStore = useUserStore()
const authenticated = ref(false)

onMounted(() => {
  if(userStore.user) {
    authenticated.value = true
  }
});

function loginUser(user) {
  userStore.setUser(user);
  authenticated.value = true;
}

function logoutUser() {
  userStore.setUser(null);
  authenticated.value = false;
}

</script>

<template>
  <div>
    <h1>PDF Extractor</h1>
      <Dashboard v-if="authenticated"
      :authenticated="authenticated"
      @sign-out="logoutUser"/>
      <div v-else>
        <Login @authenticated="loginUser"/> 
      </div>
  </div>
</template>
