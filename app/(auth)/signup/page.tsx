import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaleTourist2 from "@/public/Auth/maleTourist2.webp";
import { FaPlane } from "react-icons/fa";

import { MobileThemeToggler } from "@/components/UI/Buttons/ThemeTogglers";
import BackLink from "@/components/UI/Links/BackLink";
import { Button } from "@/components/UI/ShadUI/button";

import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Agency.io | Sign up",
  description:
    "Start your adventure. Enter your details to embark on an unforgettable journey.",
};

export const runtime = "edge";

export default function Page({ searchParams }: { searchParams: any }) {
  const previous = searchParams.previous;

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full text-white lg:block">
          <div className="absolute inset-0 z-10 flex flex-col p-10 backdrop-brightness-[60%]">
            <Link
              href={`/?splashed=true`}
              className="relative z-20 flex items-center text-3xl"
            >
              Agency<span className="text-brandLight">.io</span>&nbsp;
              <FaPlane />
            </Link>

            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;I can&apos;t imagine planning my trips without this
                  incredible app. It has revolutionized the way I explore new
                  destinations and helped me discover hidden gems around the
                  world.&rdquo;
                </p>
                <footer className="text-sm">Alexandra Rodriguez</footer>
              </blockquote>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src={MaleTourist2}
              placeholder="blur"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Male Tourist"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative w-full h-full px-6 grid place-items-center">
          <div className="absolute flex items-center justify-between w-full px-4 top-4 md:top-8 lg:px-8">
            <BackLink />

            <MobileThemeToggler
              defaultClass="w-10 aspect-square text-xl grid place-items-center bg-gray-400 rounded-full animate-pulse skeleton"
              lightClass="w-10 aspect-square border text-xl grid place-items-center rounded-full border-black text-black"
              darkClass="w-10 aspect-square border text-xl grid place-items-center rounded-full text-white"
            />

            <Button className="rounded-full">
              <Link href={`/login${previous ? `?previous=${previous}` : ""}`}>
                Log in
              </Link>
            </Button>
          </div>

          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex flex-col text-center space-y-2">
                <h1 className="text-2xl tracking-tight sm:text-4xl">
                  Start Your Adventure
                </h1>
                <p className="text-md text-muted-foreground">
                  Enter your details below to embark on an unforgettable journey
                </p>
              </div>

              <SignupForm previous={previous} />

              <p className="px-8 text-sm text-center text-muted-foreground">
                By clicking Sign up, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline hover:text-primary underline-offset-4"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-primary underline-offset-4"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
