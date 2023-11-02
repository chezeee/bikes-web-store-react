import { useState, useContext } from 'react';
import { Context } from '@/context/orders';
import { useSession, signIn } from 'next-auth/react';
import { Button, Input, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

export default function Order({}) {
  const [orders, setOrders] = useContext(Context),
    { data: session, status } = useSession(),
    [name, setName] = useState(session?.user?.name ? session.user.name : ''),
    [email, setEmail] = useState(
      session?.user?.email ? session.user.email : ''
    ),
    [address, setAddress] = useState(''),
    router = useRouter(),
    totalPrice = orders.reduce(
      (total, product) => total + Number(product.totalPrice),
      0
    ),
    totalCount = orders.reduce(
      (total, product) => total + Number(product.count),
      0
    ),
    handleSubmit = async (event) => {
      event.preventDefault();
      const date = new Date();
      let dd = date.getDate(),
        mm = date.getMonth() + 1,
        yy = date.getFullYear() % 100,
        hh = date.getHours(),
        MM = date.getMinutes();
      dd < 10 ? (dd = '0' + dd) : dd;
      mm < 10 ? (mm = '0' + mm) : mm;
      yy < 10 ? (yy = '0' + yy) : yy;
      hh < 10 ? (hh = '0' + hh) : hh;
      MM < 10 ? (MM = '0' + MM) : MM;

      const formattedDate = `${dd}.${mm}.20${yy} ${hh}:${MM}`;
      console.log('Date:', formattedDate);
      try {
        // Send the order data to the server
        const res = await fetch(`http://localhost:5000/orders`, {
          method: 'POST',
          body: JSON.stringify({
            id: nanoid(7),
            date: formattedDate,
            name: name,
            email: email,
            address: address,
            orderContent: orders,
            totalPrice: totalPrice,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          // Order successfully submitted
          alert(`Спасибо за заказ!
          Ваш заказ поступил в обработку!`);
          setOrders([]);
          router.push('/catalog');
        } else {
          // Handle error response
          alert('Error placing order. Please try again.');
        }
      } catch (error) {
        // Handle network error
        alert('Error placing order. Please check your internet connection.');
      }
    };

  if (status === 'loading') {
    return <Spinner size="lg" color="primary" />;
  }

  console.log('session:', session);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        isRequired
      />
      <Input
        type="email"
        label="Электронная почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired
      />
      <Input
        type="text"
        label="Адрес"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        isRequired
      />
      <div>
        В Вашей корзине сейчас товаров: <b>{totalCount} шт.</b> общей стоимостью{' '}
        <b>{totalPrice} ₽</b>
      </div>
      <Button onClick={() => router.push('/cart')}>Назад</Button>
      <Button type="submit">Оформить заказ</Button>
    </form>
  );
}
