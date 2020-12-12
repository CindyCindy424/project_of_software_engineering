import { observable, computed, action } from 'mobx';

const AddrStore = observable({
    addrList:[],
    count:0,
})
AddrStore.add=function(addr){
    this.count++;
    this.addrList.push(addr);
}
AddrStore.remove=function(addr){
    this.count--;
    this.addrList = [...this.addrList.filter((ad)=>{
        return ad!=addr;
    })]
}
AddrStore.set=function(adL){
    this.addrList=[...adL];
    this.count = this.addrList.length
}
AddrStore.isEmpty=function(){
    return this.count == 0;
}
export default AddrStore;