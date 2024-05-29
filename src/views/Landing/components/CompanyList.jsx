// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

import Company1 from "@/assets/landing/company/company1.svg";
import Company2 from "@/assets/landing/company/company2.svg";
import Company3 from "@/assets/landing/company/company3.svg";
import Company4 from "@/assets/landing/company/company4.svg";
import Company5 from "@/assets/landing/company/company5.svg";
import Company6 from "@/assets/landing/company/company6.svg";
import Company7 from "@/assets/landing/company/company7.svg";
import Company8 from "@/assets/landing/company/company8.svg";
import Company9 from "@/assets/landing/company/company9.svg";
import Company10 from "@/assets/landing/company/company10.svg";
import Company11 from "@/assets/landing/company/company11.svg";
import Company12 from "@/assets/landing/company/company12.svg";
import Company13 from "@/assets/landing/company/company13.svg";
import Company14 from "@/assets/landing/company/company14.svg";
import Company15 from "@/assets/landing/company/company15.svg";

const CompanyList = () => {
  const companies = [
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
    Company6,
    Company7,
    Company8,
    Company9,
    Company10,
    Company11,
    Company12,
    Company13,
    Company14,
    Company15,
  ];

  return (
    <section className="flex flex-col py-12 items-center gap-10 px-10 lg:px-10 2xl:px-72">
      <header className="flex text-center flex-col justify-center gap-2 text-fontColor">
        <h2 className="text-lg  sm:text-xl font-semibold">
          Mudah Mendapatkan Lowongan
        </h2>
        <p className="text-2xl sm:text-3xl font-semibold">
          <span className="text-blue">500+</span> Perusahaan Menanti Anda
        </p>
      </header>
      <article className="flex items-center  justify-center flex-row flex-wrap gap-4">
        {companies.map((company, index) => (
          <Card
            radius="none"
            key={index}
            className="max-w-24 md:max-w-72 2xl:max-w-80 py-2"
            shadow="none"
          >
            <CardBody className="overflow-visible py-2 text-center">
              <Image radius="none" src={company} alt={`Company ${index + 1}`} />
            </CardBody>
          </Card>
        ))}
      </article>
      <Button className="text-white bg-blue font-semibold">
        <Link to="/login">Ayo Mulai Sekarang</Link>
      </Button>
    </section>
  );
};

export default CompanyList;
