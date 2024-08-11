import React from 'react';
import { Metadata } from 'next';
import  Hero  from "@/components/landing/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingFooter } from "@/components/landing/landing-footer";

export const metadata: Metadata = {
    title: 'Privacy Policy',
};

const PrivacyPolicy = () => {
    return (
        <>
            <LandingNav />
            <Hero />
            <main className="bg-gray-100 text-slate-900 py-12">
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6 prose prose-blue">
             <h1 className="text-3xl font-bold mb-6 border-b pb-3 text-center text-slate-800">PRIVACY POLICY</h1>

                    <p>Last updated: January 5, 2024</p>
                    <p>This Privacy Policy describes how growthfast.io. collects and uses the information, which may include personal data, you provide on our website. This policy applies to customers, employees, representatives, or others acting on behalf of parties to whom growthfast.io provides services. We act in our customers’ interest and are transparent about the processing of personal data. “Personal data” refers to any information relating to an identifiable individual or their personal identity.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Consent</h2>
                    <p>By subscribing to our services or filling in a contact form on our site, you consent to our collection, processing, storage, and use of your submitted personal data, as outlined in this policy. You retain the right to have your personal data rectified and/or erased.</p>

                    <h2>Data Collection</h2>
                    <p>We collect various types of information, some of which may be personal data, to provide and improve our services:</p>
                    <ul>
                        <li>Contact details such as your name, email address, physical address, workplace, job position, and telephone number.</li>
                        <li>Financial information for payment purposes, including billing details and credit card numbers.</li>
                        <li>Written communications for service improvement and quality control.</li>
                    </ul>
                    <p>We also collect certain data automatically when you use our services, such as IP addresses, browser types, subscription status, and data stored in user storage. This may include the use of cookies.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Data Processing Purposes</h2>
                    <p>The data we collect is used for various purposes including service registration, administration, customer support, marketing, analytics, security, legal, and compliance.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Data Sharing</h2>
                    <p>We share your information with third parties as needed to provide our services, process payments, comply with legal requirements, or with your consent. We do not sell or rent your personal data.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Third-Party Data</h2>
                    <p>growthfast.io captures and stores information about end-users, such as IP addresses and data submitted via our API. We do not sell, share, or rent out this data.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Data Security</h2>
                    <p>We prioritize the security and integrity of your personal data and implement appropriate measures to prevent unauthorized access and misuse.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Data Retention</h2>
                    <p>Your data is retained as necessary to provide services, comply with legal obligations, and for our business operations.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Your Choices and Rights</h2>
                    <p>You have control over your personal data, including access, correction, erasure, and the right to object to certain processing activities.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Cookies and Tracking</h2>
                    <p>We use cookies to improve and personalize our site and services. You have control over the use of cookies through your browser settings.</p>

                    <h2 className="text-2xl font-semibold text-slate-800">Privacy Policy Changes</h2>
                    <p>This policy may be updated periodically. Material changes will be communicated via our website or email.</p>
                    
                    <h2 className="text-2xl font-semibold text-slate-800">Contact</h2>
                    <p>For any privacy-related inquiries or complaints, please contact us at hello@growthfast.io</p>
                </div>
            </main> 
            <section className="mx-auto mt-6 max-w-screen-xl">
                <LandingFooter />
            </section>
        </>
    );
};

export default PrivacyPolicy;
