'use client'
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shuffle, Search } from "lucide-react"

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99 },
    { id: 3, name: "Running Shoes", category: "Sports", price: 89.99 },
    { id: 4, name: "Coffee Maker", category: "Home", price: 49.99 },
    { id: 5, name: "Backpack", category: "Fashion", price: 39.99 },
    { id: 6, name: "Headphones", category: "Electronics", price: 149.99 },
    { id: 7, name: "Yoga Mat", category: "Sports", price: 29.99 },
    { id: 8, name: "Blender", category: "Home", price: 79.99 },
    { id: 9, name: "Sunglasses", category: "Fashion", price: 59.99 },
    { id: 10, name: "Smart Watch", category: "Electronics", price: 199.99 },
  ]

const page = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [randomSeed, setRandomSeed] = useState(0)
  
    const categories = ["All", ...new Set(products.map((product) => product.category))]
  
    const filteredProducts = useMemo(() => {
      let filtered = products
  
      if (selectedCategory !== "All") {
        filtered = filtered.filter((product) => product.category === selectedCategory)
      }
  
      if (searchQuery) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
  
      // Fisher-Yates shuffle algorithm
      const shuffled = [...filtered]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
  
      return shuffled
    }, [selectedCategory, searchQuery, randomSeed])
  return (
    <div className="py-16">
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">E-Shop Products</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Select onValueChange={(value) => setSelectedCategory(value)}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={() => setRandomSeed(Math.random())}>
          <Shuffle className="mr-2 h-4 w-4" /> Shuffle
        </Button>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{product.category}</p>
            </CardContent>
            <CardFooter>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </CardFooter>
          </Card>
        ))} 
        </div>

      </div>
    </div>
    </div>
  )
}

export default page
