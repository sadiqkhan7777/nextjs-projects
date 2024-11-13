import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div
          className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center 
        border-4 border-sky-400"
        >
          <div className="text-center font-bold w-full h-full absolute inset-7">
            GIAIC STUDENT ID CARD FOR BATCH 1
          </div>

          {/*  background image */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[350px] max-h-[400px]">
              <Image
                src="/images/background.jpg"
                alt="background image"
                width={350}
                height={400}
                objectFit="cover"
                className="opacity-20"
              />
            </div>
          </div>

          {/*  left sextion */}

          <div className="w-2/3 pt-16 relative z-10">
            {/* Logo */}

            <img
              src="/images/logo.png"
              alt="card-logo"
              className="absolute top-[-20px] left-0 w-16 z-10"
            />

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Name: </strong>
              </span>
              <span className="text-black">Sadiq Khan</span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Roll No: </strong>
              </span>
              <span className="text-black">00037141 </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Distance learning: </strong>
              </span>
              <span className="text-black">No</span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> City: </strong>
              </span>
              <span className="text-black"> Karachi</span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Center: </strong>
              </span>
              <span className="text-black">Governer House Karachi</span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Campus: </strong>
              </span>
              <span className="text-black">Main</span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Days/Time: </strong>
              </span>
              <span className="text-black">Monday-02:00 PM-05:00PM</span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Batch: </strong>
              </span>
              <span className="text-black">1</span>
            </p>

            {/*  lover section */}

            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg borrder border-gray-300 bg-blue-900 items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500 "
                  style={{ width: "50%" }}
                ></span>
                <span className="relative z-10">
                  Q1{" "}
                  <span className="relative z-10 justify-items-center">
                    {" "}
                    WMD
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/*  Rightr section */}

          <div className="w-1/3 text-center relative z-10 ">
            <Image
              src="/images/sadiq.png"
              alt="background image"
              width={800}
              height={800}
              className="rounded-lg mb-6 w-full"
            />

            <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">
              Authorizrd Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
