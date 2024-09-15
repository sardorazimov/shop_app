
import Sidebar from "@/components/Headers/sidebar"


const Homelayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <main className="">
      <div className=""></div>
      {children}
    </main>
  )
}

export default Homelayout
