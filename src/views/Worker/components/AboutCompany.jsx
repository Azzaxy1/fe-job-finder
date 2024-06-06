// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const AboutCompany = ({ company }) => {
  console.log(company);

  return (
    <Card radius="sm" className="px-3">
      <CardHeader className="flex flex-col items-start gap-2 ">
        <h2 className="text-lg font-semibold text-blue">Tentang Perusahaan</h2>
        <div className="flex flex-row items-center gap-6">
          <Image src={company.image} />
          <div>
            <p className="text-sm font-semibold sm:text-lg text-fontColor">
              {company.name}
            </p>
            <p className="text-sm font-normal text-gray-600 2xl:text-base">
              {company.address}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <h4 className="text-sm font-semibold sm:text-base text-fontColor">
          Industri
        </h4>
        <p className="text-sm font-normal text-gray-600 2xl:text-base">
          {company.industry}
        </p>
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <h4 className="text-sm font-semibold sm:text-base text-fontColor">
          Deskripsi Perusahaan
        </h4>
        <p className="text-sm font-normal text-gray-600 2xl:text-base">
          {company.description}
        </p>
        <div className="mx-auto mt-4">
          <Button
            variant="bordered"
            className="font-semibold text-blue border-blue hover:bg-blue hover:text-white"
          >
            Lihat Perusahaan
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

AboutCompany.propTypes = {
  company: PropTypes.object,
};

export default AboutCompany;
