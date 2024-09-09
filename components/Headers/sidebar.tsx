'use client'


import { Home, Laptop, School } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";
import { GiElectric } from "react-icons/gi";

const Sidebar = () => {
  const currentPath = usePathname()
  const [toggle, setToggle] = useState(false)
  return (
    <section className="lg:flex hidden overflow-scroll">
      <div className='py-16 border-r h-screen  lg:w-52'>
        <div className=' '>
          <h1 className="font-semibold text-3xl  text-center mt-2
        text-transparent bg-gradient-to-b from-blue-700
        to-rose-800  bg-clip-text backdrop-blur-lg">Shop App</h1>
        </div>
        <div className="lg:flex flex-col mt-10 ">
          <nav className="flex-col flex gap-4">
            <div className="w-full flex flex-col ">
              <div className="flex cursor-pointer  ">
                <Link href={'/test'}
                  className={currentPath === "/test" ? "text-green-500 font-semibold  px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <Laptop />
                  Electronik
                </Link>
              </div>
              <div className="flex">
                <Link href={'/page-two'}
                  className={currentPath === "/page-two" ? " px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <Home />
                  Home
                </Link>
              </div>
              <div className="flex">
                <Link href={'/page-three'}
                  className={currentPath === "/page-three" ? " px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <School />
                  Travel
                </Link>
              </div>
              <div className="flex cursor-pointer  ">
                <Link href={'/test'}
                  className={currentPath === "/test" ? " px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <Laptop />
                  Electronik
                </Link>
              </div>
              <div className="flex">
                <Link href={'/page-two'}
                  className={currentPath === "/page-two" ? " px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <Home />
                  Home
                </Link>
              </div>
              <div className="flex">
                <Link href={'/page-three'}
                  className={currentPath === "/page-three" ? " px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold " :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <School />
                  Travel
                </Link>
              </div>
              <div className="flex cursor-pointer  ">
                <Link href={'/test'}
                  className={currentPath === "/test" ? " px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <Laptop />
                  Electronik
                </Link>
              </div>
              <div className="flex">
                <Link href={'/page-two'}
                  className={currentPath === "/page-two" ? " px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <Home />
                  Home
                </Link>
              </div>
              <div className="flex">
                <Link href={'/page-three'}
                  className={currentPath === "/page-three" ? "px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full text-green-500 font-semibold" :
                    "text-slate-900 text-xl font-medium px-5 flex gap-1 items-center text-center cursor-pointer hover:bg-muted rounded-lg w-full"}>
                  <School />
                  Travel
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

  )
}

export default Sidebar
