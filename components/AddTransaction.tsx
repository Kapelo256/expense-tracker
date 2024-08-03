'use client';
import addTransaction from '@/app/actions/addTransaction';
import { useRef } from 'react';
import {toast} from 'react-toastify';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const {data, error} = await addTransaction(formData);

    if(error) {
        toast.error(error);
    } else {
        toast.success('Transaction added');  
        formRef.current?.reset();
    }
  };
    
  return (
    <>
      <h3>Ajouter une transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Saisir la transaction...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Le Montant <br /> (dépenses - négatives, entrées + positives)
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Saisir le montant...'
            step='0.01'
          />
        </div>
        <button className='btn'>Ajouter une transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;