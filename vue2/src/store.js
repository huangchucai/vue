/**
 * Created by huangchucai on 2017/5/20.
 */
const storeMsg =  'todos-vue.js';
export default {
  fetch(){
    return JSON.parse(window.localStorage.getItem(storeMsg||'[]'))
  },
  save(items){
    window.localStorage.setItem(storeMsg,JSON.stringify(items))
  }
}
