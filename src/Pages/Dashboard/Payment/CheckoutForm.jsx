import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
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
        }else{console.log('[paymentMethod]',paymentMethod)}

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
      </form>
    );
};

export default CheckoutForm;