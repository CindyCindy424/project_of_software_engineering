import { Button, Card } from 'antd';
import Link from 'next/link';
import { Router } from 'next/router';

import CartStore from '../../mobx/stores/CartStore';

const { Meta } = Card;

export default function BookCard({book,action}){ 
  

  return (

    <Card
        hoverable
        style={{ width: 240 }}
        actions={[action]}
        cover={<Link href='/register'><img alt="example" src={book.image} /></Link>}
    >
          <Link href='/register'>
            <Meta title={
            <>
              <p>{book.name}</p>
              <p>售价：{book.price*book.discount}</p>
              <p>库存:{book.inventory}</p>
            </>
            } {...book} />
          </Link>
    </Card>
  );
  }
