// pages/billing.tsx
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Heading } from '@/components/heading';
import { HeadingShell } from '@/components/shell';
import StripePricingTable from '@/components/pricing-table';

const BillingPage: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // If not authenticated and the session status is "unauthenticated", redirect to sign-in
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  // Show loading state while checking session
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadingShell>
        <Heading heading="Billing" subHeading="Purchase tokens for your usage." />
      </HeadingShell>
      <div className="grid ">
        <StripePricingTable />
      </div>
    </>
  );
};

export default BillingPage;
