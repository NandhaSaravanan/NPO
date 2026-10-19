import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { howItWorks, closing } from "@content/home";
import { PageHeader } from "@/components/Section";
import { Steps } from "@/components/Steps";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "How it works",
  description: "From application to a live site you own, usually six to ten weeks, and always free.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader title={howItWorks.title} body={`${howItWorks.body} The whole thing is free, start to finish.`} />
      <section className="section texture">
        <div className="container-page">
          <Steps steps={howItWorks.steps} />
        </div>
      </section>
      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
