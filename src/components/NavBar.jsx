"use client"
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { IoMailOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";


const NavBar = () => {
    const pathName = usePathname()
    return (
        <div className="border-y-2 border-r-2 border-secondary shadow-lg shadow-black/50">
            <nav>
                <div className="flex  flex-col gap-8 px-4 py-7 text-3xl">
                    <Link href={'/'}  className={`${pathName === '/' && 'text-secondary'}`}> <BiHomeAlt /> </Link>
                    <Link href={'/project'} className={`${pathName === '/project' && 'text-secondary'}`}> <AiOutlineProject /> </Link>
                    <Link href={'/blogs'} className={`${pathName === '/blogs' && 'text-secondary'}`}> <VscBook /> </Link>
                    <Link href={'/contact'} className={`${pathName === '/contact' && 'text-secondary'}`}> <IoMailOutline /> </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;