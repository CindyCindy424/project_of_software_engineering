import { observable} from 'mobx';

const TestStore=observable({
    count:0
})
TestStore.Inc=function(){
    this.count++;
}
TestStore.Dec=function(){
    this.count--;
}
TestStore.doubleIt=function(){
    return this.count*2;
}
export default TestStore;

