<template>
  <Logout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logout from "~/components/LogoutComponents.vue";

export default defineComponent({
  components: {
    Logout,
  },
});
</script>
