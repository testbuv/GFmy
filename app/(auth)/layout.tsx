import { LandingFooter } from "@/components/landing/landing-footer";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <footer className="mt-6 border-t-2 border-t-gradient-to-r border-t-fixed">
        <div className="container mx-auto">
          <LandingFooter />
        </div>
      </footer>
    </div>
  );
}