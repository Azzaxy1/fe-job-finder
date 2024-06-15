import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '@/views/Auth/pages/LoginPage'
import RegisterPage from '@/views/Auth/pages/RegisterPage'
import Landing from '@/views/Landing/pages/Landing'
import SearchLokerPage from './views/Worker/pages/SearchLokerPage'
import Dashboard from './views/Hire/pages/Dashboard'
import ManageJobs from './views/Hire/pages/ManageJobs'
import HireProfile from './views/Hire/pages/HireProfile'
import NoteFoundPage from './views/Error/pages/NoteFoundPage'
import TipsPage from './views/Tips/page/TipsPage'
import DetailTips from './views/Tips/page/DetailTips'
import WorkerProfilePage from './views/Worker/pages/WorkerProfilePage'
import DetailJobPage from './views/Hire/pages/DetailJobPage'
import CreateJobPage from './views/Hire/pages/CreateJobPage'

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Landing />} />
        <Route path="jobs" element={<SearchLokerPage />} />
        <Route path="tips" element={<TipsPage />} />
        <Route path="tips/:id" element={<DetailTips />} />
        <Route path="profile" element={<WorkerProfilePage />} />
      </Route>

      {/* Auth */}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* Hire */}
      <Route path="hire-dashboard" element={<Dashboard />} />
      <Route path="manage-jobs" element={<ManageJobs />} />
      <Route path="manage-jobs/:id" element={<DetailJobPage />} />
      <Route path="hire-profile" element={<HireProfile />} />
      <Route path='create-job' element={<CreateJobPage/>} />

      <Route path="*" element={<NoteFoundPage />} />
    </Routes>
  )
}

export default App
