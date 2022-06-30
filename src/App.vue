<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { defineComponent } from "vue";

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default defineComponent({
  name: "app",
  setup() {
    console.log('env',import.meta.env)
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
