import React from 'react';
import { Metadata } from 'next';
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import {LandingFooter}  from "@/components/landing/landing-footer";

export const metadata: Metadata = {
    title: 'Terms and Conditions',
};

const TermsAndConditions = () => {
    return (
        <>
          <LandingNav />
            <LandingHero />
            <main className="bg-gray-100 text-slate-900 py-12">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6 prose prose-blue">
                    <h1 className="text-3xl font-bold mb-6 border-b pb-3 text-center text-slate-800">TERMS AND CONDITIONS</h1>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">1. BACKGROUND</h2>
                        <p>1.1 These general terms and conditions (the “General Conditions”) apply when you as a consumer (the “Customer”) place an order via www.Printifai.shop and related pages, (the “Website”). The agreement is concluded between you and Company, company reg. no.xxxxx. Detailed contact information and other information about Printifai are set forth on the Website. The General Conditions are only applicable for Customers that are consumers.</p>
                        <p>1.2 The Customer must be minimum 18 years old to order via the Website. Printifai does not, in accordance with Latvian law, accept any credit purchases to persons below 18 years of age. Printifai reserves the right to deny or change a Customer’s order (e.g. if the Customer has provided incorrect personal data and/or has any record for non-payment of debt).</p>
                        <p>1.3 Printifai shall have no liability in case products are sold out, nor for image or typographical errors on the Website, e.g. errors in the product description or technical specification, inaccurate prices and price adjustments (such as changed prices from suppliers, change in currencies) or incorrect information with regards to whether a product is in stock. Printifai is entitled to rectify any such errors and, at any time, to change or update the information. If an inaccurate price has been stated for a product ordered by the Customer, Printifai will naturally notify the Customer accordingly and await the Customer’s approval of the amended price prior to Printifai continuing with the order process. All images on the Website shall be considered solely as illustrations. Such illustrations do not guarantee to reproduce the exact appearance, function or origin of the product.</p>
                        <p>1.4 The Website and all its content is owned by Printifai. The information is protected by intellectual property and marketing legislation. This means that trademarks, company names, product names, images and graphics, design, layout and information about products, services and other content may not be copied or used without the prior written consent of Printifai.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">2. CONTRACTS AND ORDERS</h2>
                        <p>2.1 In order to place an order through the Website, the Customer must accept the General Conditions. By accepting the General Conditions, the Customer undertakes to comply with the General Conditions in its entirety and acknowledges that he/she has read the information on personal data and cookies and consents to the use according to Printifai’s Privacy Policy set forth here.</p>
                        <p>2.2 A purchase agreement is concluded when Printifai has confirmed the Customer’s order and the Customer has received an order confirmation from Printifai via email. Printifai encourages the Customer to save the order confirmation for any future contacts with Printifai’s customer service regarding the order. The Customer is entitled to cancel its order up until it has been confirmed by Printifai.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">3. CUSTOMER INFORMATION.</h2>
                        <p>3.1 When the Customer registers its user account and/or places an order, the Customer will be requested to provide some personal data. The Customer confirms that the information provided is correct and complete and is responsible for any errors in the information provided. Information about Printifai’s processing of personal data is set forth in Printifai’s Privacy Policy, which constitutes an integral part of these General Conditions.</p>
                        <p>3.2 The Customer undertakes to ensure that no one, except the Customer, uses the Customer’s log-in details. The Customer may not disclose its username or password to any person and shall ensure that any documentation with information about username and password is kept in such a way that unauthorised persons may not access the information. The Customer shall notify Printifai without delay if it may be suspected that any unauthorised person has obtained access to the Customer’s password. The Customer is responsible for all purchases made with the Customers log-in details if the Customer has not provided such notification.</p>
                        <p>3.3 If Printifai suspects that the Customer abuses its user account or its log-in details or otherwise violates the General Conditions, Printifai is entitled to block the Customer’s access to its user account. Printifai is furthermore entitled to assign new log-in details to the Customer.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">4. PRICES, FEES AND PAYMENT</h2>
                        <p>The prices stated on the Website apply to orders placed on the Website. All prices are presented in € and do not include payment, which are given separately. 21% VAT is not included in the product price for the EU countries.</p>
                        <p>The Customer can pay for its purchase in the manner specified on the Website. Printifai is entitled to charge the Customer already in connection with the order. Printifai reserves the right not to offer all payment methods at all times, alternatively change payment method if the payment method the Customer has selected does not work, for whichever reasons, at the time of fulfilment of the order. Please note that limitations of available payment methods are set forth on the Website.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">8. DELIVERY AND SHIPPING</h2>
                        <p>Since we offer digital products only, items in stock are normally delivered within the 1 working day set forth on the Website (Usually in a few minutes). If you haven not received your order within the delivery time advertised, please contact our Customer Service no longer than 30 working days after the order was placed.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">9. RIGHT OF WITHDRAWAL</h2>
                        <p>By accepting the General Conditions, the Customer acknowledges and agrees that the right of withdrawal is not valid for any digital content delivered.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">10. FORCE MAJEURE</h2>
                        <p>Printifai is not liable for any delays caused by circumstances beyond Printifai’s control, e.g. technical problems, defects in power- /tele-/computer communications or other communication and defects or delays in the service due to circumstances set forth above. Such circumstances shall result in relief from damages and other measures. If any such situation should arise, Printifai shall inform the Customer accordingly both at the beginning and the end of the period for the current situation.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">13. CHANGES TO THE GENERAL CONDITIONS</h2>
                        <p>Printifai reserves the right to change these General Conditions at all times. Any changes to these General Conditions will be posted on the Website. Changes will become valid once the Customer has accepted the General Conditions (in connection with a new purchase or while browsing the Website), alternatively 30 days after Printifai has informed the Customer of the changes. However, Printifai recommends that the Customer regularly remains updated on the Website in order to become aware of any changes to the General Conditions.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">14. SEVERABILITY</h2>
                        <p>If any provision of this Agreement is held to be invalid or unenforceable by any competent court, authority or arbitral tribunal, the remainder of that provision and all other provisions will remain valid and enforceable to the fullest extent permitted by applicable law. Any provisions determined invalid or unenforceable will be substituted by relevant legal guidance and advice.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">15. APPLICABLE LAW AND DISPUTE RESOLUTIONS</h2>
                        <p>Printifai shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that Printifai.shop are deemed liable to you for breach of this Agreement, you agree that Printifai.shop liability is limited to the amount actually paid by you for your services, which amount calculated in reliance upon this clause. You hereby release Printifai from any and all obligations, liabilities and claims in excess of this limitation.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">14. DISCLAIMER AND WARRANTIES</h2>
                        <p>OUR SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. YOUR USE OF OUR SERVICES IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR SERVICES ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US OR THROUGH OUR SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT LIMITING THE FOREGOING, WE, OUR SUBSIDIARIES, OUR AFFILIATES, AND OUR LICENSORS DO NOT WARRANT THAT THE CONTENT ON OUR SERVICES IS ACCURATE, RELIABLE, OR CORRECT; THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS; THAT OUR SERVICES WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT OUR SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA THAT RESULTS FROM YOUR USE OF OUR SERVICES OR ANY DOWNLOAD OF CONTENT THROUGH THE USE OF OUR SERVICES. YOU MAY HAVE OTHER STATUTORY RIGHTS, BUT THE DURATION OF STATUTORILY REQUIRED WARRANTIES, IF ANY, WILL BE LIMITED TO THE SHORTEST PERIOD PERMITTED BY LAW.</p>
                        <p>The content provided through or in connection with OUR Services is designed to provide practical and useful information on the subject matter covered. WHILE SUCH CONTENT MAY CONCERN ISSUES RELATED TO PROFESSIONAL SERVICES, SUCH CONTENT IS NOT PROFESSIONAL SERVICES ADVICE. YOU SHOULD NOT ACT OR REFRAIN FROM ACTING ON THE BASIS OF ANY CONTENT INCLUDED ON THIS SITE OR IN CONNECTION WITH OUR SERVICES WITHOUT SEEKING THE ADVICE OF A COMPETENT PROFESSIONAL IN THE APPLICABLE SUBJECT MATTER. We EXPRESSLY DISCLAIM ALL LIABILITY IN RESPECT OF ACTIONS TAKEN OR NOT TAKEN BASED ON ANY CONTENT OF OR IN CONNECTION WITH OUR SERVICES.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">15. APPLICABLE LAW AND DISPUTE RESOLUTIONS</h2>
                        <p>Printifai shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that Printifai.shop is deemed liable to you for breach of this Agreement, you agree that Printifai.shop's liability is limited to the amount actually paid by you for your services, calculated in reliance upon this clause. You hereby release Printifai from any and all obligations, liabilities, and claims in excess of this limitation.</p>
                    </section>
                </div>
            </main>
            <section className="mx-auto mt-6 max-w-screen-xl">
                <LandingFooter />
            </section>
        </>
    );
};

export default TermsAndConditions;
