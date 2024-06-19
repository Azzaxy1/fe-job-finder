import { Button, Chip, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from '@nextui-org/react'
import React, { useCallback, useState } from 'react'
import { columns } from '../index'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUpdateApplyJob } from '@/states/applyJob/action'

const statusColorMap = {
  pending: 'danger',
  accept: 'success',
  rejected: 'warning'
}

const statusData = ['Pending', 'Accept', 'Reject']

const TableAppyler = () => {
  const dispatch = useDispatch()
  const apply = useSelector((state) => state.applyJob)

  const [page, setPage] = useState(1)
  const rowsPerPage = 7

  const renderCell = useCallback((user, columnKey, applyment, statusApply, handleSelectChange, handleSubmit) => {
    const cellValue = user[columnKey]
    const applymentJob = applyment.get_job

    switch (columnKey) {
      case 'name':
        // eslint-disable-next-line multiline-ternary
        return <User
          avatarProps={{ radius: 'lg', src: user.foto_url ? user.foto_url : null }}
          description={user.email}
          name={user.name}
        />
      case 'phone':
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold text-fontColor">{user.phone}</p>
          </div>
        )
      case 'address':
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold text-fontColor">{user.address || '-'}</p>
          </div>
        )
      case 'job':
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold text-fontColor">{applymentJob.title}</p>
          </div>
        )
      case 'cv':
        return (
          <Button radius='sm' size="sm" className="text-white bg-blue">
            <a href={user.file_url} download={user.file_url} className="text-sm capitalize text-bold">Download CV</a>
          </Button>
        )
      case 'status':
        return (
          <Chip className="text-sm capitalize" radius='sm' color={statusColorMap[applyment.status]} size="sm" variant="flat">
            {applyment.status}
          </Chip>
        )
      case 'actions':
        return (
          <div className="flex items-center gap-2">
            <Select label="Status" size="sm" placeholder={statusApply.charAt(0).toUpperCase() + statusApply.slice(1)} value={statusApply} onChange={handleSelectChange}>
              {statusData.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </Select>
            <Tooltip content="Simpan Perubahan">
              <Button radius='sm' size="sm" className="text-white bg-blue" onClick={handleSubmit}>
                Simpan
              </Button>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const paginatedApply = apply.slice((page - 1) * rowsPerPage, page * rowsPerPage)

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
        <TableBody items={paginatedApply}>
          {(applyment) => (
            <TableRow key={applyment.id}>
              {(columnKey) => {
                let statusApply = applyment.status
                const setStatusApply = (status) => {
                  statusApply = status
                }
                const handleSelectChange = (selectedValue) => {
                  const value = selectedValue.target.value
                  setStatusApply(value.toLowerCase())
                }

                const handleSubmit = () => {
                  dispatch(asyncUpdateApplyJob({ id: applyment.id_job, status: statusApply, idUser: applyment.id_user }))
                }

                return <TableCell>{renderCell(applyment.get_user, columnKey, applyment, statusApply, handleSelectChange, handleSubmit)}</TableCell>
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div>
        <Pagination
          total={Math.ceil(apply.length / rowsPerPage)}
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
