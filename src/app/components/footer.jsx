import React from "react";
import Image from "next/image";
import "@style/footer.css";
import fb from "@footer_pic/fb.svg";
import x from "@footer_pic/x.svg";
import linkedin from "@footer_pic/linkedin.svg";
function footer() {
  return (
    <nav className="display_old navbar navbar-expand navbar-dark bg-primary-color container-fluid ">
      <ul className="p-2 navbar-nav flex gap-x-4 text-[#ffffff8c] items-center">
        <li className=" ">
          <a href="#" className="hover:text-[#ffffffbf]">
            {" "}
            2024 eCarbon.All right resered
          </a>
        </li>
        <li className="">
          <a href="#" className="hover:text-[#ffffffbf]">
            {" "}
            Privacy Policy Terms of Service
          </a>
        </li>
        <li className="">
          <a href="#" className="hover:text-[#ffffffbf]">
            {" "}
            Cookie Settings{" "}
          </a>
        </li>
        <li className="">
          <a href="#" className="hover:text-[#ffffffbf]">
            {" "}
            <Image src={fb} width={36} height={36} alt="icon" />
            {/* <img src="pic_index/fb.svg" alt="" /> */}
          </a>
        </li>
        <li className="">
          <a href="#" className="hover:text-[#ffffffbf]">
            {" "}
            <Image src={x} width={36} height={36} alt="icon" />
            {/* <img src="pic_index/x.svg" alt="" /> */}
          </a>
        </li>
        <li className="">
          <a href="#" className="hover:text-[#ffffffbf]">
            <Image src={linkedin} width={36} height={36} alt="icon" />
            {/* <img src="pic_index/linkedin.svg" alt="" /> */}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default footer;
