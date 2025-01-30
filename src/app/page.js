import Image from "next/image";
import '@/styles/global.css';
import Link from "next/link";
import '@/components/car_id';
import Car_id from "@/components/car_id";
import '@/components/check_car';
import CarCheck from "@/components/check_car";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

    <>
      <div>
        <header className="header">
          <div className="nav-container">
            <ul className="nav-links">

              <li><Link href="/" >الرئيسية</Link></li>
              <li><Link href="/about">من نحن</Link></li>
            </ul>
          </div>
          <div className="logo"><img src="https://i.ibb.co/JHM92Mj/Datacar-New-Logo-removebg-preview.png" alt="DataCar Logo" /></div>
        </header >


        <CarCheck />
      </div>


    </>

    //   </main >
    // </div >
  );
}


