'use client'
import { useState } from 'react'
import { Menu, Search, ShoppingCart, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Sidebar from '@/components/Headers/sidebar'

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

const page = () => {
  const [activeCategory, setActiveCategory] = useState("All Products")
  return (
    <section className="py-20 flex ">
       <div className="min-h-screen bg-gray-100">
      {/* Sticky Header */}
      <header className="fixed mt-16 backdrop-blur-lg top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">E-Shop</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Search..."
              className="hidden md:block w-64"
            />
            <Button size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex">
          <h2 className="text-2xl font-bold mb-6">{activeCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product cards would go here */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600 mb-4">Short product description goes here.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$99.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
    </section>
  )
}

export default page
