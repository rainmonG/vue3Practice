// 整个项目API同意管理

import request from "./request";

// 请求首页左侧表格数据

export default {
    getAlbums(artists) {
        return request({
            url: '/album', 
            method: 'get',
            params: {
                artists: JSON.stringify(artists)
            }
        })
    },

   getArtistsOptions(query) {
        return request({
            url: '/artists', 
            params: {
                artist_key: query
            }
        });
    }

}