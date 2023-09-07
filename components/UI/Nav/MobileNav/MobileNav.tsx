import Link from "next/link";

import { User } from "firebase/auth";
import { motion } from "framer-motion";
import { Menu, ShoppingCart, X } from "lucide-react";
import React from "react";

import FBgLink from "../../Links/FBgLink";
import NBgLink from "../../Links/NBgLink";
import Logo from "../Shared/Logo";
import { Notifications } from "../Shared/Notifications";
import { ProfileOps } from "../Shared/Profile";
import { MobileThemeToggler } from "../Shared/ThemeTogglers";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = ({
  pathname,
  user,
}: {
  pathname: string;
  user: User | null | undefined;
}) => {
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    setClicked(false);
  }, [pathname]);

  return (
    <div className="flex items-center justify-between h-full xl:hidden">
      {user ? (
        <span className="flex items-center md:hidden">
          <ProfileOps />
        </span>
      ) : null}

      <Logo />

      {user ? (
        <span className="grid md:hidden place-items-center">
          <Notifications size={24} />
        </span>
      ) : null}

      <button
        title="Open navigation menu"
        onClick={() => setClicked(true)}
        className="text-black dark:text-white"
      >
        <Menu size={26} />
      </button>

      <motion.div
        initial={{ height: 0 }}
        animate={clicked ? { height: "100dvh" } : { height: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={`z-10 absolute inset-0 bg-white dark:bg-background overflow-hidden`}
      >
        <div className="min-h-[100dvh] flex flex-col gap-8 items-center justify-center relative">
          <div
            className={`absolute flex items-center justify-between w-full px-4 lg:px-8 ${
              user ? "top-3" : "top-4 lg:top-6"
            }`}
          >
            {user ? (
              <span className="flex items-center md:hidden">
                <ProfileOps />
              </span>
            ) : null}

            <Logo />

            {user ? (
              <span className="grid md:hidden place-items-center">
                <Link href={"#"}>
                  <ShoppingCart />
                </Link>
              </span>
            ) : null}

            <button
              title="Close navigation menu"
              onClick={() => setClicked(false)}
              className="text-black dark:text-white"
            >
              <X size={26} />
            </button>
          </div>

          <MobileNavLinks />

          <div className="flex items-center gap-2 xs:flex-col xs:w-full xs:gap-5">
            <FBgLink />

            {!user ? <NBgLink prompt="Log in" href="/login" /> : null}
          </div>

          <MobileThemeToggler
            defaultClass="flex items-center justify-center w-10 aspect-square bg-gray-400 rounded-full absolute bottom-6 minHeight animate-pulse skeleton"
            lightClass="flex items-center justify-center w-10 aspect-square text-xl text-black border absolute bottom-6 minHeight border-black bg-white rounded-full"
            darkClass="flex items-center justify-center w-10 aspect-square text-xl text-white border absolute bottom-6 minHeight rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
