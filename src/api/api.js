// 整个项目API同意管理

import request from "./request";

// 请求首页左侧表格数据

export default {
    
       getArtistsOptions(artist_key='') {
            return request({
                url: `/artists_option/${artist_key}`, 
            });
        },

    getAlbums(conditions) {
        return request({
            url: '/albums_query', 
            method: 'post',
            data: {
                // artists: JSON.stringify(conditions.artists),
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
                // artists: JSON.stringify(artists),
                artists: artists,
            }
        })
    },

}