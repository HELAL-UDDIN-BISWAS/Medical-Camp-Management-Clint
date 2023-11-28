import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise=loadStripe('pk_test_51OFG56CNauCCHpjswzTuGxspOJUO2v6cJAsiQnU5MbDmMdH8IK9Mm8vJQEWa1U6PS9uhz7YxA6zCXrTUYcDCh99300G5tJ7396')
    return (
        <div className='h-screen flex items-center justify-center w-full'>
           <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;