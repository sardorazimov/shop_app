import Sidebar from "@/components/Headers/sidebar"


const SiteLayout = ({
    children
}:{
    children:React.ReactNode
}
) => {
  return (
    <main className="">
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </main>
  )
}

export default SiteLayout
