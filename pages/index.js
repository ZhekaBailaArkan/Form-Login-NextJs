import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <div className="w-[35%] h-auto py-6 px-10 bg-white rounded">
        <div className="flex justify-center items-center space-x-4">
          <div>
            <Image src="/stm.png" width={70} height={70} alt="none" />
          </div>
          <div>
              <span className="text-4xl block font-extrabold ">E-AGENDA</span>
              <span className="font-normal">SMK NEGERI 1 MAJALENGKA</span>
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-2xl font-bold flex justify-center">Masuk</h1>
        </div>
        <div className="space-y-5">
          <input type="text" className="block w-[100%] h-[40px] px-4 border-solid border-2 rounded-lg" placeholder="Email"/>
          <input type="password" className="block w-[100%] h-[40px] px-4 border-solid border-2 rounded-lg" placeholder="Password"/>
        </div>
        <div className="flex justify-between my-6">
          <div className="space-x-2 flex items-center">
            <input type="checkbox" />
            <label label>ingat saya</label>
          </div>
          <div>
            <Link href="/" className="capitalize hover:underline text-indigo-500">lupa kata sandi?</Link>
          </div>
        </div>
        <div>
          <button className="w-[100%] h-[40px] bg-indigo-700 text-white rounded-lg hover:bg-indigo-600">Masuk</button>
        </div>
      </div>
    </div>
  )
}
