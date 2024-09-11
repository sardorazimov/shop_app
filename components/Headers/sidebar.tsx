'use client'


import { BadgeDollarSign, Home, Laptop, Phone, School, Settings, ShoppingBag, Tag, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";
import { GiElectric } from "react-icons/gi";
import Mobilesidebar from "./mobilesidebar";

interface SidebarProps {

}
const Sidebar = ({

}:SidebarProps) => {
  const currentPath = usePathname()
  const pathname = usePathname() //
  return (
    <section className="lg:flex py-16">
      <aside className="w-52   border-r hidden md:block">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold">E-Shop</span>
          <ShoppingBag className="h-6 w-6" />
        </div>
        <nav className="p-4 lg:flex hidden">
          <ul className="space-y-2">
            <li className="flex  gap-4 w-full ">
              <div className="flex flex-col">
               <div className="flex gap-2">
                <Link href={'/home/welcome'} className={currentPath === "/page-one" ? "text-green-500 font-semibold " : "flex font-medium gap-1 text-slate-600"}>
                 <Laptop  className="text-blue-600"/> Welcome
               </Link> 
                </div>
               <div className="flex gap-2">
                <Link href={'/'} className={currentPath === "/page-one" ? "text-green-500 font-semibold " : "flex font-medium gap-1 text-slate-600"}>
                 <BadgeDollarSign /> Welcome
               </Link> 
                </div>
               <div className="flex gap-2">
                <Link href={'/'} className={currentPath === "/page-one" ? "text-green-500 font-semibold " : "flex font-medium gap-1 text-slate-600"}>
                 <Phone /> Welcome
               </Link> 
                </div>
               <div className="flex gap-2">
                <Link href={'/'} className={currentPath === "/page-one" ? "text-green-500 font-semibold " : "flex font-medium gap-1 text-slate-600"}>
                 <Laptop /> Welcome
               </Link> 
                </div>
               <div className="flex gap-2">
                <Link href={'/'} className={currentPath === "/page-one" ? "text-green-500 font-semibold " : "flex font-medium gap-1 text-slate-600"}>
                 <Laptop /> Welcome
               </Link> 
                </div>
               <div className="flex gap-2">
                <Link href={'/'} className={currentPath === "/page-one" ? "text-green-500 font-semibold " : "flex font-medium gap-1 text-slate-600"}>
                 <Laptop /> Welcome
               </Link> 
                </div>
               <div className="flex gap-2">
                <Link href={'/'} className={currentPath === "/page-one" ? "text-green-500 font-semibold " : "flex font-medium gap-1 text-slate-600"}>
                 <Laptop /> Welcome
               </Link> 
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      <>
        <Mobilesidebar />
       </>
    </section>

  )
}

export default Sidebar
