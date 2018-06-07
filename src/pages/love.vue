<template>
    <div>
        <tab>
            <tab-item selected badge-label="1">收到的消息</tab-item>
            <tab-item badge-background="#38C972" badge-color="#fff" badge-label="2">发出的消息</tab-item>
        </tab>
    </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'

  export default {
    name: "love",
    components: {
      Tab,
      TabItem
    }
  }
</script>

<style scoped>

</style>