<template>
  <div id="app" @click="exampleAction()">
    <img src="../assets/logo.png">
    <h2>{{exampleGetter}}</h2>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters(['exampleGetter']),
  methods: mapActions(['exampleAction'])

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
