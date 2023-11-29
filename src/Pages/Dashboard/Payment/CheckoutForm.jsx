import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure ";
import useTenstak from "../../../Hooks/useTenstak";
import { useContext } from "react";
import { AuthContext } from "../../../Shared/Provider/Provider";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [transactionId, settransactionId] = useState('')
  const [error, seterror] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const element = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useTenstak();
  const totalPrice = cart.reduce((total, item) => total + parseInt(item.price), 0);
  console.log(totalPrice)
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: totalPrice })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
  }, [axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !element) {
      return
    }
    const card = element.getElement(CardElement);
    if (card == null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error)
      seterror(error.message)
    } else {
      seterror('')
      console.log('[paymentMethod]', paymentMethod)
    }

    //confim messege
    const { paymentIntent, error: confimError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user.email || 'anonymous',
          name: user.displayName || 'anonymous'
        }
      }
    })
    if (confimError) {
      console.log('confirm error')
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id)
        settransactionId(paymentIntent.id)
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          status: 'pending'
        }

        const res = await axiosSecure.post('/payments', payment);
        console.log('payment saved', res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you payment",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymentHistory')
        }

      }
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
      <button className="btn m-3" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      <p>{transactionId}</p>
    </form>
  );
};

export default CheckoutForm;