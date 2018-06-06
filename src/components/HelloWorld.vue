<template>
  <div class="hello">
    <img class="indexImg" src="../assets/imgs/timg.jpeg" alt="">
    <button class="skip">跳过{{count}}</button>
  </div>
</template>

<script>
import { XButton } from 'vux'
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: 3
    }
  },
  components: {
    XButton
  },
  computed: {

  },
  mounted: {
    skip () {
      this.$router.push('/home')
    }
  },
  mounted () {
    let timer = setInterval(() => {
      if (this.count == 0) {
          clearInterval(timer)
          timer = null
          this.$router.push('/home')
          return
      }
      this.count --
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.indexImg{
  max-width: 100%;
  max-height: 100%;
}
.skip{
  position: fixed;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 26px;
  color: #000;
  text-align: center;
  line-height: 26px;
  border: 1px solid #fff;
  border-radius: 2px;
  opacity: 0.3;
}
</style>
