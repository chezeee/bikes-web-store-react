import { Button } from '@nextui-org/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

import css from './Login-button.module.css';

export default function Login() {
  const { data: session, status } = useSession();
  if ('loading' === status) {
    return <button></button>;
  }
  if (session) {
    return (
      <div className={css.loginProfile}>
        {session?.user?.image && (
          <Image
            src={session?.user?.image || ''}
            width={32}
            height={32}
            alt="Login user avatar image"
          ></Image>
        )}
        {session?.user?.name} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return (
    <div className={css.loginProfile}>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  );
}
