"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)

      if (email && password && username) {
        toast({
          title: "Account created successfully",
          description: "Redirecting to dashboard...",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Registration failed",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <svg
              height="48"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="48"
              data-view-component="true"
              className="fill-white"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </Link>
        </div>

        <div className="bg-[#161b22] rounded-lg border border-gray-700 p-6">
          <h1 className="text-white text-xl font-bold mb-6">Create your account</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" className="text-white">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                className="mt-1 bg-[#0d1117] border-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="new-password" className="text-white">
                Password
              </Label>
              <div className="relative mt-1">
                <Input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  className="bg-[#0d1117] border-gray-700 text-white pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase
                letter.
              </p>
            </div>

            <div>
              <Label htmlFor="username" className="text-white">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                className="mt-1 bg-[#0d1117] border-gray-700 text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <p className="text-xs text-gray-400 mt-1">Your username is how other GitHub users will see you.</p>
            </div>

            <div>
              <Label className="text-white">Email preferences</Label>
              <div className="flex items-start mt-2">
                <Checkbox id="email-updates" className="mt-1" />
                <Label htmlFor="email-updates" className="text-sm text-gray-300 ml-2">
                  Send me occasional product updates, announcements, and offers.
                </Label>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-gray-400">
                By creating an account, you agree to the{" "}
                <Link href="#" className="text-blue-400 hover:underline">
                  Terms of Service
                </Link>
                . For more information about GitHub's privacy practices, see the{" "}
                <Link href="#" className="text-blue-400 hover:underline">
                  GitHub Privacy Statement
                </Link>
                . We'll occasionally send you account-related emails.
              </p>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <nav className="flex justify-center space-x-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Security
            </Link>
            <Link href="#" className="hover:text-white">
              Contact GitHub
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

