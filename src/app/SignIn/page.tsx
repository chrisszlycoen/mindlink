'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SnowBackground from "@/components/SnowBackground";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 flex items-center justify-center pt-16">
      <SnowBackground/>
 
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 space-y-6 border border-cyan-400/20">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-black">Welcome Back</h1>
            <p className="text-black/30">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black/40">Email</Label>
              <Input
                className="border-none bg-black/5 placeholder:text-black/30 text-black/70"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="password" className="text-black/40">Password</Label>
              <Input
                id="password"
                placeholder="Enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                className="border-none bg-black/5 pr-10 placeholder:text-black/30 text-black/70"
              />
              <button
                type="button"
                onClick={(e) => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 text-black/40 hover:text-cyan-400 transition cursor-pointer"
              >
                {showPassword ? <Eye size={24} /> : <EyeOff size={24} />}
              </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 ">
                    <Checkbox id="remember" className="cursor-pointer text-cyan-400"/>
                    <label htmlFor="remember" className="text-black/70">Remember me</label>
                </div>
                <a href="#" className="text-black/70 text-sm hover:text-cyan-300 transition">Forgot password?</a>
            </div>
            <button 
            type="submit"
            className="w-full cursor-pointer bg-cyan-400 hover:bg-cyan-300 rounded-xl py-2 transistion"
            >Sign In</button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t text-cyan-400"/>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-black/75 rounded-2xl">Or Continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full cursor-pointer hover:text-cyan-400 border-none transistion">
                <Github className="ar-2 h-4 w-4 "/>Github
              </Button>
              <Button variant="outline" className="w-full cursor-pointer hover:text-cyan-400 border-none transistion">
                <Mail className="ar-2 h-4 w-4 "/>Google
              </Button>
          </div>
          <div className="text-center text-sm text-black/70">
            Don't have an account?{" "}
            <Link href="/SignUp" className="text-gray-700 hover:text-cyan-400 space-x-2">Sign Up</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}