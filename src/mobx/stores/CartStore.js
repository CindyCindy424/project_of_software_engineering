import { observable, computed, action } from 'mobx';

class CartStore {
    rootStore;

    @observable _cart = [];

    @action
    addBook(book){
        this._cart.push(book);
    }


    @action
    removeBook(book){
        this._cart.map((b)=>{
            if(book == b){return;}
            return b;
        })
    }
}