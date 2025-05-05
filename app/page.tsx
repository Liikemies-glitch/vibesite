import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight, PartyPopper } from "lucide-react";

export default function Home() {
  return (
    <HeroSection />
  );
}

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <a
        href="#video-text" // Replace with actual link if available
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-6 border"
      >
        <PartyPopper className="h-4 w-4 mr-2 text-primary" />
        <span className="sm:hidden">Video Text</span>
        <span className="hidden sm:inline">Introducing Video Text</span>
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">{
        "Modernit, huippuoptimoidut verkkosivut tekoälyn voomalla - vain kahdessa viikossa"
      }</h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl mt-6">{
        "Vibekoodaus yhdistää huipputason designin, nopean toteutuksen ja ylivertaisen hakukoneoptimoinnin. Ensivedos jo samana päivänä."
      }</p>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10 mt-6">
        <ShimmerButton className="shadow-2xl" background="black">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
            {"Varaa ilmainen kartoitustapaaminen"}
            <ArrowRight className="ml-1 inline-block h-4 w-4" />
          </span>
        </ShimmerButton>
        <ShimmerButton
          className="shadow-2xl"
          shimmerColor="hsl(var(--primary))" // Use primary color for the second button shimmer
          background="white"
        >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-black dark:to-slate-900/10 lg:text-base">
            {"Tutustu esimerkkeihin"}
            <ArrowRight className="ml-1 inline-block h-4 w-4" />
          </span>
        </ShimmerButton>
      </div>
    </section>
  );
}
