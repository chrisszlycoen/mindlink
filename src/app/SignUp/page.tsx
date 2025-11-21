'use client'
import { useState } from "react";
import {motion} from "framer-motion";
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Eye, EyeOff, Github, Mail } from "lucide-react"
import SnowBackground from "@/components/SnowBackground";



export default function SignUp(){
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');
    const [password, setPassword] = useState('');
    const[showPassword, setShowPassword] = useState(false);
    const[confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const[error, setError] = useState('');


    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Passwords do not match!");
            return;
        }
        else{
            setError("");
        }

        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        const message = response.ok 
            ? "Account created successfully!" 
            : `Error: ${data.message}`;
        
        setError(response.ok ? "" : data.message);
        
        // Create a styled alert box
        const alertBox = document.createElement('div');
        alertBox.className = `alert ${response.ok ? 'alert-success' : 'alert-error'}`;
        alertBox.innerText = message;
        document.body.appendChild(alertBox);
        
        // Automatically remove the alert after 3 seconds
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
        
        // Add CSS styles for alert box
        const style = document.createElement('style');
        style.innerHTML = `
            .alert {
                margin: auto;
                height: 100px;
                right: 20px;
                left: 20px;
                padding: 10px 20px;
                border-radius: 10px;
                color: white;
                font-weight: bold;
                z-index: 1000;
                position: fixed;
                top: 20px;
                animation: fadeIn 0.7s, fadeOut 0.7s 2.5s forwards;
            }
            .alert-success {
                display: flex;
                align-items: center;
                background-color: green;
                opacity: 0.6;
            }
            .alert-error {
                display: flex;
                align-items: center;
                background-color: red;
                opacity: 0.6;
            }
            @keyframes fadeIn {
                from {
                    top: -50px;
                    opacity: 0;
                }
                to {
                    top: 20px;
                    opacity: 0.6;
                }
            }
            @keyframes fadeOut {
                from {
                    top: 20px;
                    opacity: 0.6;
                }
                to {
                    top: -50px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    };

    return(
        <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 flex items-center justify-center pt-6">
            <SnowBackground />        

            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
            >
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 space-y-6 border border-cyan-400/20">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter text-black">Hello, Welcome</h1>
                        <p className="text-black/30 ">Enter your credentials to have your own acconut</p>
                    </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-black/40">Email</Label>
                                <Input
                                className="border-none bg-black/5 placeholder:text-black/30 text-black/70"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                />
                            </div>
                            <div className="space-y-2 relative">
                                <Label htmlFor="name" className="text-black/40">Username</Label>
                                <Input
                                className="border-none bg-black/5 placeholder:text-black/30 text-black/70"
                                id="name"
                                type="text"
                                placeholder="Enter your username"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                required
                                />
                            </div>
                            <div className="space-y-2 relative">
                                <Label htmlFor="password" className="text-black/40">Password</Label>
                                <Input
                                className="border-none bg-black/5 placeholder:text-black/30 text-black/70"
                                id="password"
                                type={showPassword? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                required
                                />
                                <button
                                type="button"
                                onClick={(e)=> setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 text-black/70 hover:text-cyan-400 transition cursor-pointer"
                                >
                                    {showPassword?<Eye size={24}/> : <EyeOff size={24}/>}
                                </button>
                            </div>
                            <div className="space-y-2 relative">
                                <Label htmlFor="confirmPassword" className="text-black/40">Confirm Password</Label>
                                <Input
                                className="border-none bg-black/5 placeholder:text-black/30 text-black/70 text-base" 
                                id="confirmPassword"
                                placeholder="confirm your password"
                                type={showConfirmPassword? "text":"password"}
                                value={confirmPassword}
                                onChange={(e)=> setConfirmPassword(e.target.value)}
                                />
                                <button
                                type="button"
                                onClick={(e)=>setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 text-black/70 hover:text-cyan-400 cursor-pointer"
                                >
                                    {showConfirmPassword? <Eye size={24}/>: <EyeOff size={24}/>}
                                </button>
                            </div>
                            {error && <p className="text-red-500 text-xs">{error}</p>}
                            <button
                            type="submit"
                            className="w-full cursor-pointer bg-cyan-400 hover:bg-cyan-300 py-2 rounded-xl transition"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t text-cyan-400"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 rounded-2xl text-black/75">Or Continue With</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="w-full cursor-pointer hover:text-cyan-300 transition border-none">
                                <Github className="ar-2 h-4 w-4"/>Github
                            </Button>
                            <Button variant="outline" className="w-full cursor-pointer hover:text-cyan-300 transition border-none">
                                <Mail className="ar-2 h-4 w-4"/>Google
                            </Button>
                        </div>
                        
                        <div className="text-center text-sm text-black/70">
                             Already have an account?{" "}   
                            <Link href="/SignIn" className="text-gray-700 hover:text-cyan-400">Sign In</Link>
                        </div>
                </div>
            </motion.div>
        </div>
    )

}