import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <HeroSection />
  );
}

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">{
        "Se nopea, teknisesti täydellinen nettisivu, jota olet odottanut"
      }</h1>
      <p
        className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl mt-6"
        dangerouslySetInnerHTML={{
          __html:
            "Pienyrittäjille ja Startup-yrityksille <strong>huipputason</strong> design, <strong>nopea</strong> toteutus ja hakukoneoptimoitu nettisivu vibekoodaamalla. Ensivedos jo <strong>samana päivänä</strong>.",
        }}
      />
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10 mt-6">
        <RainbowButton className="shadow-2xl">
          {"Sovi ilmainen kartoitus"}
        </RainbowButton>
        <RainbowButton className="shadow-2xl text-black bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]">
          {"Tutustu esimerkkeihin"}
        </RainbowButton>
      </div>
    </section>
  );
}
