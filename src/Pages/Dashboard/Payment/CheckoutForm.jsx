import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const [error,seterror]=useState('')
    const stripe=useStripe();
    const element=useElements();

    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(!stripe || !element){
            return
        }
        const card=element.getElement(CardElement);
        if(card == null){
            return
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card,
        });
        if(error){
            console.log('[error]',error)
            seterror(error.message)
        }else{
            seterror('')
            console.log('[paymentMethod]',paymentMethod)
        }

    }
    return (
        <form className="w-3/5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn m-3" type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className="text-red-500">{error}</p>
      </form>
    );
};

export default CheckoutForm;