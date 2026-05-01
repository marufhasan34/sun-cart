'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ href, children }) => {
    const pathName = usePathname()
    const isActive = href === pathName
  return <Link href={href} className={`${isActive && 'border-b-3 border-yellow-500 pb-1'}`}>{children}</Link>;
};

export default NavLink;
