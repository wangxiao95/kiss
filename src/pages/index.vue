<template>
    <div id="box">
        <Scroller lock-x height="560px">
            <div>
                <div v-for="item in list" @click="toDetail">
                    <card class="item">
                        <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
                        <div slot="content" class="card-padding">
                            <div class="row">
                                <span class="name">{{item.name}}</span>
                                <span class="age">{{item.age}}</span>
                                <span class="sex">{{item.sex}}</span>
                                <span class="bir">{{item.bir}}</span>
                            </div>
                            <div class="row"></div>
                        </div>
                    </card>
                </div>
            </div>
        </Scroller>
    </div>
</template>

<script>
    import { Card, Scroller } from 'vux'
    export default {
        name: "index",
        data () {
            return {
                height: null,
                list: [
                    {
                        name: '超级赛亚人',
                        age: 25,
                        sex: '♂',
                        bir: '巨蟹座'
                    },
                    {
                        name: '超级赛亚人',
                        age: 25,
                        sex: '♂',
                        bir: '巨蟹座'
                    },
                    {
                        name: '超级赛亚人',
                        age: 25,
                        sex: '♂',
                        bir: '巨蟹座'
                    },
                    {
                        name: '超级赛亚人',
                        age: 25,
                        sex: '♂',
                        bir: '巨蟹座'
                    },
                    {
                        name: '超级赛亚人',
                        age: 25,
                        sex: '♂',
                        bir: '巨蟹座'
                    },
                    {
                        name: '超级赛亚人',
                        age: 25,
                        sex: '♂',
                        bir: '巨蟹座'
                    },
                    {
                        name: '超级赛亚人',
                        age: 25,
                        sex: '♂',
                        bir: '巨蟹座'
                    }
                ]
            }
        },
        computed: {

        },
        components: {
            Card,
            Scroller
        },
        methods: {
            toDetail () {
                this.$router.push({name: 'detail'})
            }
        },
        mounted () {
            // setTimeout(() => {
            //     this.height = document.body.clientHeight - 100 + 'px';
            //     console.log(this.height)
            // }, 1)
        }
    }
</script>

<style scoped>
.item{
    padding: 10px 15px;
}
.row{
    padding: 8px 0 0 0;
}
</style>