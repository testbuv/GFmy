import * as React from "react";
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
  } from "@react-email/components";

interface OrderConfirmationEmailProps {
  purchaseId: string;
  amountPaid: number; // Amount paid from the Stripe session
  creditAmount: number;
  createdAt: string; // Format as needed
}

export const OrderConfirmationEmail = ({ purchaseId, amountPaid, creditAmount, createdAt }: OrderConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Your order confirmation from Growth Fast.io</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank you for your order!</Heading>
        <Text style={text}>
          Your order ID: {purchaseId}
        </Text>
        <Text style={text}>
          Amount Paid: €{amountPaid.toFixed(2)}
        </Text>
        <Text style={text}>
          Credits available: €{creditAmount.toFixed(2)}
        </Text>
        <Text style={text}>
          Order Date: {new Date(createdAt).toLocaleDateString("en-US")}
        </Text>
        <Text style={text}>
          If you have any questions, please contact us at hello@growthfast.io.
        </Text>
      </Container>
    </Body>
  </Html>

);
const main = {
    backgroundColor: "#ffffff",
  };
  
  const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
  };
  

  
  const text = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
  };
  