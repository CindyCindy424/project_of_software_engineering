import { observable, computed, action } from 'mobx';

class OrderStore{
    rootStore;
    
    @observable _orders=[];

    constructor(rootStore){
        this.rootStore = rootStore;
        this._orders = []
    }

    @action
    put(order){
        this._orders.push(order);
    }

    @action
    delete(order){
        this._orders.map((or)=>{
            if(or == order){
                return;
            }
            else{
                return or;
            }
        })
    }

    @computed get isEmpty(){
        if(this._orders.length != 0){
            return false;
        }
        return true;
    }
}

export default new OrderStore();