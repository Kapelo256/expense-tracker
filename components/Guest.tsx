import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='guest'>
      <h1>Bonjour</h1>
      <p>SVP veulliez faire votre signature pour gerer vos transactions</p>
      <SignInButton />
    </div>
  );
};

export default Guest;