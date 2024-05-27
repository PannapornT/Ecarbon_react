import React from "react";
import Image from "next/image";
import "@style/aboutus.css";
import bam from "@aboutus_pic/bam.svg";
import benz from "@aboutus_pic/benz.svg";
import coin from "@aboutus_pic/coin.svg";
import footer from "@aboutus_pic/footer.svg";
import goldstd from "@aboutus_pic/goldstd.svg";
import jj from "@aboutus_pic/jj.svg";
import nut from "@aboutus_pic/nut.svg";
import Pohm from "@aboutus_pic/Pohm.svg";
import tver from "@aboutus_pic/tver.svg";
import un from "@aboutus_pic/un.svg";
import veristd from "@aboutus_pic/veristd.svg";
import wa from "@aboutus_pic/wa.svg";
import yer from "@aboutus_pic/yer.svg";

function page() {
  return (
    //   our team
    <div className="flex justify-center">
      <div className=" w-[90%]">
        <div className="container flex-1 ">
          <br />
          <div className="flex justify-center font_head_page font-bold">
            ทีมงานของเรา
          </div>
          <div className="flex justify-center font_sub_head font-bold">
            ด้วยประสบการณ์ตลอด 80 ปี, เราพร้อมที่จะทำให้
            เกษตรกรอ้อยมีคุณภาพชีวิตที่ดีขึ้น
          </div>
          <br />
          <div className="head_team_box head_team_bg head_border ">
            <div className="font_head_team head_team_font font-bold">
              B U S I N E S S
            </div>
          </div>
          <div className="col-size display ">
            <div className="bg_box_team">
              <Image
                src={jj}
                width={72}
                height={72}
                alt="jj"
                className="img-fluid "
              />
            </div>
            <div className="bg_box_team">
              <Image
                src={wa}
                width={72}
                height={72}
                alt="wa"
                className="img-fluid "
              />
            </div>
            <div className="bg_box_team">
              <Image
                src={yer}
                width={72}
                height={72}
                alt="yer"
                className="img-fluid "
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="font_team font-bold ">
              hattakorn parakkamanon <br />
              Position
            </div>
            <div className="font_team font-bold">
              Pannaporn Trisiwakul <br />
              Position
            </div>
            <div className="font_team font-bold">
              Aryer Archae <br />
              Position
            </div>
          </div>
          <div className="head_team_box head_team_bg head_border mt-3">
            <div className="font_head_team head_team_font font-bold">
              T E C H N O L O G Y
            </div>
          </div>
          <div className="col-size display">
            <div className="bg_box_team">
              <Image
                src={bam}
                width={72}
                height={72}
                alt="bam"
                className="img-fluid "
              />
            </div>
            <div className="bg_box_team">
              <Image
                src={benz}
                width={72}
                height={72}
                alt="benz"
                className="img-fluid "
              />
            </div>
            <div className="bg_box_team">
              <Image
                src={nut}
                width={72}
                height={72}
                alt="nut"
                className="img-fluid "
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="font_team font-bold ">
              Chayanisa Pharino <br />
              Position
            </div>
            <div className="font_team font-bold">
              Thanut Junnim <br />
              Position
            </div>
            <div className="font_team font-bold">
              Suchanat Ratanarueangrong <br />
              Position
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="box_leader ">
              <div className="grid grid-cols-3 gap">
                <div className="bg_box_team col-span-2">
                  <Image
                    src={Pohm}
                    width={72}
                    height={72}
                    alt="Pohm"
                    className="img-fluid "
                  />
                </div>
                <div className="col-span-1">
                  <div className=" head_leader_bg head_leader_border box_font_leader d-flex justify-content-center ">
                    <div className="font_head_team head_leader_font font-bold rotate font_head_team d-flex justify-content-center">
                      L E A D E R
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center font_team font-bold mt-3 col-span-2">
                  Suriya chayatummagoon
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default page;
