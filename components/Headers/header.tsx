
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { BellIcon, MountainIcon, SearchIcon } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img src="/logo.png" className="h-7 w-7" />
          <span className="font-bold text-lg">Shop Inc</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <form className="relative hidden md:block">
            <Input type="search" placeholder="Search..." className="pl-10 pr-4 h-9 rounded-md text-sm" />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </form>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-6 w-6" />
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}


