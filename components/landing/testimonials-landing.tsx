import React from "react";
import Image from "next/image";

export const LandingTestimonials = () => {
  return (
    <div className="text-center text-primary-foreground">
      <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Image src="/avatar1.png" alt="Avatar" width={80} height={80} className="rounded-full mx-auto mb-4" />
          <p className="text-primary-foreground mb-4">
            &quot;As a junior designer, Growth Fast.io has been a game-changer for me. The AI-powered tools have saved me countless hours and helped me deliver professional-quality designs to my clients in record time.&quot;
          </p>
          <p className="font-semibold">Marc Jacobs</p>
          <p className="text-muted-foreground">Junior Designer</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Image src="/avatar2.png" alt="Avatar" width={80} height={80} className="rounded-full mx-auto mb-4" />
          <p className="text-primary-foreground mb-4">
            &quot;I run a small business and have no design skills, but Growth Fast.io has made it incredibly easy for me to create stunning visuals for my marketing campaigns. The background removal and upscaling features are a lifesaver!&quot;
          </p>
          <p className="font-semibold">Jane Southfield</p>
          <p className="text-muted-foreground">Business Owner</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Image src="/avatar3.png" alt="Avatar" width={80} height={80} className="rounded-full mx-auto mb-4" />
          <p className="text-primary-foreground mb-4">
            &quot;Growth Fast.io has revolutionized my design workflow. The AI-generated designs are a great starting point, and the ability to quickly upscale and remove backgrounds has significantly reduced my time to market.&quot;
          </p>
          <p className="font-semibold">Mark Diaz</p>
          <p className="text-muted-foreground">Designer</p>
        </div>
      </div>
    </div>
  );
};