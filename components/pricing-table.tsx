import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': {
        'pricing-table-id'?: string;
        'publishable-key'?: string;
        onCheckoutSessionStarted?: (event: CustomEvent) => void;
      };
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

    const handleCheckoutSessionStarted = async (event: CustomEvent) => {
        const priceId = event.detail.priceId;
        const response = await fetch(`/api/stripe?priceId=${priceId}`);
        const data = await response.json();
        window.location.href = data.url;
    };

    return (
        <div>
            <stripe-pricing-table
                pricing-table-id="prctbl_1OJh6bH2WewsQNa1kvFilGEn"
                publishable-key="pk_test_51LTpiNH2WewsQNa1yQ9Yde3afFnAPxqovufTUtCbyti0xF0EWj9GuvV1eZJV7jE6xgHScYhjc6R1em09od95xjXg008dDvTmdW"
                onCheckoutSessionStarted={handleCheckoutSessionStarted}
            />
        </div>
    );
};

export default StripePricingTable;
