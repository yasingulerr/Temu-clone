<template>
    <Login />
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import Login from "~/components/LoginComponents.vue";
  
  export default defineComponent({
    components: {
        Login,
    },
  });
  </script>