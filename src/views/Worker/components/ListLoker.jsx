// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { MdOutlineWatchLater } from "react-icons/md";

import Company1 from "@/assets/landing/company/company1.svg";
import Company2 from "@/assets/landing/company/company2.svg";
import Company3 from "@/assets/landing/company/company3.svg";
import Company4 from "@/assets/landing/company/company4.svg";
import Company5 from "@/assets/landing/company/company5.svg";
import Company6 from "@/assets/landing/company/company6.svg";
import Company7 from "@/assets/landing/company/company7.svg";
import Company8 from "@/assets/landing/company/company8.svg";

const ListLoker = () => {
  const listLoker = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "BRI",
      image: Company1,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "BRI",
      image: Company2,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
    {
      id: 3,
      title: "Fullstack Developer",
      company: "BRI",
      image: Company3,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "BRI",
      image: Company4,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "BRI",
      image: Company5,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "BRI",
      image: Company6,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "BRI",
      image: Company7,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "BRI",
      image: Company8,
      salary: "Rp. 1.000.000 - Rp. 2.000.000",
      location: "Jakarta",
      type: "Full-time",
      date: "2024-01-01",
    },
  ];

  return (
    <section className="flex flex-col gap-4 ">
      {listLoker.map((loker, index) => (
        <>
          <Card
            key={index}
            shadow="sm"
            isPressable
            onPress={() => console.log("Pressed")}
          >
            <div className="flex flex-row max-w-sm max-h-36">
              <CardBody className="flex items-center justify-center pt-5 -mx-12">
                <Image
                  radius="none"
                  src={loker.image}
                  alt="Card image background"
                  className="object-cover w-[50px]"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start justify-start w-[600px]  text-small">
                <p className="text-base font-medium">{loker.title}</p>
                <p className="text-sm text-blue ">{loker.company}</p>
                <p className="text-sm text-[#16a34a]">{loker.salary}</p>
                <p>{loker.location}</p>
              </CardFooter>
            </div>
            <p className="text-sm py-2 border-t-2 text-[#6b7280]  px-5 w-full flex justify-end items-center gap-2">
              <MdOutlineWatchLater />
              {loker.date}
            </p>
          </Card>
        </>
      ))}
    </section>
  );
};

export default ListLoker;
