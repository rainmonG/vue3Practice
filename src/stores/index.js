import {defineStore} from 'pinia'
import {ref} from 'vue'

function initState() {
  return {
    isCollapse: false
  }
}
export const useAllDataStore = defineStore('allData', () => {
    // ref类似state属性
    // computed类似getters
    // function类似actions

    const state = ref(initState())
  
    return { state }
  })