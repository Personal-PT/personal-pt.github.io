import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <h1 className="max-w-4xl text-3xl font-black md:text-5xl lg:text-6xl">
          <span className="text-yellow-700">PersonalPT</span>: Your AI
          <br />
          <span className=" text-blue-500">Personal Trainer</span>
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-800 sm:text-2xl">
          <span className="font-semibold">PersonalPT</span> is an AI-powered
          platform that provides real-time feedback on exercise performance by
          comparing user movements against a machine learning model trained on
          expert data, helping users improve their form and technique.
        </p>
      </MaxWidthWrapper>

      {/* Value Prop */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-foreground to-secondary-foreground opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div className="mx-auto flex w-full max-w-6xl justify-center px-6 lg:px-8">
            <div className="mt-8 flow-root w-full sm:mt-16">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <iframe
                  src="/demo.mp4"
                  className="h-auto w-full rounded-md bg-special shadow-2xl ring-1 ring-gray-900/10"
                  style={{ aspectRatio: "16/9" }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-primary-foreground to-secondary-foreground opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      {/* <MaxWidthWrapper>
        
      </MaxWidthWrapper> */}

      <Footer />
    </>
  );
}
