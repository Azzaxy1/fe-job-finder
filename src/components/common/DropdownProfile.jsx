import React from 'react'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User
} from '@nextui-org/react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DropdownProfile = ({ type, authUser, onLogout, authHire }) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        {type === 'hire'
          ? (
          <div className="flex flex-row items-center gap-4">
            <Avatar
              src={authHire.foto}
              isBordered
              as="button"
              radius="sm"
              className="transition-transform w-28"
              name={authHire.name}
              size="md"
            />
            <p>{authHire.name}</p>
          </div>
            )
          : (
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: authUser.foto
            }}
            description={authUser.email}
            name={authUser.name}
          />
            )}
      </DropdownTrigger>
      <DropdownMenu
        disabledKeys={['user']}
        aria-label="Profile Action"
        variant="flat"
      >
        <DropdownItem key="user" textValue="user" className="gap-2 text-black">
          <p className="font-semibold">Masuk sebagai</p>
          <p className="font-semibold">
            {type === 'user' ? authUser.name : authHire.name}
          </p>
        </DropdownItem>
        <DropdownItem
          key="profile"
          textValue="profile"
          className="text-fontColor"
        >
          <Link to={type === 'hire' ? '/hire-profile' : '/profile'}>
            My Profile
          </Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          textValue="logout"
          color="danger"
          className="text-danger"
          onClick={onLogout}
        >
          <Link to="/login">Logout</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

DropdownProfile.propTypes = {
  type: PropTypes.string,
  authUser: PropTypes.object,
  authHire: PropTypes.object,
  onLogout: PropTypes.func
}

export default DropdownProfile
