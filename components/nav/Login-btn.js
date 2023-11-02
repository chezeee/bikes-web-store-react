import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, Spinner } from '@nextui-org/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from '@nextui-org/react';

import css from './Login-button.module.css';

export default function Login() {
  const { data: session, status } = useSession();
  if ('loading' === status) {
    return <Spinner size="lg" color="primary" />;
  }
  if (session) {
    return (
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <Avatar isBordered color="primary" src={session?.user?.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <h2>{session?.user?.name}</h2>
            <Button onClick={() => signOut()}>Выйти</Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
  return (
    <div className={css.loginProfile}>
      <Button onClick={() => signIn()}>Войти</Button>
    </div>
  );
}
