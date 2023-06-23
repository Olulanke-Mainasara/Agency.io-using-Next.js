"use client";

import Hero from "@/components/Home-Page/Hero";
import Section1 from "@/components/Home-Page/Section1";
import Section2 from "@/components/Home-Page/Section2";
import Splash from "@/components/UI/Splash/Splash";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme");

  useEffect(() => {
    if (!theme) {
      const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

      if (matchMedia.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }

    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Splash />
      <Hero />
      <main className="w-screen">
        <Section1 />
        <Section2 />
      </main>
    </>
  );
}