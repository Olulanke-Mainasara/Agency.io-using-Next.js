import Link from "next/link";

import React from "react";
import { FaPlane } from "react-icons/fa";

const Logo = () => {
  return (
    <Link href="/" className={`flex items-center text-2xl`}>
      Agency
      <span className="text-brandDark dark:text-brandLight">.io</span>
      &nbsp;
      <FaPlane />
    </Link>
  );
};

export default Logo;
