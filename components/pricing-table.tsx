import React, { useEffect } from 'react';

// If using TypeScript, add the following snippet to your file as well.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const StripePricingTable = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/pricing-table.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <stripe-pricing-table
                pricing-table-id="prctbl_1OJh6bH2WewsQNa1kvFilGEn"
                publishable-key="pk_test_51LTpiNH2WewsQNa1yQ9Yde3afFnAPxqovufTUtCbyti0xF0EWj9GuvV1eZJV7jE6xgHScYhjc6R1em09od95xjXg008dDvTmdW">
            </stripe-pricing-table>
        </div>
    );
};

export default StripePricingTable;
