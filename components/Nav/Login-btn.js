import { Button } from '@nextui-org/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Login() {
  const { data: session, status } = useSession();
  if ('loading' === status) {
    return <button></button>;
  }
  if (session) {
    return (
      <>
        {session?.user?.image && (
          <Image
            src={session?.user?.image || ''}
            width={32}
            height={32}
            alt="Login user avatar image"
          ></Image>
        )}
        Signed in as {session?.user?.name} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}
