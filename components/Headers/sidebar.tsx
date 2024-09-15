'use client'


import { BadgeDollarSign, Home, Laptop, Phone, School, Settings, ShoppingBag, Tag, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";
import { GiElectric } from "react-icons/gi";
import Mobilesidebar from "./mobilesidebar";
import { Button } from "../ui/button";

interface SidebarProps {

}

const categories = [
  "All Products",
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Toys",
  "Sports",
  "Beauty",
]


const Sidebar = ({

}:SidebarProps) => {
  const currentPath = usePathname()
  const pathname = usePathname() //
  const [activeCategory, setActiveCategory] = useState("All Products")
  return (
    <section className="fixed w-64 ">
         <aside className="hidden md:block w-64   bg-muted shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <nav>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant={activeCategory === category ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
    </section>

  )
}

export default Sidebar
