import React from "react";
import Link from "next/link";
import { User } from "firebase/auth";
import { ArrowRight, ShoppingCart } from "lucide-react";

import { DesktopThemeToggler } from "../../Buttons/ThemeTogglers";
import { Button } from "../../ShadUI/button";
import Logo from "../Shared/Logo";
import { Notifications } from "../Shared/Notifications";
import { ProfileOps } from "../Shared/Profile";
import { DesktopNavLinks } from "./DesktopNavLinks";

const DesktopNav = ({
  pathname,
  user,
}: {
  pathname: string;
  user: User | null | undefined;
}) => {
  return (
    <div className="items-center justify-between hidden h-full xl:flex">
      <Logo pathname={pathname} />

      <DesktopNavLinks />

      <div className="items-center hidden gap-6 md:flex">
        {user === undefined ? (
          <div className="h-12 w-[203px] animate-pulse bg-gray-400"></div>
        ) : (
          <>
            {user ? (
              <>
                <Notifications size={20} />

                <ProfileOps />

                <Link href={"/cart"} prefetch={false}>
                  <ShoppingCart />
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  href={`/signup?previous=${pathname}`}
                  className="duration-300 w-fit hover:text-brandDark dark:text-white dark:hover:text-brandLight xl:flex"
                >
                  Signup
                </Link>

                <Button className="gap-1 p-0 text-base" variant={"plain"}>
                  <Link
                    href={`/login?previous=${pathname}`}
                    className="flex items-center justify-center gap-1 px-6 py-2"
                  >
                    Log in
                    <span className="text-brandLight dark:text-brandDark">
                      <ArrowRight size={20} />
                    </span>
                  </Link>
                </Button>
              </div>
            )}
          </>
        )}

        <p>EN | USD</p>

        <DesktopThemeToggler />
      </div>
    </div>
  );
};

export default DesktopNav;
