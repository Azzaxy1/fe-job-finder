// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const ProfileInput = ({ type }) => {
  const [cvSelected, setCvSelected] = useState(false);
  const { quillRef } = useQuill();

  const inputProfile = [
    {
      id: 1,
      name: "Name",
      placeholder: "John Doe",
      type: "text",
    },
    {
      id: 2,
      name: "Email",
      placeholder: "johndoe@example.com",
      type: "email",
    },
    {
      id: 3,
      name: "Phone",
      placeholder: "081234567890",
      type: "number",
    },
    {
      id: 4,
      name: "Address",
      placeholder: "Jl. Setiabudi No. 1",
      type: "text",
    },
    {
      id: 5,
      name: "Password",
      placeholder: "********",
      type: "password",
    },
    {
      id: 6,
      name: "Confirm Password",
      placeholder: "********",
      type: "password",
    },
  ];

  const handleFileChange = () => {
    setCvSelected(!cvSelected);
  };

  return (
    <section className="flex flex-col my-10 md:px-32 2xl:px-72">
      <Card radius="sm" className="px-8 py-10 h-[850px]">
        <CardHeader>
          <h2 className="text-xl font-semibold">
            Ubah Profil Anda sebagai {type === "hire" ? "Hire" : "User"}
          </h2>
        </CardHeader>
        <CardBody className="flex flex-col min-h-[600px] gap-10 md:flex-row ">
          <Image src="https://i.pravatar.cc/300" />
          <article className="h-fit">
            <div className="flex flex-col mb-2">
              {inputProfile.map((input) => (
                <div key={input.id} className="mb-2">
                  <Input
                    variant="bordered"
                    radius="sm"
                    key={input.name}
                    labelPlacement="outside-left"
                    placeholder={input.placeholder}
                    type={input.type}
                    label={input.name}
                  />
                </div>
              ))}
            </div>
            <div className="relative mb-2">
              <input
                type="file"
                name="cv"
                id="cv"
                className="absolute inset-0 bottom-0 z-50 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              {cvSelected ? (
                <div className="px-4 py-2 text-sm text-center text-white bg-green-500 rounded cursor-pointer">
                  CV telah dipilih
                </div>
              ) : (
                <div className="px-4 py-2 text-sm text-center text-white rounded cursor-pointer bg-blue">
                  Upload CV
                </div>
              )}
            </div>
            <label htmlFor="description">Tambahkan Deskripsi</label>
            <div
              style={{ height: 200 }}
              className="mt-2 w-[230px] md:w-[450px]"
            >
              <div ref={quillRef} />
            </div>
          </article>
        </CardBody>
        <CardFooter className="flex flex-col items-center w-full gap-4">
          <Button radius="sm" className="text-white bg-blue">
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

ProfileInput.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProfileInput;
