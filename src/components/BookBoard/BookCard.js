import { Button, Card } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

export default function BookCard(){ 
  
  const addCart=()=>{
    
  }

  return (
  <Link href='/register'>
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <Button
        >加入购物车</Button>
    </Card>
  </Link>);
  }
