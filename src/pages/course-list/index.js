import Button from "@/Components/comman/Button";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const WorkOrderList = () => {
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
  let [orderList, setOrderList] = useState(workOrderlistData);
  let [preOrderList, setPreOrderList] = useState(workOrderlistData);
  let router = useRouter();
  let [searchValue, setSearchValue] = useState("");
  let [selectedSection, setSelectedSection] = useState();
  const searchWorkOrder = () => {
    let data = workOrderlistData?.filter((item) => item?.link_name.includes(searchValue));
    setOrderList(data);
  };

  useEffect(() => {
  }, []);
  return (
    <div className="bg-gray-strom/20 min-h-[100vh]">
      <section className="py-[40px] min-h-[76vh]">
        <div className="container">
          <div className="shadow-xl bg-white rounded-xl p-12">
            <button
              className="bg-distemper-main  mb-3 p-2 h-[100%] w-[200px] text-white flex items-center justify-center rounded-xl"
              onClick={() =>
                router.push(
                  selectedSection === "View/Search Wo"
                    ? "/selection"
                    : "/order-submission"
                )
              }
            >
              Back to{" "}
              {selectedSection === "View/Search Wo"
                ? "selection"
                : "order submmision"}
            </button>
            <div className="border-b border-gray-strom/20 pb-3 mb-6 flex justify-between">
              <h2 className="text-[26px] font-semibold">Course List</h2>
              <div className="max-w-[450px] w-full relative">
                <button
                  className="bg-distemper-main p-2 h-[100%] w-[55px] absolute right-0 top-0 flex items-center justify-center rounded-r-xl"
                  onClick={() => searchWorkOrder()}
                >
                  <Image src={"search-w.svg"} width={22} height={22} alt="" />
                </button>
                <input
                  type="text"
                  placeholder="Text input"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    if (e.target.value === "") {
                      setOrderList(workOrderlistData);
                    }
                  }}
                  className="appearance-none font-medium text-13 sm:text-[16px] pr-[65px] w-full rounded-xl border border-[#79747E]/20 py-2.5 px-3 text-black-haiti placeholder:text-black-haiti sm:leading-6 outline-none h-[52px]"
                />
              </div>
            </div>
            <div>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th>Course Category</th>
                    <th>Course Name</th>
                    <th>Course Id</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item?.category}</td>
                        <td>{item?.link_name}</td>
                        <td
                          className="text-blue-cool cursor-pointer"
                          onClick={() => router.push(`/course-list/${item?.link_id}`)}
                        >
                          Fetch Course
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {orderList?.length === 0 && (
                <div className="w-full text-center pt-[100px]">Not found</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WorkOrderList;
