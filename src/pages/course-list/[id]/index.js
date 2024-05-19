import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
let workOrderlistData = [
  {
      "advertiser": "Udemy", 
      "category": "Development", 
      "image_url": "https://udemy-images.udemy.com/course/480x270/1321548_ce0c.jpg", 
      "link": "https://click.linksynergy.com/link?id=2mhs2G02AJA&offerid=358574.1321548&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fc-programming-beginners-advanced%2F", 
      "link_code": "https://www.udemy.com/course/c-programming-for-beginners-/?couponCode=LEADERSALE24A", 
      "link_id": "LEADERSALE24A", 
      "link_name": "C Programming For Beginners - Master the C Language", 
      "pixel_url": "https://ad.linksynergy.com/fs-bin/show?id=2mhs2G02AJA&bids=358574.1321548&type=2&subid=0", 
      "retail_price": 195.0
  }, 
  {
      "advertiser": "Udemy", 
      "category": "Development", 
      "image_url": "https://udemy-images.udemy.com/course/480x270/111712_d7d9_7.jpg", 
      "link": "https://click.linksynergy.com/link?id=2mhs2G02AJA&offerid=358574.111712&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fc-programming-for-beginners%2F", 
      "link_code": "https://www.udemy.com/course/artificial-intelligence-az/?couponCode=LEADERSALE24A",
      "link_id": "LEADERSALE24A", 
      "link_name": "Artificial Intelligence A-Z 2024: Build 7 AI + LLM & ChatGPT", 
      "pixel_url": "https://ad.linksynergy.com/fs-bin/show?id=2mhs2G02AJA&bids=358574.111712&type=2&subid=0", 
      "retail_price": 145.0
  }, 
  {
      "advertiser": "Udemy", 
      "category": "Development", 
      "image_url": "https://udemy-images.udemy.com/course/480x270/771448_566f_5.jpg", 
      "link": "https://click.linksynergy.com/link?id=2mhs2G02AJA&offerid=358574.771448&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fmaster-c-programming-with-visual-studio-for-all%2F", 
      "link_code": "https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=LEADERSALE24A", 
      "link_id": "LEADERSALE24A", 
      "link_name": "The Complete 2024 Web Development Bootcamp", 
      "pixel_url": "https://ad.linksynergy.com/fs-bin/show?id=2mhs2G02AJA&bids=358574.771448&type=2&subid=0", 
      "retail_price": 200.0
  }, 
  {
      "advertiser": "Udemy", 
      "category": "Development", 
      "image_url": "https://udemy-images.udemy.com/course/480x270/512470_7b67_2.jpg", 
      "link": "https://click.linksynergy.com/link?id=2mhs2G02AJA&offerid=358574.512470&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fc-for-technical-interview%2F", 
      "link_code": "https://www.udemy.com/course/build-responsive-website-using-html5-css3-js-and-bootstrap-p/?couponCode=LEADERSALE24A", 
      "link_id": "512470", 
      "link_name": "Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2024", 
      "pixel_url": "https://ad.linksynergy.com/fs-bin/show?id=2mhs2G02AJA&bids=358574.512470&type=2&subid=0", 
      "retail_price": 95.0
  }, 
  {
      "advertiser": "Udemy", 
      "category": "Development", 
      "image_url": "https://udemy-images.udemy.com/course/480x270/1037214_2ebc_2.jpg", 
      "link": "https://click.linksynergy.com/link?id=2mhs2G02AJA&offerid=358574.1037214&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fc-programming-beginners%2F", 
      "link_code": "https://www.udemy.com/course/html-css-javascript-certification-course-for-beginners/?couponCode=LEADERSALE24A", 
      "link_id": "LEADERSALE24A", 
      "link_name": "C Programming For Beginners", 
      "pixel_url": "https://ad.linksynergy.com/fs-bin/show?id=2mhs2G02AJA&bids=358574.1037214&type=2&subid=0", 
      "retail_price": 20.0
  }
];

export default function WorkOrderInfo() {
  let [orderData, setOrderData] = useState(workOrderlistData);

  let router = useRouter();
  console.log("router", router.query.id);
  useEffect(() => {
    if (router.query.id) {
      let data = workOrderlistData?.filter((item) => item?.link_id == router.query.id);
      setOrderData(data[0]);
      
    }
  }, [router.query.id]);
  return (
    <div className="bg-gray-strom/20 min-h-[100vh]">
      <section className="py-[40px] min-h-[76vh] overflow-x-auto">
        <div className="container">
          <div className="shadow-xl bg-white rounded-xl p-12">
            <button
              className="bg-distemper-main  mb-3 p-2 h-[100%] w-[200px] text-white flex items-center justify-center rounded-xl"
              onClick={() => router.push("/course-list")}
            >
              Back to order list
            </button>
            <div className="border-b border-gray-strom/20 pb-3 mb-6 flex justify-between">
              <h2 className="text-[26px] font-semibold">
                Coure Details
              </h2>
            </div>
            <div className="mb-5 pb-5 border-b border-gray-strom/20">
              <div className="">
                <h3 className="text-[16px] font-semibold p-2">
                  Course Name : 
                <span className="text-[14px] pl-5 ">{orderData?.link_name}</span>
                </h3>
                <h3 className="text-[16px] font-semibold p-2">
                  Category : 
                <span className="text-[14px] pl-5">{orderData?.category}</span>
                </h3>
                <h3 className="text-[16px] font-semibold p-2">
                Course Link : <span className="text-[14px] pl-5 text-blue-main"><a href={orderData?.link_code} target="_blank">{orderData?.link_code}</a></span>
                </h3>
                <h3 className="text-[16px] font-semibold p-2">
                  Course Name :
                <span className="text-[14px] pl-5 ">{orderData?.advertiser}</span>
                </h3>
                <h3 className="text-[16px] font-semibold p-2">
                  Course Price : 
                <span className="text-[14px] pl-5 ">{orderData?.retail_price} $</span>
                </h3>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
