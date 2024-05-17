import React from "react";
import Image from "next/image";
import "@style/nav.css";
import Icon from "@nav_pic/netzero_icon.svg";
function Nav() {
  return (
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
  );
}

export default Nav;
