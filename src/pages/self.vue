<template>
    <div style="">
        <blur style="height: 200px;" :blur-amount=40 :url="url">
            <p class="center"><img :src="url"></p>
            <p class="center">王晓笨蛋</p>
        </blur>
        <!--<flexbox :gutter="0">-->
            <!--<flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>-->
        <!--</flexbox>-->
        <group>
            <cell title="个人资料" is-link @click.native="go"></cell>
            <cell title="账户余额" value="1028" @click.native="go"></cell>
            <cell title="隐私" is-link @click.native="go"></cell>
            <cell title="设置" is-link @click.native="go"></cell>
            <!--<cell :title="$t('Money')" @click.native="onClick" :is-loading="!money" :value="money"></cell>-->
            <!--<cell :title="$t('Withdraw')" disabled is-link></cell>-->
        </group>

    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, Blur, Cell, Group } from 'vux'
    export default {
        name: "self",
        components: {
            Blur,
            Flexbox,
            FlexboxItem,
            Cell,
            Group
        },
        data () {
            return {
                images: [
                    'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
                    'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
                    'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
                ],
                url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
            }
        },
        methods: {
            go () {
                console.log(1)
            }
        }
    }
</script>

<style scoped>
    .center {
        text-align: center;
        padding-top: 20px;
        color: #fff;
        font-size: 18px;
    }
    .center img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 4px solid #ececec;
    }
</style>