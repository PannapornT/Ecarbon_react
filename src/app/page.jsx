import React from "react";
import Image from "next/image";
import "@style/main.css";
import feature1 from "@main_pic/newfeaure1.svg";
import feature2 from "@main_pic/newfeatur2.svg";
import feature3 from "@main_pic/newfeature3.svg";
import hero from "@main_pic/hero.svg";
import Ai_mobile from "@main_pic/Ai_mobile.svg";
import ferti_mobile from "@main_pic/ferti_mobile.svg";
import Mitr_phol from "@main_pic/mitr-phol.svg";
import people1 from "@main_pic/people1.svg";
import people2 from "@main_pic/people2.svg";
import people3 from "@main_pic/people3.svg";
import satellite from "@main_pic/satellite_mobile.svg";
import star from "@main_pic/star.svg";
import TGO from "@main_pic/TGO.svg";

export default function Home() {
  return (
    <div>
      {/* Hero page */}
      <div className="container">
        <div className="row " style="justify-content: space-between;">
          <div className="col-6 ">
            <div className="hero-color box_hero bg-image-hero ">
              <div className="font_hero fw-bold text-light text-start ">
                <br />
                “เกษตรกรยั่งยืน <br />
                เพิ่มผลผลิต เพิ่มรายได้ <br />
                ด้วยเทคโนโลยี”
              </div>
              <div className="fw-bolder text-primary-color text-start font_hero_below">
                เราเชื่อมั่นว่าเทคโนโลยีจะพาคุณไปสู่ชีวิตที่ดีขึ้นได้
                ด้วยเทคโนโลยีดาวเทียมและ AI เพิ่มผลผลิต เสริมสร้างรายได้
                และได้ช่วยโลก
              </div>
              <div
                className="d-flex justify-content-between "
                style="margin-left: 10%; margin-right: 10%;"
              >
                <button className="button button_hero fw-bold">
                  ข้อมูลเพิ่มเติม
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <Image src={hero} alt="icon" className=" img_hero" />
          </div>
        </div>
      </div>
      {/* part 2 What is our product */}
      <div className="container mt-5">
        <div
          className="row part2-color rounded-part2"
          style="margin-left: 2%; margin-right: 2%;"
        >
          <div className="col-3">
            <Image
              src={Icon}
              alt="icon"
              className="img-fluid img_whatisourproduct "
            />
            <div className="text-light">
              <h1 className="ecarbon__whatisourproduct">eCARBON</h1>
            </div>
          </div>
          <div className="col-9">
            <h3 className=" text-light font_whatisourproduct">
              จากสภาพภูมิอากาศที่เปลี่ยนแปลงส่งผลกระทบต่อทั้งคุณภาพเกษตรกร
              ยังส่งผลให้คุณภาพและปริมาณผลผลิตทาง การเกษตรลงลดด้วย eCARBON
              จึงเกิดขึ้นเพื่อเป็นตัวช่วย ในการดูแลการทำเกษตรกร
              ที่จะทำให้โลกร้อนและได้ผลผลิตน้อย
              อีกทั้งยังสามารถทำรายได้เพิ่มเติม จากสิ่งที่เรียกว่า Carbon Credit
              ได้ทั้งพัฒนาคุณภาพชีวิต คุณภาพทางการเงิน และ
              คุณภาพของสภาพอากาศของโลกเรา
            </h3>
          </div>
        </div>
      </div>

      {/* feature */}
      <div className="container clearfix mt-5 display_old">
        <div className="row" style="position: relative;">
          <div className="display">
            <div className="display_head_feature1 fw-bold">
              เครื่องมือสู่ความยั่งยืน
            </div>
          </div>
          <div className="display">
            <div className="display_head_feature2 fw-bold">
              {'"สรรค์สร้างด้วยมือเรา"'}
            </div>
          </div>
          <div className="col-4 ">
            <div className="box_size_feature bg-feature-color rounded_feature d-flex flex-column justify-content-between">
              <div className="">
                <div className="text_feature_green fw-bold ">เทคโนโลยี AI</div>
                <div className="text_feture_normal">
                  ช่วยวิเคราะห์
                  หาทางออกแนะนำวิธีการทำให้เกษตรกรเกี่ยวกับการทำเกษตรและการใช้งานได้
                  24 ชั่วโมง
                </div>
              </div>
              <div>
                <Image
                  src={feature1}
                  alt="feature1"
                  className="clearfix img-fluid img_feature"
                />
                {/* <img src="pic_index/newfeaure1.svg" alt="" className="clearfix img-fluid img_feature"> */}
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div
              className="box_size_feature bg-feature-color rounded_feature d-flex flex-column justify-content-between img_feature2 margin_mid_box"
              style="position:relative"
            >
              <div>
                <div className="text_feature_green fw-bold">
                  เทคโนโลยีดาวเทียม
                </div>
                <div
                  className="text_feture_normal "
                  style="position:absolute; z-index:2;"
                >
                  ตรวจสอบครอบคลุมทั้งไล่ พร้อมภาพแสดงความเปลี่ยนแปลงที่แม่นยำ
                </div>
              </div>
              <Image
                src={feature2}
                alt="feature2"
                className="clearfix img-fluid img_feature rounded_feature absolute z-1"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="box_size_feature bg-feature-color rounded_feature d-flex flex-column justify-content-between">
              <div>
                <div className="text_feature_green fw-bold ">
                  เติมเต็มช่วยเกษตรกร
                </div>
                <div className="text_feture_normal">
                  บริการเสริม ช่วยเหลือและสนับสนุนอุปกรณ์
                  วัตถุดิบการทำเกษตรในทุกด้านครบวงจร
                </div>
              </div>
              <div>
                <Image
                  src={feature3}
                  alt="feature3"
                  className="clearfix img-fluid img_feature"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature mobile */}
      <div className="display_mobile">
        <div className="d-flex justify-content-center mt-3 head_feature_mobile fw-bold">
          เครื่องมือสู่ความยั่งยืน
        </div>
        <div className="d-flex justify-content-center mt-2 head_feature_mobile fw-bold">
          “สรรค์สร้างด้วยมือเรา”
        </div>
        <div className="horizontal_slider">
          <div className="slider_con">
            <div className="item" style="position:relative">
              <div className="size_slide_box_mobile radius_box_feature_mobile bg-feature-color_mobile">
                <div className="text_feature_green_mobile fw-bold">
                  <br />
                  เทคโนโลยี AI
                </div>
                <p
                  className="text_feture_normal_mobile "
                  style="position:absolute; z-index:10;"
                >
                  ช่วยวิเคราะห์หาทางออกแนะนำวิธีการ ทำให้เกษตรกรเกี่ยวกับการทำ
                  เกษตรและการใช้งานได้ 24 ชั่วโมง
                </p>
                <div>
                  <Image
                    src={Ai_mobile}
                    alt="ai_mobile"
                    className="clearfix img-fluid img_feature_mobile absolute z-1"
                  />
                </div>
              </div>
            </div>
            <div className="item relative">
              <div className="size_slide_box_mobile radius_box_feature_mobile bg-feature-color_mobile">
                <div className="text_feature_green_mobile fw-bold">
                  <br />
                  เทคโนโลยีดาวเทียม
                </div>
                <p className="text_feture_normal_mobile absolute z-10">
                  ตรวจสอบครอบคลุมทั้งไร่ พร้อมภาพแสดงความเปลี่ยนแปลง ที่แม่นยำ
                </p>
                <div>
                  <Image
                    src={satellite}
                    alt="satellite"
                    className="clearfix img-fluid img_feature_mobile absolute z-1"
                  />
                </div>
              </div>
            </div>
            <div className="item" style="position:relative">
              <div className="size_slide_box_mobile radius_box_feature_mobile bg-feature-color_mobile">
                <div className="text_feature_green_mobile fw-bold">
                  <br />
                  เติมเต็มช่วยเกษตรกร
                </div>
                <p
                  className="text_feture_normal_mobile"
                  style="position:absolute; z-index:10;"
                >
                  บริการเสริม ช่วยเหลือ และสนับสนุนอุปกรณ์ วัตถุดิบ
                  การทำเกษตรในทุกด้าน ครบวงจร
                </p>
                <div>
                  <Image
                    src={ferti_mobile}
                    alt="ferti"
                    className="clearfix img-fluid img_feature_mobile absolute z-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* finish FEATURE */}
      {/* map  */}
      <div className=" container mt-5 display_old">
        <div className="row bg-map-color ">
          <div className="map-bg col-6 ">
            <div className="single-box display">
              <div className="margin_map">
                <span className="font_map_light fw-bold">วางใจให้กับ</span>
                <span className="font_map_big_normal fw-bold"> eCarbon</span>
                <div className="font_map_normal">
                  โปร่งใส แม่นยำ พร้อมดูแล <br />
                  เพื่อนคู่คิด พิชิตยอดผลผลิต
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center ">
            <div
              className="bg_contact margin_contact "
              style="height: 80%; width: 80%;"
            >
              <div className="fw-bold text-light font_contact_head">
                ติดต่อ eCarbon
              </div>
              <form action="" className="text-light fw-bold ">
                <input
                  type="email"
                  name="E-mail"
                  placeholder="E-mail"
                  className="round_form contact_width contact_font"
                />
                <br />
                <input
                  type="tel"
                  name="tel"
                  id=""
                  placeholder="เบอร์โทร"
                  className="round_form contact_width contact_font"
                />
                <br />
                <input
                  type="text"
                  name="detail"
                  id=""
                  placeholder="รายละเอียด"
                  className="round_form contact_width contact_font"
                />
                <br />
                <input
                  type="checkbox"
                  id="acceptnews"
                  name="acceptnews"
                  value="news"
                  className="margin_checkbox"
                />
                <label for="vehicle1" className="normal_contact">
                  {" "}
                  ยินยอมรับข่าวสารและโปรโมชั่นจาก eCarbon
                </label>
                <br />
                <input
                  type="checkbox"
                  id="acceptinfo"
                  name="acceptinfo"
                  value="info"
                  className="margin_checkbox"
                />
                <label for="vehicle2" className="normal_contact">
                  {" "}
                  ยินยอมให้ใช้ข้อมูลส่วนตัวเพื่อพัฒนาการตลาด
                </label>
                <br />
                <input
                  type="checkbox"
                  id="acceptpolicy"
                  name="acceptpolicy"
                  value="policy"
                  className="margin_checkbox"
                />
                <label for="vehicle3" className="normal_contact">
                  {" "}
                  <span>ยินยอมและอ่าน</span>{" "}
                  <span className="font_contact_green">
                    ข้อตกลงและนโยบายของ eCarbon
                  </span>
                </label>
                <br />
                <br />
                <input
                  type="submit"
                  value="ดำเนินการต่อ"
                  className="round_form contact_width contact_font"
                  style="margin-bottom: 10%;"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* map mobile */}
      <div className=" display_mobile container mt-3">
        <div className="d-flex justify-content-center">
          <span className="color_text_head_mobile fw-bold">วางใจให้กับ</span>
          <span className="color_normal_text_mobile fw-bold">
            eCarbon โปร่งใส แม่นยำ พร้อมดูแล
          </span>
        </div>
        <div className="d-flex justify-content-center color_normal_text_mobile fw-bold">
          เพื่อนคู่คิด พิชิตยอดผลผลิต
        </div>
        <div className="d-flex justify-content-center display_mobile">
          <div
            className="bg_contact display_mobile mt-2"
            style="height: 80%; width: 80%;"
          >
            <div className="fw-bold text-light font_contact_head">
              ติดต่อ eCarbon
            </div>
            <form action="" className="text-light  ">
              <input
                type="email"
                name="E-mail"
                placeholder="E-mail"
                className="round_form contact_width contact_font"
              />
              <br />
              <input
                type="tel"
                name="tel"
                id=""
                placeholder="เบอร์โทร"
                className="round_form contact_width contact_font"
              />
              <br />
              <input
                type="text"
                name="detail"
                id=""
                placeholder="รายละเอียด"
                className="round_form contact_width contact_font"
              />
              <br />
              <input
                type="checkbox"
                id="acceptnews"
                name="acceptnews"
                value="news"
                className="margin_checkbox"
              />
              <label for="vehicle1" className="normal_contact">
                {" "}
                ยินยอมรับข่าวสารและโปรโมชั่นจาก eCarbon
              </label>
              <br />
              <input
                type="checkbox"
                id="acceptinfo"
                name="acceptinfo"
                value="info"
                className="margin_checkbox"
              />
              <label for="vehicle2" className="normal_contact">
                {" "}
                ยินยอมให้ใช้ข้อมูลส่วนตัวเพื่อพัฒนาการตลาด
              </label>
              <br />
              <input
                type="checkbox"
                id="acceptpolicy"
                name="acceptpolicy"
                value="policy"
                className="margin_checkbox"
              />
              <label for="vehicle3" className="normal_contact">
                {" "}
                <span>ยินยอมและอ่าน</span>{" "}
                <span className="font_contact_green">
                  ข้อตกลงและนโยบายของ eCarbon
                </span>
              </label>
              <br />
              <br />
              <input
                type="submit"
                value="ดำเนินการต่อ"
                className="round_form contact_width contact_font"
                style="margin-bottom: 10%;"
              />
            </form>
          </div>
        </div>
      </div>
      {/* feed back */}
      <div className="container mt-5 mb-5 display_old">
        <div className="head_feedback1 fw-bold d-flex justify-content-center">
          เกษตรกรของเรา
        </div>
        <div className="head_feedback2 fw-bold d-flex justify-content-center">
          ประสบการณ์ดีๆ จากพี่เกษตรกรที่เข้าร่วม
        </div>
        <div className="row mt-3">
          <div className="col-4 border border-dark">
            <div className="row ">
              <div className="col-4">
                <div>
                  <Image
                    src={star}
                    width={125}
                    height={26}
                    alt="star"
                    className="img-fluid clearfix display img_star_feedback"
                  />
                </div>
                <div>
                  <Image
                    src={people1}
                    width={81.6}
                    height={81.6}
                    alt="people1"
                    className="img-fluid clearfix mx-auto d-block margin_img"
                  />
                </div>
                <div className="display font_name ">ดิเรก อนันต์โชค</div>
                <div className="display font_name mb-3">ไร่ภูเขียว</div>
              </div>
              <div className="col-8 bg-feedback font_feedback fw-bold">
                <div className="margin_feedback">
                  ช่วยให้อ้อยเยอะขึ้นจริง ลองมาดูที่ Facebook ผมได้เลย
                </div>
                <div>{'"เฮียดิเรก ภูเขียว"'}</div>
              </div>
            </div>
          </div>
          <div className="col-4 bg-primary-color border border-dark">
            <div className=" row text-light">
              <div className="col-4">
                <div>
                  <Image
                    src={star}
                    width={125}
                    height={26}
                    alt="star"
                    className="img-fluid clearfix display img_star_feedback"
                  />
                </div>
                <div>
                  <Image
                    src={people2}
                    width={81.6}
                    height={81.6}
                    alt="people2"
                    className="img-fluid clearfix mx-auto d-block margin_img"
                  />
                </div>
                <div className="display font_name">พรรษา สุขสุดใจ</div>
                <div className="display font_name mb-3">ไร่เชียงดาว</div>
              </div>
              <div className="col-8 bg-feedback-light fw-bold font_feedback">
                <div className="margin_feedback">
                  เมื่อก่อนได้ไร่ละ ไม่ถึง 10 ตัน ทุกวันนี้ ได้ไร่ละ 15 ตัน
                  ไม่ง่ายสำหรับทำใหม่แต่ ไม่อยากเกินไปสำหรับเรียนรู้
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 border border-dark">
            <div className=" row ">
              <div className=" col-4 ">
                <div>
                  <Image
                    src={star}
                    width={125}
                    height={26}
                    alt="star"
                    className="img-fluid clearfix display img_star_feedback"
                  />
                </div>
                <div>
                  <Image
                    src={people3}
                    width={81.6}
                    height={81.6}
                    alt="people3"
                    className="img-fluid clearfix mx-auto d-block margin_img"
                  />
                </div>
                <div className="display font_name">การณ์ไกล มาแล้ว</div>
                <div className="display font_name mb-3">ไร่ด่านช้าง</div>
              </div>
              <div className="col-8 bg-feedback font_feedback fw-bold">
                <div className="margin_feedback">
                  ผมเข้าเป็นคนแรกๆ ตอนแรกลังเล แต่ตอนนี้ดีใจที่ได้ทำ eCarbon
                  ช่วยให้ ผมทำไร่เหนื่อยหน่อยกว่าเดิมแต่ได้ มากกว่าเก่า
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feedback mobile  */}
      <div className="mt-3 container display_mobile ">
        <div className="head_feedback1 fw-bold d-flex justify-content-center">
          เกษตรกรของเรา
        </div>
        <div className="head_feedback2 fw-bold d-flex justify-content-center mb-2">
          ประสบการณ์ดีๆ จากพี่เกษตรกรที่เข้าร่วม
        </div>
        <div
          className="bg_feedback_mobile radius_box_feedback"
          style="display: flex; flex-direction: colume; justify-content: center;"
        >
          <div className="row mt-2" style="width: 90%;">
            <div
              className="bg_head_feedback"
              style="display: flex; flex-direction: row; justify-content: center;"
            >
              <div className="col-3">
                <Image
                  src={people1}
                  width={81.6}
                  height={81.6}
                  alt="people1"
                  className="clearfix pt-2 "
                />
              </div>
              <div className="col-6 d-flex flex-column justify-content-center text-light text_feedback_name_mobile ">
                ดิเรก อนันต์โชค (ไร่ภูเขียว)
              </div>
              <div className="col-3">
                <Image
                  src={star}
                  width={125}
                  height={26}
                  alt="star"
                  className="clearfix "
                />
              </div>
            </div>
            <div className=" text_feedback_mobile mt-2 fw-bold d-flex justify-content-center">
              ช่วยให้อ้อยเยอะขึ้นจริง ลองมาดูที่ Facebook ผมได้เลย “เฮียดิเรก
              ภูเขียว”
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 container display_mobile">
        <div
          className="bg_feedback_green_mobile radius_box_feedback bg_head_feedback"
          style="display: flex; flex-direction: colume; justify-content: center;"
        >
          <div
            className="row mt-2 margin_feedback_mobile"
            style="width: 90%; height: 50%;"
          >
            <div
              className="bg_head_feedback_white"
              style="display: flex; flex-direction: row; justify-content: center;"
            >
              <div className="col-3">
                <Image
                  src={people2}
                  width={81.6}
                  height={81.6}
                  alt="people2"
                  className="clearfix pt-2 "
                />
              </div>
              <div className="col-6 color_text_box_green fw-bold d-flex flex-column justify-content-center text_feedback_name_mobile">
                พรรษา สุขสุดใจ (ไร่เชียงดาว)
              </div>
              <div className="col-3">
                <Image
                  src={star}
                  width={125}
                  height={26}
                  alt="star"
                  className="clearfix "
                />
              </div>
            </div>
            <div className="text-light text_feedback_mobile mt-2 mb-2 fw-bold d-flex justify-content-center">
              เมื่อก่อนได้ไร่ละ ไม่ถึง 10 ตัน ทุกวันนี้ ได้ไร่ละ 15 ตัน
              ไม่ง่ายสำหรับทำใหม่แต่ ไม่อยากเกินไปสำหรับเรียนรู้
            </div>
          </div>
        </div>
      </div>

      {/* Partner */}
      <div className="container mt-5 mb-5 display_old">
        <div className="row">
          <div className="col-6">
            <div className="font_head_partner fw-bold">คำถามที่พบบ่อย</div>
            <div className="font_green_partner fw-bold">
              {
                '"หาคำตอบในคำถามทั่วไปเกี่ยวกับเทคโนโลยีการดาวเทียม AI, เครดิตคาร์บอน และกิจกรรมของเราในประเทศไทย", เครดิตคาร์บอน และกิจกรรมอื่นๆของ eCarbon ในประเทศไทย"'
              }
            </div>
            <button className="button button2">ติดต่อ</button>
            <div className="font_head_partner mb-3 fw-bold">
              พาร์ทเนอร์ของเรา
            </div>
            <div
              style="height:2px; width:100%; background-color:black"
              className="mb-4"
            ></div>
            <div className="single-box mx-auto d-block">
              <Image
                src={TGO}
                width={95.2}
                height={95.2}
                alt="TGO"
                className="img-fluid clearfix"
              />
              <Image
                src={Mitr_phol}
                width={95.2}
                height={95.2}
                alt="TGO"
                className="img-fluid clearfix"
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <div className="font_green_big_partner fw-bold">
                eCarbon มาจากไหน?
              </div>
              <div className="font_nomal_partner mt-2">
                eCarbon เป็นตัวกลางในการช่วยเหลือ ดูแล และจัดการข้อมูล
                เกี่ยวกับการทำเกษตรโดยเฉพาะด้านอ้อยด้วยเทคโนโลยีดาวเทียม และ Ai
              </div>
            </div>
            <div>
              <div className="font_green_big_partner fw-bold mt-3">
                คาร์บอนเครดิตคืออะไร?
              </div>
              <div className="font_nomal_partner mt-2">
                สิทธิที่เกิดจากการลดปริมาณการปล่อยก๊าซคาร์บอนไดออกไซด์
                หรือก๊าซเรือนกระจกสู่สิ่งแวดล้อม อันเนื่องมาจากการที่บุคคล หรือ
                องค์กรได้ดำเนินโครงการหรือมาตรการที่มีเป้าหมายเพื่อลด การ
                ปล่อยก๊าซคาร์บอนไดออกไซด์หรือก๊าซเรือนกระจกสู่สิ่งแวด ล้อม
                ซึ่งสิทธิดังกล่าวนี้สามารถวัดปริมาณและ สามารถนำไปซื้อ ขายใน
                ตลาดซื้อขายคาร์บอนเครดิตได้
              </div>
            </div>
            <div>
              <div className="font_green_big_partner fw-bold mt-3">
                โลกร้อนคืออะไร?
              </div>
              <div className="font_nomal_partner mt-2">
                ก๊าซเรือนกระจก หรือ GHGs คือสิ่งที่ทำให้เกิดภาวะโลกร้อน
                เกิดได้จาก กิจกรรมต่างๆในชีวิตประจำวัน รวมไปถึงกิจกรรม
                ทางการเกษตร อย่างการ ใส่ปุ๋ย ใช้เครื่องยนต์ หรือ แม้แต้การเผา
                ทำให้เกิด ควัน และกลิ่น ที่แม้จะมองไม่เห็นด้วยตาเปล่า
                แต่ดาวเทียมสามารถตรวจจับได้
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* partner mobile  */}
      <div className="container display_mobile" style="width: 90%;">
        <div className="d-flex justify-content-center font_head_partner_mobile fw-bold mt-3">
          คำถามที่พบบ่อย
        </div>
        <div className=" font_Ques_partner_mobile fw-bold">
          eCarbon มาจากไหน?
        </div>
        <div className="d-flex justify-content-center font_ans_partner_mobile">
          eCarbon เป็นตัวกลางในการช่วยเหลือ ดูแล
          และจัดการข้อมูลเกี่ยวกับการทำเกษตร
          โดยเฉพาะด้านอ้อยด้วยเทคโนโลยีดาวเทียม และ Ai
        </div>
        <div className=" font_Ques_partner_mobile fw-bold">
          คาร์บอนเครดิตคืออะไร?
        </div>
        <div className="d-flex justify-content-center font_ans_partner_mobile">
          สิทธิที่เกิดจากการลดปริมาณการปล่อยก๊าซคาร์บอนไดออกไซด์
          หรือก๊าซเรือนกระจก สู่สิ่งแวดล้อม อันเนื่องมาจากการที่บุคคล
          หรือองค์กรได้ดำเนินโครงการหรือมาตรการ
          ที่มีเป้าหมายเพื่อลดการปล่อยก๊าซคาร์บอนไดออกไซด์หรือก๊าซเรือนกระจกสู่
          สิ่งแวดล้อม ซึ่งสิทธิดังกล่าวนี้สามารถวัดปริมาณและ
          สามารถนำไปซื้อขายในตลาด ซื้อขายคาร์บอนเครดิตได้
        </div>
        <div className=" font_Ques_partner_mobile fw-bold">โลกร้อนคืออะไร?</div>
        <div className="d-flex justify-content-center font_ans_partner_mobile">
          ก๊าซเรือนกระจก หรือ GHGs คือสิ่งที่ทำให้เกิดภาวะโลกร้อน เกิดได้จาก
          กิจกรรมต่างๆ ในชีวิตประจำวัน รวมไปถึงกิจกรรมทางการเกษตร
          อย่างการใส่ปุ๋ย ใช้เครื่องยนต์ หรือ แม้แต้การเผา ทำให้เกิด ควัน
          และกลิ่น ที่แม้จะมองไม่เห็นด้วยตาเปล่า แต่ดาวเทียม สามารถตรวจจับได้
        </div>
        <div style="height: 2px; background-color: black;"></div>
        <div className="row">
          <div className="col-9 text_green_mobile fw-bold mt-2">
            {
              ' "หาคำตอบในคำถามทั่วไปเกี่ยวกับเทคโนโลยีการดาวเทียม AI, เครดิตคาร์บอน และกิจกรรมของเราในประเทศไทย", เครดิตคาร์บอน และกิจกรรมอื่นๆของ eCarbon ในประเทศไทย"'
            }
          </div>
          <div className="col-3">
            <button className="button button2 mt-3">ติดต่อ</button>
          </div>
        </div>
        <div className="row container">
          <div className="col-6 d-flex align-items-center fw-bold">
            พาร์ทเนอร์ของเรา
          </div>
          <div className="col-6 d-flex align-items-center">
            <Image
              src={TGO}
              width={95.2}
              height={95.2}
              alt="TGO"
              className="img-fluid clearfix"
            />
            <Image
              src={Mitr_phol}
              width={95.2}
              height={95.2}
              alt="TGO"
              className="img-fluid clearfix"
            />
          </div>
        </div>
        <div
          className="mb-2"
          style="height: 2px; background-color: black;"
        ></div>
      </div>
    </div>
  );
}
