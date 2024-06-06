// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const DropdownProfile = () => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        {/* <Avatar
                src="https://i.pravatar.cc/300"
                isBordered
                as="button"
                className="transition-transform border-blue"
                color="secondary"
                name="John Doe"
                size="sm"
              /> */}
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            src: "https://i.pravatar.cc/300",
          }}
          className="transition-transform"
          description="johndoe@example.com"
          name="John Doe"
        />
      </DropdownTrigger>
      <DropdownMenu
        disabledKeys={["user"]}
        aria-label="Profile Action"
        variant="flat"
      >
        <DropdownItem key="user" textValue="user" className="gap-2 text-black">
          <p className="font-semibold">Masuk sebagai</p>
          <p className="font-semibold">John Doe</p>
        </DropdownItem>
        <DropdownItem
          key="profile"
          textValue="profile"
          className="text-fontColor"
        >
          <Link to="/profile">My Profile</Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          textValue="logout"
          color="danger"
          className="text-danger"
        >
          <Link to="/login">Logout</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownProfile;
