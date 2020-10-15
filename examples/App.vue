<template>

    <div id="app">
        <!-- <SlideNav></SlideNav> -->
        <Home></Home>
        <!-- <router-view /> -->
    </div>
</template>

<script>
import SlideNav from './components/slideNav/slideNav.vue'
import Home from './components/Home/home.vue'
export default {
    name: 'App',
    data() {
        return {}
    },
    components: {
        SlideNav,
        Home
    }
}
</script>

<style>
#app {
    height: 100vh;
    width: 100vw;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
