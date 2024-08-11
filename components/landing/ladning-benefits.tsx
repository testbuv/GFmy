
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { User } from "next-auth";

type BenefitsProps = {
  user?: User;
};
export default function Benefits({ user }: BenefitsProps) {
    return (
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 p-8 bg-background">
        <Card className="w-full md:w-[350px] bg-card text-card-foreground rounded-lg p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
              <ImageIcon className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold">High-Quality Images</h2>
            <p className="text-center text-sm text-muted-foreground">
              Our AI generates realistic and detailed images that impress with their quality and accuracy.
            </p>
            <Link href={user ? "/dashboard" : "/sign-in"}>
            <Button variant="link" className="text-primary">
              Generate <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Button>
            </Link>
          </div>
        </Card>
        <Card className="w-full md:w-[350px] bg-card text-card-foreground rounded-lg p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
              <HandIcon className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold">Ease of Use</h2>
            <p className="text-center text-sm text-muted-foreground">
              An intuitive interface allows even beginners to create images quickly and easily, making the generation
              process as convenient as possible.
            </p>
            <Link href={user ? "/dashboard" : "/sign-in"}>
            <Button variant="link" className="text-primary">
              Generate <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Button>
            </Link>
          </div>
        </Card>
        <Card className="w-full md:w-[350px] bg-card text-card-foreground rounded-lg p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
              <ShuffleIcon className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold">Flexibility</h2>
            <p className="text-center text-sm text-muted-foreground">
              Extensive customization options let you create unique images that perfectly match your requirements and
              preferences.
            </p>
            <Link href={user ? "/dashboard" : "/sign-in"}>
            <Button variant="link" className="text-primary">
              Generate <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function HandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  )
}


function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function ShuffleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  )
}