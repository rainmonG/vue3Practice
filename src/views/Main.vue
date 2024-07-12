<!--
 * new page
 * @author: rainmonG
 * @since: 2024-07-10
 * Main.vue
-->
<template>
  <div class="common-layout">
    <el-container class="lay-container">
        <!-- 左侧自定义组件 -->
        <common-aside />
        <el-container>
            <el-header class="el-header">
                <common-header /> 
            </el-header>
            <el-main class="right-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script setup lang="js">
    import CommonAside from '@/components/CommonAside.vue'
    import CommonHeader from '@/components/CommonHeader.vue'
</script>

<style scoped lang="less">
    .common-layout, .lay-container {
        height: 100vh;
    }
    .el-header {
        background-color: #333;
    }
</style>

