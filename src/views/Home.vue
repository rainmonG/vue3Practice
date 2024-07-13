<!--
 * new page
 * @author: rainmonG
 * @since: 2024-07-10
 * Home.vue
-->
<template>
  <div>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card style="min-width: 320px;" shadow="hover">
                <div class="user">
                    <img :src="getImageUrl('user')" class="user"/>
                    <div class="user-info">
                        <p class="user-info-en">Admin</p>
                        <p class="user-info-cn">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2024-07-11</span></p>
                    <p>上次登录地点：<span>武汉</span></p>
                </div>
            </el-card>
            <el-row  class="user-table" >
                <el-text>作者：</el-text>
                <el-select
                    v-model="artists"
                    multiple
                    filterable
                    clearable
                    remote
                    reserve-keyword
                    placeholder="输入作者姓名关键字"
                    remote-show-suffix
                    :remote-method="getArtistsOptions"
                    :loading="loading"
                    collapse-tags
                    :max-collapse-tags="3"
                    style="width: 240px"
                >
                    <template #header>
                    <el-checkbox
                        v-model="checkAll"
                        :indeterminate="indeterminate"
                        @change="handleCheckAll"
                    >
                        全选
                    </el-checkbox>
                    </template>
                    <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item"
                    />
                </el-select>
                <el-button class="button-wrap" type="primary" @click="getAlbums">查询</el-button>
            </el-row>
            <el-card style="min-width: 320px;" shadow="hover" class="user-table">
                <el-table :data="tableData">
                    <el-table-column
                    v-for="(val, key) in tableLabel"
                    :key="key"
                    :prop="key"
                    :label="val">

                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script setup lang="js">
    import {ref, watch, getCurrentInstance} from 'vue'
    import service from '../api/request';
    import { ElMessage } from 'element-plus'

    const {proxy} = getCurrentInstance()

    const getImageUrl = (user) => {
        return new URL(`../assets/images/${user}.png`, import.meta.url).href
    }

    const tableData = ref([])

    const tableLabel = ref({
        "title": '作品',
        "artist": '作者',
        "price": '价格',
    })

    const options = ref([])
    const artists = ref([])
    const loading = ref(false)

    const checkAll = ref(false)
    const indeterminate = ref(false)

    async function getAlbums() {
        const {data} = await proxy.$api.getAlbums(artists.value)
        tableData.value = data
    }

    async function getArtistsOptions(query) {
        if (query) {
            loading.value = true
            const {data} = await proxy.$api.getArtistsOptions(query)
            loading.value = false
            options.value = data
        } else {
            options.value = []
        }
    }

    watch(artists, (val) => {
        if (val.length === 0) {
            checkAll.value = false
            indeterminate.value = false
        } else if (val.length === options.value.length) {
            checkAll.value = true
            indeterminate.value = false
        } else {
            indeterminate.value = true
        }
    })

    const handleCheckAll = (val) => {
    indeterminate.value = false
    if (val) {
        artists.value = options.value
    } else {
        artists.value = []
    }
    }
</script>

<style scoped lang="less">
    .home {
        height: 100%;
        overflow: hidden;
        .user {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
            img {
                width: 150px;
                height: 150px;
                object-fit: cover; 
                object-position: top;//可能有时候图片不是从头部开始截图的 所以需要定位一下
                border-radius: 50%;
                margin-right: 40px;
            }
            .user-info {
                p {
                    line-height: 40px;
                }
                .user-info-en {
                    font-size: 30px;
                    font-weight: bold;
                }
            }
        }
        .login-info {
            p {
                line-height: 30px;
                font-size: 14px;
                color: #999;
                span {
                    color: #666;
                    margin-left: 60px;
                }
            }
        }
        .user-table {
            margin-top: 20px;
            margin-left: 5px;
        }
        .button-wrap {
            margin-left: 10px;
        }
    }
</style>

