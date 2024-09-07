// 整个项目API统一管理

import request from "./request";

// 请求首页左侧表格数据

export default {

    getArtistsOptions(artist_key = '') {
        return request({
            url: `/artists_option/${artist_key}`,
        });
    },

    getAlbums(conditions) {
        return request({
            url: '/albums_query',
            method: 'post',
            data: {
                artists: conditions.artists,
                page_index: conditions.page_index,
                page_size: conditions.page_size
            }
        })
    },

    getAlbumsCount(artists) {
        return request({
            url: '/albums_count',
            method: 'post',
            data: {
                artists: artists,
            }
        })
    },

    insertAlbum(info) {
        return request({
            url: '/albums',
            method: 'post',
            data: info
        })
    }
}