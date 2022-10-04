import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createOrGetUser } from "../utils";
import Logo from "../utils/toktok-logo.png";

const Navbar = () => {
  const user = false;

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Toktok logo"
            layout="responsive"
          />
        </div>
      </Link>

      <div>SEARCH</div>

      <div>
        {user ? (
          <div>Logged In </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => {
              createOrGetUser(response);
            }}
            onError={() => {
              console.log("error");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
