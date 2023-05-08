/*
  Stripe Elements is a set of prebuilt UI components for building our web checkout flow. 
  It’s available as a feature of Stripe.js, It's a JavaScript library for building payment flows.
  The Payment Element is an embeddable UI component that lets you accept up to 40+ payment methods with a single integration.

  A Checkout Session controls what your customer sees on the payment page such as line items, the order amount and currency, and acceptable payment methods.
*/
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

/*
  Step-2: We are accepting the request and sending in the body
  https://stripe.com/docs/checkout/quickstart
*/
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          // { shipping_rate: process.env.NEXT_PUBLIC_STRIPE_SHIPPING_RATE }
          { shipping_rate: 'shr_1N1QRNSGAcyJDTTFDyLBvNmg' }
        ],
        //looping through items
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/r58g95hz/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'inr',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`, //redirecting to success page
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}