import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise)
    {
        /*
         - Make sure to call `loadStripe` outside of a component’s render to avoid
         - recreating the `Stripe` object on every render.
        */ 
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY); 
    }

    return stripePromise;
}//getStripe

export default getStripe;