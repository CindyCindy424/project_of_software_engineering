import {observable} from 'mobx';
import { inject, Observer, observer } from 'mobx-react';
import React,{ReactDOM} from 'react';
import {Button} from 'antd';
import TestStore from '../src/mobx/stores/TestStore';

const TestCounter = observer(()=>{
    return(
    <div>
        <Button onClick={()=>{
            TestStore.count+=1;
        }}>?</Button>
        {TestStore.doubleIt()}
    </div>);
})
export default TestCounter;


