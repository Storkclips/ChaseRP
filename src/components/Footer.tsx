
import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-amber-400 text-black mt-auto w-full">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
        <div className="font-semibold tracking-wide text-center sm:text-left">
          ChaseRP is striving to create an exciting and immersive roleplay experience <span className="text-red-600">for all</span>.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:underline">Contact us via email</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Legal Notice</a>
        </div>
      </div>
    </footer>
  )
}
