import Link from "next/link";

interface Props {
  name:string;
  icon:React.ReactNode,
  path:string;
}



export const SidebarMenuItem = ({ name, icon, path }:Props) => {
  
  return (
    <Link
      href={path}
      className="text-lg font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
    >
      <div className="flex gap-3 items-center">

        { icon }

        <span className="">{name}</span>
        
      </div>
    </Link>
  )
}
