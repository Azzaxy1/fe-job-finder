import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const NoteFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Halaman Tidak Ditemukan | Job Finder</title>
      </Helmet>
      <main className="grid min-h-screen place-content-center">
        <section className="flex flex-col items-center justify-center space-y-4">
          <h1 className="font-semibold text-center text-8xl text-blue">
            Ooops!
          </h1>
          <p className="text-lg font-semibold">Halaman tidak ditemukan...</p>
          <Link
            to="/"
            className="px-6 py-3 text-lg font-semibold text-white rounded-lg bg-blue"
          >
            Kembali ke halaman utama
          </Link>
        </section>
      </main>
    </>
  )
}

export default NoteFoundPage
