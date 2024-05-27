"use client";

import React from "react";
import Image from "next/image";
import "@style/news.css";
import news2 from "@news_pic/new2_hori.svg";
import news1 from "@news_pic/2nd_news1.jpg";

function Page() {
  function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "inline") {
      btnText.innerHTML = "ดูเพิ่มเติม";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "ดูน้อยลง";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");

    if (moreText2.style.display === "inline") {
      btnText2.innerHTML = "ดูเพิ่มเติม";
      moreText2.style.display = "none";
    } else {
      btnText2.innerHTML = "ดูน้อยลง";
      moreText2.style.display = "inline";
    }
  }
  return (
    <div className="flex w-full justify-center">
      <div className="w-[90%] flex justify-center">
        <div className="mt-3 mb-3 flex-1 ">
          <div className="font_head font-bold">
            ข่าวสาร eCARBON
            <br />
          </div>
          <div className="container col6">
            <div className="grid grid-cols-3 mt-3 p-0 gap-4">
              <div className="p-0">
                <div className="box_news">
                  <div>
                    <Image
                      src={news1}
                      width={72}
                      height={72}
                      alt="news1"
                      className="img-fluid border_img"
                    />
                    <div className="margin_text_news font_normal">
                      กลุ่มมิตรผลเดินหน้ารับซื้อใบอ้อยเพื่อเปลี่ยนเป็นพลังงานทดแทน
                      หลังเป็นผู้บุกเบิกต่อเนื่องมากว่า 6 ปี
                      พร้อมส่งเสริมการตัดอ้อยสดคุณภาพดีตลอดฤดูหีบ 66/67
                    </div>
                  </div>
                  <div className="flex_news margin_read">
                    <a href="news1" className="read font-bold font_read">
                      อ่านต่อ
                    </a>
                  </div>
                </div>
              </div>
              <div className=" p-0">
                <div className="box_news">
                  <div>
                    <Image
                      src={news2}
                      width={72}
                      height={72}
                      alt="news2"
                      className="img-fluid border_img"
                    />
                    <div className="margin_text_news font_normal">
                      มิตรผล ประกาศรับซื้อใบอ้อยสดหลังตัด ผลิตไฟฟ้าชีวมวล
                      สู้สุดใจไปด้วยกัน ตัดอ้อยสดลดฝุ่น PM2.5
                    </div>
                  </div>
                  <div className="flex_news margin_read">
                    <a href="news2" className="read font-bold font_read">
                      อ่านต่อ
                    </a>
                  </div>
                </div>
              </div>
              <div className=" p-0">
                <div className="box_news">
                  <div>
                    <Image
                      src={news1}
                      width={72}
                      height={72}
                      alt="news1"
                      className="img-fluid border_img"
                    />
                    <div className="margin_text_news font_normal">
                      กลุ่มมิตรผลเดินหน้ารับซื้อใบอ้อยเพื่อเปลี่ยนเป็นพลังงานทดแทน
                      หลังเป็นผู้บุกเบิกต่อเนื่องมากว่า 6 ปี
                      พร้อมส่งเสริมการตัดอ้อยสดคุณภาพดีตลอดฤดูหีบ 66/67
                    </div>
                  </div>
                  <div className="flex_news margin_read">
                    <a href="news1" className="read font-bold font_read">
                      อ่านต่อ
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-0 hidden " id="more">
              <div className="grid grid-cols-3 gap-4 p-0">
                <div className="box_news col-span-1">
                  <div>
                    <Image
                      src={news2}
                      width={72}
                      height={72}
                      alt="news2"
                      className="img-fluid border_img"
                    />
                    <div className="margin_text_news font_normal">
                      มิตรผล ประกาศรับซื้อใบอ้อยสดหลังตัด ผลิตไฟฟ้าชีวมวล
                      สู้สุดใจไปด้วยกัน ตัดอ้อยสดลดฝุ่น PM2.5
                    </div>
                  </div>
                  <div className="flex_news margin_read">
                    <a href="news2" className="read font-bold font_read">
                      อ่านต่อ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col4">
            <div className="container">
              <div className="grid grid-cols-2 mt-3 p-0 gap-4">
                <div className=" p-0">
                  <div className="box_news">
                    <div>
                      <Image
                        src={news1}
                        width={72}
                        height={72}
                        alt="news1"
                        className="img-fluid border_img"
                      />
                      <div className="margin_text_news font_normal">
                        กลุ่มมิตรผลเดินหน้ารับซื้อใบอ้อยเพื่อเปลี่ยนเป็นพลังงานทดแทน
                        หลังเป็นผู้บุกเบิกต่อเนื่องมากว่า 6 ปี
                        พร้อมส่งเสริมการตัดอ้อยสดคุณภาพดีตลอดฤดูหีบ 66/67
                      </div>
                    </div>
                    <div className="flex_news margin_read">
                      <a href="news1" className="read font-bold font_read">
                        อ่านต่อ
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-0">
                  <div className="box_news">
                    <div>
                      <Image
                        src={news2}
                        width={72}
                        height={72}
                        alt="news2"
                        className="img-fluid border_img"
                      />
                      <div className="margin_text_news font_normal">
                        มิตรผล ประกาศรับซื้อใบอ้อยสดหลังตัด ผลิตไฟฟ้าชีวมวล
                        สู้สุดใจไปด้วยกัน ตัดอ้อยสดลดฝุ่น PM2.5
                      </div>
                    </div>
                    <div className="flex_news margin_read">
                      <a href="news2" className="read font-bold font_read">
                        อ่านต่อ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="more2" className="hidden">
              <div className="container col4">
                <div className="grid grid-cols-2 mt-3 p-0 gap-4">
                  <div className=" p-0">
                    <div className="box_news">
                      <div>
                        <Image
                          src={news1}
                          width={72}
                          height={72}
                          alt="news1"
                          className="img-fluid border_img"
                        />
                        <div className="margin_text_news font_normal">
                          กลุ่มมิตรผลเดินหน้ารับซื้อใบอ้อยเพื่อเปลี่ยนเป็นพลังงานทดแทน
                          หลังเป็นผู้บุกเบิกต่อเนื่องมากว่า 6 ปี
                          พร้อมส่งเสริมการตัดอ้อยสดคุณภาพดีตลอดฤดูหีบ 66/67
                        </div>
                      </div>
                      <div className="flex_news margin_read">
                        <a href="news1" className="read font-bold font_read">
                          อ่านต่อ
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" p-0">
                    <div className="box_news">
                      <div>
                        <Image
                          src={news2}
                          width={72}
                          height={72}
                          alt="news2"
                          className="img-fluid border_img"
                        />
                        <div className="margin_text_news font_normal">
                          มิตรผล ประกาศรับซื้อใบอ้อยสดหลังตัด ผลิตไฟฟ้าชีวมวล
                          สู้สุดใจไปด้วยกัน ตัดอ้อยสดลดฝุ่น PM2.5
                        </div>
                      </div>
                      <div className="flex_news margin_read">
                        <a href="news2" className="read font-bold font_read">
                          อ่านต่อ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col6">
            <div className="mt-3 flex justify-center">
              <button
                onClick={myFunction}
                id="myBtn"
                className="button font_readmore font-bold"
              >
                ดูเพิ่มเติม
              </button>
            </div>
          </div>
          <div className="col4">
            <div className="mt-3 flex justify-center">
              <button
                onClick={myFunction2}
                id="myBtn2"
                className="button font_readmore font-bold"
              >
                ดูเพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
