import React from "react";
import Image from "next/image";
import "@style/product.css";
import product from "@product_pic/product.svg";
function page() {
  return (
    <div class="container flex-1">
      <div class="flex justify-center">
        <Image
          src={product}
          width={1000}
          height={200}
          alt="icon"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default page;
