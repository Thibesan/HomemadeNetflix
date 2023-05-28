"use client";

import { useCallback, useState } from "react";
import Input from "../../components/Input";

export default function Auth() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const [variant, setVariant] = useState('login')
  const toggleVariant = useCallback(() => {
    //Toggle Variant depending on current auth state, default to login
    setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login')
  }, [])
  
    return (
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img src="/images/logo.png" alt="logo" className="h-12" />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant == 'login' ? 'Sign In' : 'Register'}
              </h2>
              <div className="flex flex-col gap-4">
                {variant == 'register' && (
                <Input 
                    label="Username"
                    onChange={(e: any) => setName(e.target.value)}
                    id="email"
                    value={name}
                  />
                )}
                <Input 
                  label="Email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  value={email}
                />
                <Input 
                  label="Password"
                  onChange={(e: any) => setPassword(e.target.value)}
                  id="email"
                  type="password"
                  value={password}
                />
              </div>
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {variant == 'login' ? 'Login' : 'Sign Up'}
              </button>
              <p className="text-neutral-500 mt-12 flex items-center">
                {variant == 'login' ? 'First Timer?' : 'Dont wanna be here?'}
                <span className="flex-grow"></span>
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                  {variant == 'login' ? 'Create an Account' : 'Sign in Instead'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }