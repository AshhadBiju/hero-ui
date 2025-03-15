import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
// import { SparklesCore } from "@/components/UIcomponents/Sparkles";
import { TextGenerateEffect } from "@/components/UIcomponents/TextGenerateEffect";
import { WobbleCard } from "@/components/UIcomponents/WobbleCard2";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div> */}
      <WobbleCard
        className=""
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        {/* <Image
          src="/linear.webp"
          width={1000}
          height={1000}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      <TextGenerateEffect words={words} />
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
      </div>
    </section>
  );
}
