// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
} from "@nextui-org/react";

const ProfileInput = () => {
  const [cvSelected, setCvSelected] = useState(false);

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
      name: "Password",
      placeholder: "********",
      type: "password",
    },
    {
      id: 5,
      name: "Confirm Password",
      placeholder: "********",
      type: "password",
    },
    {
      id: 6,
      name: "Address",
      placeholder: "Jl. Setiabudi No. 1",
      type: "text",
    },
  ];

  const handleFileChange = () => {
    setCvSelected(!cvSelected);
  };

  return (
    <section className="flex flex-col my-10 md:px-32 2xl:px-72">
      <Card radius="sm" className="px-8 py-4">
        <CardHeader>
          <h2 className="text-xl font-semibold">Ubah Profil Anda</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-10 md:flex-row ">
          <Image src="https://i.pravatar.cc/300" />
          <div className="flex flex-col">
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
            {/* <div className="mb-2">
              <Input
                variant="bordered"
                radius="sm"
                key="email"
                labelPlacement="outside-left"
                placeholder="johndoe@example.com"
                type="email"
                label="Email"
              />
            </div>
            <div className="mb-2">
              <Input
                variant="bordered"
                radius="sm"
                key="phone"
                labelPlacement="outside-left"
                placeholder="08123456789"
                type="phone"
                label="No Hp"
              />
            </div>
            <div className="mb-2">
              <Input
                variant="bordered"
                radius="sm"
                key="password"
                labelPlacement="outside-left"
                placeholder="*******"
                type="password"
                label="Password"
              />
            </div>
            <div className="mb-2">
              <Input
                variant="bordered"
                radius="sm"
                key="confirm-password"
                labelPlacement="outside-left"
                placeholder="*******"
                type="password"
                label="Confirm Password"
              />
            </div>
            <div className="mb-2">
              <Input
                variant="bordered"
                radius="sm"
                key="address"
                labelPlacement="outside-left"
                placeholder="Jl. Mutiara Indah"
                type="text"
                label="Address"
              />
            </div> */}
            <div className="relative mt-2">
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
                <div className="px-4 py-2 text-sm text-center text-white rounded cursor-pointer bg-blue">
                  Upload CV
                </div>
              )}
            </div>
          </div>
        </CardBody>
        <CardFooter className="w-full mx-auto">
          <Button className="mx-auto text-white bg-blue">
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ProfileInput;
