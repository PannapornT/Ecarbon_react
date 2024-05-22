import React from "react";
import Image from "next/image";
import "@style/nav.css";
import Icon from "@nav_pic/netzero_icon.svg";
// import { useEffect } from "react";

function Nav() {
  // myFunction(() => {
  //   var x = document.getElementById("myLinks");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  // });
  return (
    <div>
      <nav className="bg-primary-color nav-con display_old">
        <div className="text-light fw-bold font_logo_nav">
          <a href="index.html">
            <div className="flex items-center">
              <Image src={Icon} width={72} height={72} alt="icon" />
              eCARBON
            </div>
          </a>
        </div>
        <div className="display_col">
          <ul className="menu font_nav" style={{ "margin-bottom": "0" }}>
            <li className="display_col">
              <a href="product.html">ผลิตภัณฑ์ และบริการ</a>
            </li>
            <li className="text-white display_col ">|</li>
            {/* <li className="display_col font_hide_2"><a href="invest.html">การลงทุน</a></li>
        <li className="text-light display_col font_hide_2">|</li> --> */}
            <li className="display_col font_hide_2">
              <a href="news.html">ข่าวสาร</a>
            </li>
            <li className="text-white display_col font_hide_2">|</li>
            <li className="display_col font_hide">
              <a href="Aboutus.html">เกี่ยวกับเรา</a>
            </li>
            <li className="text-white display_col font_hide">|</li>
            <li className="display_col">
              <a href="Login.html">
                <button className="button_nav">ลงทะเบียน / เข้าใช้งาน</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* // nav mobile */}
      {/* <nav class="bg-primary-color nav-con display_mobile">
        <div class="text-light fw-bold font_logo_nav flex items-center">
          <Image src={Icon} width={72} height={72} alt="icon" />
          eCARBON
        </div>
        <div class="topnav display_col">
          <div class="d-flex justify-content-end">
            <a href="javascript:void(0);" class="icon " onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
          <div id="myLinks">
            <a href="product.html">ผลิตภัณฑ์ และบริการ</a>
            {/* <a href="invest.html">การลงทุน</a>  */}
      {/* <a href="news.html">ข่าวสาร</a>
            <a href="Aboutus.html">เกี่ยวกับเรา</a>
          </div> */}
      {/* </div> */}
      {/* </nav> */}
      {/* finish nav mobile */}
    </div>
  );
}

export default Nav;
