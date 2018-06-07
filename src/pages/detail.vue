<template>
    <div>
        <x-header>详情</x-header>
        <swiper style="margin-top: 3px;">
            <swiper-item v-for="(item, index) in list" :key="index"><img class="previewer-demo-img" :src="item.src"
                                                                         @click="show(index)"></swiper-item>
        </swiper>


        <div v-transfer-dom>
            <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
        </div>
    </div>
</template>

<script>
  import {XHeader, Swiper, SwiperItem, Previewer, TransferDom} from 'vux'

  export default {
    name: "detail",
    data() {
      return {
        list: [{
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          src: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          msrc: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          title: '送你一朵fua，在哪呢？'
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          src: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          msrc: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          title: '送你一辆车，你咋那么有钱呢'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg', // 404
          title: '送你一次旅行，不走不是人。。。',
          fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
          msrc: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
          src: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }],
        index: 0,
        options: {
          getThumbBoundsFn(index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
      }
    },
    directives: {
      TransferDom
    },
    components: {
      Swiper,
      SwiperItem,
      XHeader,
      Previewer
    },
    methods: {
      imgChange() {
        console.log()
      },
      logIndexChange(arg) {
        console.log(arg)
      },
      show(index) {
        console.log(1)
        this.$refs.previewer.show(index)
      }
    }
  }
</script>

<style scoped>

</style>