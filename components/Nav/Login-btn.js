import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, User } from '@nextui-org/react';
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
    return <button></button>;
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
            <Button onClick={() => signOut()}>Sign out</Button>
          </div>
        </PopoverContent>
      </Popover>
      // <div className={css.loginProfile}>
      //   <User
      //     name={session?.user?.name}
      //     avatarProps={{
      //       src: `${session?.user?.image || ''}`,
      //     }}
      //   />
      //
      // </div>
    );
  }
  return (
    <div className={css.loginProfile}>
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  );
}
