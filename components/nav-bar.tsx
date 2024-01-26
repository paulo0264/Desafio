"use client"
import { usePathname } from "next/navigation"
import Link from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

const navLinks = [
    {
        path: "/",
        nama: "Home",
    },
    {
        path: "sobre",
        nama: "Sobre",
    },
];

function Navbar(){
    const pathname = usePathname() || "/";

        const [hoverLink, setHoverLink] = useState(pathname);

    return <div className="mx-auto border w-[600px] border-green-800/90 rounded-full mb-12 sticky top-2 z-[100] bg-stone-800/70 backdrop-blur-md">
            <nav className="flex items-center justify-center gap-2 w-full z-[100] rounded-lg">tssss</nav>
        </div>
    
}

export default Navbar;