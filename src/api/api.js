// 整个项目API同意管理

import request from "./request";

// 请求首页左侧表格数据

export default {
    
       getArtistsOptions(query) {
            return request({
                url: '/artists_option', 
                params: {
                    artist_key: query
                }
            });
        },

    getAlbums(conditions) {
        return request({
            url: '/albums', 
            method: 'get',
            params: {
                artists: JSON.stringify(conditions.artists),
                page_index: conditions.page_index,
                page_size: conditions.page_size
            }
        })
    },

    getAlbumsCount(artists) {
        return request({
            url: '/albums_count', 
            method: 'get',
            params: {
                artists: JSON.stringify(artists)
            }
        })
    },

}