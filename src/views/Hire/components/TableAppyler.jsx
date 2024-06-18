import { Button, Chip, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from '@nextui-org/react'
import React, { useCallback, useState } from 'react'
import { columns, users } from '../index'

const statusColorMap = {
  accept: 'success',
  pending: 'danger',
  rejected: 'warning'
}

const status = ['Accept', 'Pending', 'Rejected']

const TableAppyler = () => {
  const [page, setPage] = useState(1)
  const rowsPerPage = 7

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.image }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        )
      case 'phone':
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold text-fontColor">{user.phone}</p>
          </div>
        )
      case 'address':
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold text-fontColor">{user.address}</p>
          </div>
        )
      case 'cv':
        return (
          <Button radius='sm' size="sm" className="text-white bg-blue">
            <a href={user.cv} download={user.cv} className="text-sm capitalize text-bold">Download CV</a>
          </Button>
        )
      case 'status':
        return (
          <Chip className="text-sm capitalize" radius='sm' color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        )
      case 'actions':
        return (
          <div className="flex items-center gap-2">
            <Select label="Status" size="sm" defaultValue={status[0]}>
              {status.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </Select>
            <Tooltip content="Simpan Perubahan">
              <Button radius='sm' size="sm" className="text-white bg-blue">
                Simpan
              </Button>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const paginatedUsers = users.slice((page - 1) * rowsPerPage, page * rowsPerPage)

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'center'}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={paginatedUsers}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div>
        <Pagination
        total={Math.ceil(users.length / rowsPerPage)}
        initialPage={1}
        onChange={(page) => setPage(page)}
        isCompact
        showControls
        showShadow
        color='primary'
      />
      </div>
    </section>
  )
}

export default TableAppyler
