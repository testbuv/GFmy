import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="mb-8 text-3xl font-bold">Plans & billing</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="w-full relative rounded-[73px] bg-glass-gradient border-glass border-[1px] border-solid box-border h-[509px] flex flex-col items-center justify-between p-8 md:flex-row">
          <Card>
            <CardHeader className="text-center">
              <div className="text-4xl font-bold">$19</div>
              <div className="text-lg">Per Month</div>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Access to All Features
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  AI Templates
                </li>
                <li className="flex items-center">
                  <XIcon className="w-4 h-4 mr-2 text-red-500" />
                  GPT-4 Integration
                </li>
                <li className="flex items-center">
                  <XIcon className="w-4 h-4 mr-2 text-red-500" />
                  Stable Diffusion
                </li>
                <li className="flex items-center">
                  <XIcon className="w-4 h-4 mr-2 text-red-500" />
                  Text to Video
                </li>
              </ul>
              <Button className="w-full mt-6 bg-plum-800 text-white hover:bg-plum-600">
                Start free 14-day Trial</Button>
              <div className="mt-2 text-center text-sm text-gray-400">No credit card required</div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full relative rounded-[73px] bg-glass-gradient border-glass border-[1px] border-solid box-border h-[509px] flex flex-col items-center justify-between p-8 md:flex-row">
          <Card>
            <CardHeader className="text-center">
              <div className="text-4xl font-bold">$49</div>
              <div className="text-lg">Per Month</div>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Access to All Features
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  AI Templates
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  GPT-4 Integration
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Stable Diffusion
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Text to Video
                </li>
                <li className="flex items-center">
                  <XIcon className="w-4 h-4 mr-2 text-red-500" />
                  Edit Videos
                </li>
              </ul>
              <Button className="w-full mt-6 bg-plum-800 text-white hover:bg-plum-600">
                Start free 14-day Trial</Button>
              <div className="mt-2 text-center text-sm text-gray-400">No credit card required</div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full relative rounded-[73px] bg-glass-gradient border-glass border-[1px] border-solid box-border h-[509px] flex flex-col items-center justify-between p-8 md:flex-row">
          <Card>
            <CardHeader className="text-center">
              <div className="text-4xl font-bold">$99</div>
              <div className="text-lg">Per Month</div>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Access to All Features
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  AI Templates
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  GPT-4 Integration
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Stable Diffusion
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Text to Video
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  Edit Videos
                </li>
              </ul>
              <Button className="w-full mt-6 bg-plum-800 text-white hover:bg-plum-600">
                Start free 14-day Trial</Button>
              <div className="mt-2 text-center text-sm text-gray-400">No credit card required</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// ...

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}

function CheckIcon(props: CheckIconProps) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

interface XIconProps extends React.SVGProps<SVGSVGElement> {}

function XIcon(props: XIconProps) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}