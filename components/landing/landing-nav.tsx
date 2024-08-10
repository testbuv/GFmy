import { FunctionComponent } from 'react';
import Link from "next/link";
import { User } from "next-auth";

type LandingNavProps = {
  user?: User;
};

export const LandingNav: FunctionComponent<LandingNavProps> = ({ user }) => {
  return (
    <div className="w-full relative flex flex-row items-center justify-center gap-[140px] text-center text-[37px] text-white font-poppins">
      <div className="flex flex-row items-start justify-start gap-[5px] text-left font-lokanova">
        <img className="w-[41px] relative h-[41px] overflow-hidden shrink-0 object-cover" alt="" src="/logo.png" />
        <div className="w-[197px] relative tracking-[0.03em] uppercase inline-block h-[35px] shrink-0 font-lokanova">GrowthFast</div>    </div>
      <div className="flex flex-row items-center justify-start gap-7 text-3xl">
        <div className="w-[142px] relative flex items-center justify-center h-9 shrink-0">Features</div>
        <div className="w-[136px] relative flex items-center justify-center shrink-0">Pricing</div>
        <div className="w-[100px] relative flex items-center justify-center h-9 shrink-0">About</div>
        <div className="w-[136px] relative flex items-center justify-center h-9 shrink-0">FAQ</div>
      </div>
      <Link href={user ? "/dashboard" : "/sign-in"}>
        <div className="bg-[#981C82] text-white w-32 rounded-[10.14px] h-[43.6px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[6.3px] px-[17.6px] box-border gap-[7px] text-[16.64px]">
          <div className="relative">Generate</div>
          <img className="w-[22.5px] relative h-[19.7px]" alt="" src="/Group 3.svg" />
        </div>
      </Link>
    </div>
  );
};