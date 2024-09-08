import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const RootHomePage = () => {
  return (
    <div className='py-[70px]'>
      <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full bg-gradient-to-b from-fuchsia-500 to-blue-400">
          <div className="container flex flex-col-reverse items-center justify-between gap-8 px-4 py-12 md:flex-row md:gap-16 md:py-24 lg:py-32">
            <div className="max-w-xl space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl">
                Discover the Best Products for Your Home
              </h1>
              <p className="text-muted md:text-xl">
                Explore our curated collection of high-quality home goods and accessories. Find the perfect items to
                elevate your living space.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
                <Button variant={'default'} className="bg-primary-foreground text-primary hover:bg-primary/90">
                  Shop Now
                </Button>
                <Button variant="outline" className="text-primary-foreground">
                  Learn More
                </Button>
              </div>
            </div>
            <img
              src="/phone/apple14pro.png"
              width="500"
              height="500"
              alt="Hero Image"
              className="max-w-[300px] rounded-xl sm:max-w-[400px] md:max-w-none"
              style={{ aspectRatio: "500/500", objectFit: "cover" }}
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="group rounded-xl bg-muted p-6 transition-all hover:bg-accent hover:text-accent-foreground">
              <img
                src="/phone/apple14pro.png"
                width="300"
                height="300"
                alt="Featured Product"
                className="mx-auto mb-4 max-h-[200px] rounded-lg object-contain"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="mb-2 text-xl font-semibold">Cozy Throw Blanket</h3>
              <p className="text-muted-foreground">Snuggle up in style with our luxurious throw blanket.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold">$49.99</span>
                <Button variant="link">Shop Now</Button>
              </div>
            </div>
            <div className="group rounded-xl bg-muted p-6 transition-all hover:bg-accent hover:text-accent-foreground">
              <img
                src="/phone/apple14pro.png"
                width="300"
                height="300"
                alt="Featured Product"
                className="mx-auto mb-4 max-h-[200px] rounded-lg object-contain"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="mb-2 text-xl font-semibold">Minimalist Vase</h3>
              <p className="text-muted-foreground">Elevate your space with our modern and sleek vase.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold">$29.99</span>
                <Button variant="link">Shop Now</Button>
              </div>
            </div>
            <div className="group rounded-xl bg-muted p-6 transition-all hover:bg-accent hover:text-accent-foreground">
              <img
                src="/phone/apple14pro.png"
                width="300"
                height="300"
                alt="Featured Product"
                className="mx-auto mb-4 max-h-[200px] rounded-lg object-contain"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="mb-2 text-xl font-semibold">Ceramic Planter</h3>
              <p className="text-muted-foreground">Bring nature into your home with our stylish planter.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold">$39.99</span>
                <Button variant="link">Shop Now</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="text-muted-foreground md:text-xl">
                Hear from our satisfied customers about their experience with our products.
              </p>
            </div>
            <div className="rounded-xl bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I absolutely love the quality and design of the products I\n purchased from Acme Store. The customer
                service was also\n top-notch."
              </p>
            </div>
            <div className="rounded-xl bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I'm so impressed with the attention to detail and\n craftsmanship of the products I ordered. They truly
                elevate my\n living space."
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Newsletter
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Stay Updated on Our Latest Products
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Sign up for our newsletter to receive exclusive offers, product updates, and inspiration for your home.
              </p>
            </div>
            <form className="mx-auto w-full max-w-md space-y-2">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button type="submit" variant={'default'} className="w-full">
                Subscribe
              </Button>
              <p className="text-xs text-muted-foreground">We respect your privacy. Your email will not be shared.</p>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm">&copy; 2024 Acme Store</p>
          <nav className="flex space-x-4">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default RootHomePage
