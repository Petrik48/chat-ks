<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>

import VMainWrapper from "@/components/v-main-wrapper";
export default {
  name: 'App',
  components: {VMainWrapper}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #C2C2C2;
  font-family: 'Roboto', sans-serif;
}
</style>