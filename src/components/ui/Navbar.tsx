'use client';

import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from 'clsx';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>              
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
      </div>

      {/* Floating Navbar */}
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={clsx(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50",
          "w-[90%] md:w-[80%] lg:w-[70%]",
          "backdrop-blur-lg bg-black/50 border border-cyan-400/20",
          "rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.25)]",
          "px-6 py-3"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-cyan-400 text-xl font-bold tracking-widest">
              𝓜𝓲𝓷𝓭𝓛𝓲𝓷𝓴
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href="/"
                className="relative text-white text-sm uppercase tracking-wide hover:text-cyan-400 transition duration-300 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 border-cyan-400 text-cyan-400 
                       hover:bg-cyan-400 hover:text-black transition"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;