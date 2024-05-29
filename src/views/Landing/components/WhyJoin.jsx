// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Card1 from "@/assets/landing/card1.svg";
import Card2 from "@/assets/landing/card2.svg";
import Card3 from "@/assets/landing/card3.svg";
import Card4 from "@/assets/landing/card4.svg";

const WhyJoin = () => {
  const cardList = [
    {
      id: 1,
      title: "Status Aplikasi",
      description:
        "Pantau status lamaran terbaru anda dari awal hingga akhir dengan mudah",
      img: Card1,
    },
    {
      id: 2,
      title: "Pencocokan Profil",
      description: "Dapatkan informasi lowongan yang sesuai dengan profil Anda",
      img: Card2,
    },
    {
      id: 3,
      title: "Preferensi & Pemberitahuan Pekerjaan",
      description:
        "Temukan lowongan yang sesuai preferensi Anda dalam hitungan detik",
      img: Card3,
    },
    {
      id: 4,
      title: "Persiapan Karir",
      description:
        "Akses berbagai sumber daya seperti tips menulis CV dan resume.",
      img: Card4,
    },
  ];

  return (
    <section className="flex flex-col py-12 items-center gap-10 px-10 md:px-4">
      <header className="text-2xl text-center font-semibold sm:text-3xl   text-fontColor">
        <h2>
          Kenapa mencari pekerjaan di{" "}
          <span className="text-blue">JobFinder</span>?
        </h2>
      </header>
      <article className="flex flex-col justify-center md:flex-row md:flex-wrap  gap-4">
        {cardList.map((card) => (
          <Card
            shadow="sm"
            key={card.id}
            className="md:max-w-72 2xl:max-w-80  py-2"
          >
            <CardHeader className="flex justify-center">
              <Image src={card.img} alt={card.title} />
            </CardHeader>
            <CardBody className="overflow-visible py-2 text-center">
              <h3 className="text-base font-bold text-fontColor sm:text-lg">
                {card.title}
              </h3>
              <p className="text-fontColor text-sm sm:text-base">
                {card.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </article>
    </section>
  );
};

export default WhyJoin;
