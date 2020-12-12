import { observable } from 'mobx';
// 购物车store
const AuthStore = observable({
  userInfo:{},
  isLog:false,
})
AuthStore.Login=function(info){
  this.isLog=true;
  this.userInfo = {...info};
}
AuthStore.LogOut=function(){
  this.userInfo={};
  this.isLog = false;
}
AuthStore.isLogin=function(){
  return this.isLog;
}
export default AuthStore;
// @computed get sessionId() {
//   return this.userInfo.sessionId;
// }
