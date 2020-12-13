import { observable } from 'mobx';
const CartStore = observable({
    cart:[{
        name:'概率论',
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        publisher:'同济大学出版社',
        author:'',
        category:['学术','教育'],
        price:'38',
        discount:1,
        secondhand:true,
        ISBN:'1245362789',
        bookAbstract:'???',
        inventory:'15',
        id:'114514',
    }],
    count:0
})
CartStore.isEmpty=function(){
    return this.count == 0;
}
CartStore.add=function(book){
    this.cart.push(book);
}
CartStore.remove=function(book){
    this.cart=[...this.cart.filter((b)=>{b!=book;})]
}

export default CartStore;