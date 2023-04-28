## React Stripe.js 

	- React Stripe.js is a thin wrapper around Stripe Elements.
	- We can use Elements with any Stripe product to collect online payments.
	
### Install React Stripe.js and the Stripe.js loader from the npm public registry
	
	npm install --save @stripe/react-stripe-js @stripe/stripe-js
	
	- The loadStripe function asynchronously loads the Stripe.js script and initializes a Stripe object. Pass the returned Promise to Elements.

