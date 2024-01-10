<template>
    <el-container>
        <el-aside width="200px" style="background-color: white">
            <!-- 侧边栏菜单区域 -->
            <el-menu :collapse-transition="false" router mode="vertical" :default-active="$route.path"
                     @select="handleSelect" style="background: white; height: 100%">
                <el-menu-item index="#" :disabled="true">
                    <i class="el-icon-s-home"></i>
                    <span>Home</span>
                </el-menu-item>
                <el-menu-item index="/qa">
                  <i class="el-icon-files"></i>
                  <span>测试</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            show_log: false
        }
    },
    created() {
    },
    methods: {
        showOrHideLog() {
            this.show_log = true
        },
        handleSelect (data) {
            this.$router.push({ path: data })
        }
    }
}
</script>

<style lang="less" scoped>
</style>
