<template>
    <div>
        <XHeader style="background-color:#000;" title="首页" :left-options="{showBack: false}"></XHeader>
        <div style="padding-bottom: 60px;">
            <router-view></router-view>
        </div>
        <tabbar style="position: fixed;">
            <tabbar-item link="/home" selected>
                <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
                <span slot="label">index</span>
            </tabbar-item>
            <tabbar-item show-dot link="/home/love">
                <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
                <span slot="label">love</span>
            </tabbar-item>
            <tabbar-item link="/home/self">
                <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
                <span slot="label">self</span>
            </tabbar-item>
            <tabbar-item badge="2" link="/home/more">
                <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
                <span slot="label">more</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import { XHeader, Tabbar, TabbarItem, Icon } from 'vux'

    export default {
        name: "home",
        data () {
            return {

            }
        },
        components: {
            XHeader,
            Tabbar,
            TabbarItem
        }
    }
</script>

<style scoped lang="less">
.btn-group{

}
</style>