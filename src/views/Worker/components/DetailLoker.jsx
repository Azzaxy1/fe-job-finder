// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FaRegBookmark } from "react-icons/fa6";

import Company1 from "@/assets/landing/company/company1.svg";
import toast from "react-hot-toast";
import AboutCompany from "./AboutCompany";

const DetailLoker = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cvSelected, setCvSelected] = useState(false);

  const handleFileChange = (e) => {
    e.target.files.length > 0 ? setCvSelected(true) : setCvSelected(false);
  };

  const handleApply = () => {
    toast.success("Lamaran berhasil dikirim");
    onOpenChange(false);
  };

  const user = [
    {
      id: 1,
      name: "Abdurrohman Azis",
      email: "abdurrohman.azis@example.com",
    },
  ];

  /* const = data [
    company : [
      id:
      name:
      image:
      address:
      description:
      jobs : [
        {
          title:
          company:
          salary:
          location:
          type:
          description: > React Quill
          requirements:
          date:
        }
    ]
  */

  const data = [
    {
      id: 1,
      company: {
        id: 1,
        name: "PT. ABC",
        industry: "Technology",
        image: Company1,
        address: "Jl. ABC No. 123, Jakarta",
        description:
          "Perusahaan yang bergerak di bidang teknologi informasi. Dan sudah beroperasi selama 10 tahun. Sudah berpengalaman dalam bidang tersebut.",
      },
      job: {
        id: 1,
        title: "Programmer",
        company: "PT. ABC",
        location: "Jakarta",
        type: "Full Time",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        salary: "Rp. 1.000.000 - Rp. 2.000.000",
        image: Company1,
        date: "2024-01-01",
        requirements: [
          "Lulusan S1 di bidang Ilmu Komputer, Teknik Informatika, atau bidang terkait.",
          "Pengalaman minimal 2 tahun dalam pengembangan perangkat lunak.",
          "Kemampuan dalam bahasa pemrograman seperti Java, Python, atau JavaScript.",
          "Pemahaman yang baik tentang sistem basis data dan SQL.",
          "Kemampuan untuk bekerja secara mandiri dan sebagai bagian dari tim.",
          "Bersedia untuk bekerja dengan jam yang fleksibel jika diperlukan.",
          "Mentalitas berorientasi pada solusi dengan kemampuan menyelesaikan masalah yang baik.",
        ],
        skills: [
          "Kemampuan dalam pengembangan aplikasi web menggunakan framework seperti React atau Angular.",
          "Pengalaman dengan sistem kontrol versi seperti Git.",
          "Pemahaman tentang prinsip-prinsip OOP dan desain pola.",
          "Kemampuan analisis dan pemecahan masalah yang kuat.",
          "Pengalaman dalam pengembangan API dan layanan web.",
          "Pengetahuan tentang DevOps dan CI/CD merupakan nilai tambah.",
          "Keterampilan komunikasi yang baik dan mampu bekerja dalam tim.",
        ],
        benefit: [
          "Gaji yang kompetitif dan bonus kinerja.",
          "Asuransi kesehatan dan tunjangan kesejahteraan.",
          "Kesempatan untuk berkembang dan pelatihan profesional.",
          "Lingkungan kerja yang mendukung dan kolaboratif.",
          "Waktu kerja fleksibel dan opsi remote working.",
        ],
        responsibility: [
          "Mengembangkan dan memelihara aplikasi perangkat lunak.",
          "Berkoordinasi dengan tim lain untuk memastikan integrasi yang mulus.",
          "Mengidentifikasi dan memperbaiki bug serta masalah performa.",
          "Menyusun dokumentasi teknis untuk kode yang ditulis.",
          "Berpartisipasi dalam pertemuan tim dan memberikan masukan teknis.",
        ],
      },
    },
  ];

  return (
    <>
      {data.map((data, index) => (
        <section key={index} className="flex flex-col w-full gap-4 pl-4">
          <Card radius="sm" className="w-full px-3 pt-2">
            <CardHeader className="flex flex-col items-center gap-6 md:justify-center md:flex-row">
              <div className="me-auto">
                <Image
                  src={Company1}
                  alt="image"
                  radius="none"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col me-auto md:-ml-28">
                <h2 className="text-base font-medium sm:text-lg">
                  {data.job.title}
                </h2>
                <h4 className="text-sm sm:text-base text-blue">
                  {data.job.company}
                </h4>
                <p className="text-sm sm:text-base text-[#16a34a]">
                  {data.job.salary}
                </p>
                <p className="text-sm sm:text-base">
                  {data.job.location} - {data.job.type}
                </p>
              </div>
              <div className="flex flex-row gap-2 mx-auto md:mx-0 md:flex-col md:ml-auto">
                <Button
                  variant="bordered"
                  className="font-semibold border-blue text-blue hover:bg-blue hover:text-white"
                >
                  <FaRegBookmark /> Simpan
                </Button>
                <Button
                  onPress={onOpen}
                  className="font-semibold text-white bg-blue "
                >
                  Lamar Pekerjaan
                </Button>
                <Modal
                  backdrop="opaque"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  classNames={{
                    backdrop:
                      "bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(255,255,255,0.5)]",
                  }}
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                      exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      },
                    },
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          <h2 className="text-base font-medium sm:text-lg">
                            Lamar Pekerjaan{" "}
                            <span className="text-blue">
                              {data.job.company}
                            </span>{" "}
                            sebagai{" "}
                            <span className="text-blue">{data.job.title}</span>
                          </h2>
                        </ModalHeader>
                        <ModalBody>
                          <h2 className="text-base font-medium">
                            Informasi Kontak
                          </h2>
                          {user.map((user, index) => (
                            <div key={index}>
                              <div className="flex flex-col pb-2">
                                <label htmlFor="name">Nama</label>
                                <p className="text-sm">{user.name}</p>
                              </div>
                              <div className="flex flex-col pb-2">
                                <label htmlFor="email">Email</label>
                                <p className="text-sm">{user.email}</p>
                              </div>
                              <div className="flex flex-col pb-2">
                                <label htmlFor="phone">No Hp</label>
                                <p className="text-sm">{user.phone}</p>
                              </div>
                              <div className="flex flex-col gap-2">
                                <label htmlFor="cv">Pilih CV</label>
                                <div className="relative">
                                  <input
                                    type="file"
                                    name="cv"
                                    id="cv"
                                    className="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                  />
                                  {cvSelected ? (
                                    <div className="px-4 py-2 text-sm text-center text-white bg-green-500 rounded cursor-pointer">
                                      CV telah dipilih
                                    </div>
                                  ) : (
                                    <div className="px-4 py-2 text-sm text-center text-white bg-blue-500 rounded cursor-pointer">
                                      Upload CV
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Batal
                          </Button>
                          <Button color="primary" onPress={handleApply}>
                            Kirim
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </CardHeader>
            <CardBody className="flex flex-col border-t-2">
              <h2 className="text-base font-medium sm:text-xl text-blue">
                Informasi Pekerjaan
              </h2>
              <div className="flex flex-col gap-2 pt-2">
                <h4 className="text-base font-medium sm:text-lg">
                  Syarat Pekerjaan :
                </h4>
                <ul>
                  {data.job.requirements.map((requirement, index) => (
                    <li key={index}>
                      {index + 1}. {requirement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col mt-4 gap2">
                <h4 className="text-base font-medium sm:text-lg">
                  Kualifikasi Keahlian :
                </h4>
                <ul>
                  {data.job.skills.map((skill, idx) => (
                    <li key={idx}>
                      {idx + 1}. {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col mt-4 gap2">
                <h4 className="text-base font-medium sm:text-lg">Benefit :</h4>
                <ul>
                  {data.job.benefit.map((benefit, idx) => (
                    <li key={idx}>
                      {idx + 1}. {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col mt-4 gap2">
                <h4 className="text-base font-medium sm:text-lg">
                  Tanggung Jawab :
                </h4>
                <ul>
                  {data.job.responsibility.map((resp, idx) => (
                    <li key={idx}>
                      {idx + 1}. {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-sm text-gray-600">{data.job.date}</p>
            </CardFooter>
          </Card>
          <AboutCompany company={data.company} />
        </section>
      ))}
    </>
  );
};

export default DetailLoker;
