import CV from '@/assets/cv.pdf'
const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'PHONE', uid: 'phone' },
  { name: 'ADDRESS', uid: 'address' },
  { name: 'JOB', uid: 'job' },
  { name: 'CV', uid: 'cv' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ACTIONS', uid: 'actions' }
]

const users = [
  {
    id: 1,
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026703d',
    name: 'Tony Reichert',
    email: 'tony.reichert@example.com',
    phone: '08213424234',
    address: 'Jakarta',
    cv: CV,
    status: 'accept'
  },
  {
    id: 2,
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    name: 'Zoey Lang',
    email: 'zoey.lang@example.com',
    phone: '08213424234',
    address: 'Bandung',
    cv: CV,
    status: 'pending'
  },
  {
    id: 3,
    image: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    name: 'Jane Fisher',
    email: 'jane.fisher@example.com',
    phone: '08213424234',
    address: 'Medan',
    cv: CV,
    status: 'rejected'
  },
  {
    id: 4,
    image: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    name: 'William Howard',
    email: 'william.howard@example.com',
    phone: '08213424234',
    address: 'Surabaya',
    cv: CV,
    status: 'accept'
  },
  {
    id: 5,
    image: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    name: 'Kristen Copper',
    email: 'kristen.cooper@example.com',
    phone: '08213424234',
    address: 'Yogyakarta',
    cv: CV,
    status: 'rejected'
  },
  {
    id: 6,
    image: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    name: 'Kristen Copper',
    email: 'kristen.cooper@example.com',
    phone: '08213424234',
    address: 'Yogyakarta',
    cv: CV,
    status: 'rejected'
  },
  {
    id: 7,
    image: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    name: 'Kristen Copper',
    email: 'kristen.cooper@example.com',
    phone: '08213424234',
    address: 'Yogyakarta',
    cv: CV,
    status: 'rejected'
  }
]

const typeJob = [
  {
    id: 1,
    name: 'Full Time'
  },
  {
    id: 2,
    name: 'Part Time'
  },
  {
    id: 3,
    name: 'Remote'
  }
]

export { columns, users, typeJob }
