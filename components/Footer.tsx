import Image from "next/image";
import React from "react";
import logo from "@/public/logo2.png";
import image from "@/public/017. Megaphone.png";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import icon from "@/public/Icon (8).png";
import icon2 from "@/public/Icon (9).png";
import icon3 from "@/public/Icon (10).png";

const Footer = () => {
  return (
    <div className="bg-[#292930] text-white py-20">
      <div className="section-wrapper flex flex-col lg:flex-row gap-20">
        <div className="lg:w-4/12 bg-[#3C3C45] p-[50px]">
          <div className="flex flex-col items-center gap-3">
            <Image
              alt={"pricing icon"}
              src={logo}
              className="w-[170px] h-[81.16]"
            />
            <Image alt={"pricing icon"} src={image} />
          </div>
          <h3 className="text-[25px] font-semibold">Subscribe now</h3>
          <p className="text-[18px] font-normal">
            Industrys standard from dummy and make a type book.
          </p>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full bg-[#5B5B61] py-3 px-5 my-5 rounded-md"
          />
          <button className="bg-[#FFDC60] w-full p-3 text-[#292930] rounded-md">
            Subscribe
          </button>
        </div>
        <div className="lg:w-8/12 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row max-sm:gap-10 w-full">
            <div className="sm:w-1/2 flex flex-col justify-between">
              <div className="flex items-center">
                <FiPhone className="text-green-500" />
                <p>Get in touch with</p>
              </div>
              <div className="max-md:my-4">
                <span className="px-5 py-2 rounded-md bg-[#3C3C45] text-[#FFDC60]">
                  +1917 000 1212
                </span>
              </div>
              <p> nextlevel@marketing.com</p>
            </div>
            <div className="sm:w-1/2 flex flex-col justify-between">
              <div className="flex items-center">
                <FiPhone className="text-yellow-500" />
                <p>Location</p>
              </div>
              <p>10 Suna House 65 Rivington Street London EC2A 3QQ</p>
              <Link href="/" className="text-[#FFDC60] underline">
                Location
              </Link>
            </div>
          </div>
          <div className="h-[1px] bg-gray-700 max-lg:my-10" />
          <div className="flex flex-wrap gap-5 justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Image alt={"pricing icon"} src={icon} />
                <h6>Pages</h6>
              </div>
              <ul className="mt-5 flex flex-col gap-5">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Pricing Single</li>
                <li>Contact</li>
                <li>Service</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Image alt={"pricing icon"} src={icon2} />
                <h6>Uitility Pages</h6>
              </div>
              <ul className="mt-5 flex flex-col gap-5">
                <li>Styleguide</li>
                <li>404 Not Found</li>
                <li>Password Protected</li>
                <li>Licenses</li>
                <li>Changelog</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Image alt={"pricing icon"} src={icon3} />
                <h6>Follows</h6>
              </div>
              <ul className="mt-5 flex flex-col gap-5">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="h-[1px] bg-gray-700 max-lg:my-10" />
          <div>
            <p>
              Copyright © Nextlevel | Designed by VictorFlow - Powered by
              Webflow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
