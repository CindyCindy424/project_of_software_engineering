import { observable, computed, action } from 'mobx';
// 购物车store
class AuthStore {
  rootStore;

  @observable userInfo = null;

  @observable _isLogIn = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.userInfo={}
    this._isLogIn = false;
  }

  // 登录
  @action
  login(userData) {
    this.userInfo = userData;
    this._isLogIn = true;
  }

  @action
  logout(){    
    this._isLogIn = false;
    console.log(this.isLogin)
  }

  @computed get isLogin(){
    if(this._isLogIn == false){
      return false;
    }
    return true;
  }

  @computed get isAllSelected() {
    const allTrue = this.userInfo.every(v => v.isSelected === true);
    if (allTrue) {
      return true;
    }
    return false;
  }

  // 总价格
  @computed get totalMoney() {
    let money = 0;
    this.userInfo.filter(e => e.isSelected === true).forEach(e => {
      money += e.price * e.count;
    });
    return money;
  }
}

export default new AuthStore();