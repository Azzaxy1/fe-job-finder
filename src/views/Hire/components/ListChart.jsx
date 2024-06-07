// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import ChartLoker from "./ChartLoker";
import ChartUser from "./ChartUser";
import ChartDoughnut from "./ChartDoughnut";

const ListChart = () => {
  return (
    <section className="flex flex-row flex-wrap gap-8 mb-4">
      <Card radius="none" className="w-full md:w-[48%] h-fit md:h-[50%] p-5">
        <CardBody className="w-full">
          <ChartLoker />
        </CardBody>
      </Card>
      <Card radius="none" className="w-full md:w-[48%] h-fit md:h-[50%] p-5">
        <CardBody className="w-full">
          <ChartUser />
        </CardBody>
      </Card>
      <Card radius="none" className="w-full md:w-[48%] h-fit md:h-[50%] p-5">
        <CardBody className="flex justify-center w-full mx-auto">
          <ChartDoughnut />
        </CardBody>
      </Card>
    </section>
  );
};

export default ListChart;
