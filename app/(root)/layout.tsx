import Sidebar from "@/components/Headers/sidebar"


const SiteLayout = ({
    children
}:{
    children:React.ReactNode
}
) => {
  return (
    <main className="">
        {children}
    </main>
  )
}

export default SiteLayout
