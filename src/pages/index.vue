<template>
    <!--<div id="box">-->
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  height="93%"
                    style="margin-top: 46px;">

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

        </scroller>
    <!--</div>-->
</template>

<script>
    import { Card } from 'vux'

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
            Card
        },
        methods: {
            toDetail () {
                this.$router.push({name: 'detail'})
            },
            refresh: function (done) {
                // var self = this
                // setTimeout(function () {
                //     var start = self.top - 1
                //     for (var i = start; i > start - 10; i--) {
                //         self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
                //     }
                //     self.top = self.top - 10;
                //     done();
                // }, 1500)
            },

            infinite: function (done) {
                // var self = this
                // setTimeout(function () {
                //     var start = self.bottom + 1;
                //     for (var i = start; i < start + 10; i++) {
                //         self.items.push(i + ' - keep walking, be 2 with you.');
                //     }
                //     self.bottom = self.bottom + 10;
                //     done();
                // }, 1500)
            }
        },
        mounted () {
            setTimeout(() => {
                this.height = document.body.clientHeight + 'px';
                console.log(this.height)
            }, 1)
            console.log(this.$mount());
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