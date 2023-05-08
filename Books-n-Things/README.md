# Books-n-Things

I built and deployed a fully responsive Books-n-Things e-commerce application, which allows users to purchase books online using payment methods using Sanity and Stripe.

![Books-n-Things](https://user-images.githubusercontent.com/34181144/235346423-f63bd2ae-622d-4194-9e87-4247bf695674.gif)

# References

## Stripe

Checkout Payment - https://stripe.com/docs/checkout/quickstart

## CSS

### ::-webkit-scrollbar - https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar

- It's a CSS pseudo-element, "customized" scrollbar.
- Only available in Chrome, Edge, Opera, Safari.
- It's visible only if width/height is specified.

	<code>
		::-webkit-scrollbar {
		  width: 0px;  /* width 0px because, we don't want to display scroll bar but want to scroll*/
		}
	</code>
---

### color: inherit; 

- should inherit its color value from its parent element

---

### max-width - https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

- Sets the maximum width of an element.
- max-width overrides width.

	<code>
		width: 100%; 
		max-width:50%; //max-width overrides width
	</code>
	


