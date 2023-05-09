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


		::-webkit-scrollbar {
		  width: 0px;  /* width 0px because, we don't want to display scroll bar but want to scroll*/
		}

---

### color: inherit; 

- should inherit its color value from its parent element

---

### max-width - https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

- Sets the maximum width of an element.
- max-width overrides width.


		width: 100%; 
		max-width:50%; //max-width overrides width
	
---

### margin : auto

- horizontally center the element within its container.
- the browser calculates the margin.

---

### display : flex

- this display all divs in the container in one row ___

### justify-content - aligns items in horizontal

### CSS position:

- The position CSS property sets how an element is positioned in a document. 
- The top, right, bottom, and left properties determine the final location of positioned elements.

	### relative
	- The offset(top/bottom/left/right) does not affect the position of any other elements unlike absolute.
	- the space given for the element in the page layout is the same as if position were static.
	
	
			position: relative;
	
	
	### absolute
	- The offset(top/bottom/left/right) does affect the position of any other elements.
	
	
			position: relative;
	
---
### white-space - https://developer.mozilla.org/en-US/docs/Web/CSS/white-space

- sets how white space inside an element is handled.
	
		white-space: normal; //fits within the container
		white-space: nowrap; //Collapses white space 

---	
### will-change: transform;

- hints to browsers how an element is expected to change

---
### animation

- The animation shorthand CSS property applies an animation between styles.
- animation-name | animation-duration | animation-timing-func | animation-delay
- To get an animation to work, you must bind the animation to an element.

	### The @keyframes Rule
	
	- When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to    the new style at certain times.
	
	- the keywords "from" and "to" (which represents 0% (start) and 100% (complete)).

	
	### animation-duration
	
	- animation-duration property defines how long an animation should take to complete.
	
		@keyframes marquee {
		  from { transform: translateX(0); }
		  to { transform: translateX(-50%); }
		}

		p
		{
			animation: marquee 15s linear infinite;
		}
---

### -webkit-text-stroke - https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke

- The -webkit-text-stroke CSS property specifies the width and color of strokes for text characters.

		
		-webkit-text-stroke: 4px navy; /* Width and color values */
		
---

### transform()


- The transform CSS property lets you rotate, scale, skew, or translate an element.


### translate - The translate property allows you to change the position of elements.

            transform:translate(x-axis, y-axis, z-axis);


### rotate() - defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it.

             transform:rotate(degree);



