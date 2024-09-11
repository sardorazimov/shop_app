
import Sidebar from "@/components/Headers/sidebar"


const Homelayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <main className="">
      <div className="fixed lg:w-52"><Sidebar /></div>
      {children}
    </main>
  )
}

export default Homelayout
