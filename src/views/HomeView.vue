<template>
  <Header />
    <h1>Welcome Home Page</h1>
</template>

<script>
import Header from '@/components/Header.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Header
  },
  mounted () {
    console.warn("mount");
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({name:"signup"})
        }
  },
}
</script>
