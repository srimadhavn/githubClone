"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, ChevronDown, Code, Command, GitPullRequest, Globe, Menu, Plus, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header({ user = true }: { user?: boolean }) {
  const [showBanner, setShowBanner] = useState(true)
  const pathname = usePathname()

  return (
    <>
      {/* Announcement Banner */}
      {showBanner && (
        <div className="bg-[#0d1117] text-white py-2 px-4 flex justify-center items-center text-sm border-b border-gray-800">
          <p>
            GitHub Copilot is now available for free.{" "}
            <Link href="#" className="text-blue-400 hover:underline">
              Learn more
            </Link>
          </p>
          <button className="ml-4" onClick={() => setShowBanner(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <header className="bg-[#0d1117] text-white py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#161b22] border-r border-gray-700 p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-gray-700">
                      <Link href="/" className="flex items-center" onClick={() => {}}>
                        <svg
                          height="32"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="32"
                          data-view-component="true"
                          className="fill-white"
                        >
                          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                      </Link>
                    </div>
                    <nav className="flex-1 overflow-auto py-4">
                      <div className="px-4 mb-2">
                        <Input
                          type="search"
                          placeholder="Search or jump to..."
                          className="bg-[#0d1117] border border-gray-700 text-sm"
                        />
                      </div>
                      <div className="space-y-1 px-2">
                        <Link href="/dashboard" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Dashboard
                        </Link>
                        <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Pull requests
                        </Link>
                        <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Issues
                        </Link>
                        <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Codespaces
                        </Link>
                        <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Marketplace
                        </Link>
                        <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Explore
                        </Link>
                        <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Sponsors
                        </Link>
                        <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Settings
                        </Link>
                        <div className="flex items-center px-2 py-2">
                          <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
                          <span>username</span>
                        </div>
                        <Link href="/signin" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
                          Sign out
                        </Link>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <Link href="/" className="flex items-center">
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="fill-white"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </Link>

            <nav className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm hover:text-gray-300">
                        <span>Product</span>
                        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                    >
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">Productivity tools</h3>
                        <p className="text-xs text-gray-400 mb-3">Improve your development process</p>
                        <div className="space-y-2">
                          <DropdownMenuItem className="flex items-start px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            <div className="mr-2 mt-0.5 bg-purple-800 p-1 rounded-md">
                              <Command className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Actions</div>
                              <div className="text-xs text-gray-400">Automate workflows</div>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-start px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            <div className="mr-2 mt-0.5 bg-green-800 p-1 rounded-md">
                              <GitPullRequest className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Packages</div>
                              <div className="text-xs text-gray-400">Host and manage packages</div>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-start px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            <div className="mr-2 mt-0.5 bg-blue-800 p-1 rounded-md">
                              <Code className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Codespaces</div>
                              <div className="text-xs text-gray-400">Cloud development environments</div>
                            </div>
                          </DropdownMenuItem>
                        </div>
                      </div>
                      <DropdownMenuSeparator className="bg-gray-700" />
                      <div className="p-2">
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          <Link href="#" className="w-full">
                            Explore all products
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm hover:text-gray-300">
                        <span>Solutions</span>
                        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                    >
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">For</h3>
                        <div className="space-y-2">
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            Enterprise
                          </DropdownMenuItem>
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            Teams
                          </DropdownMenuItem>
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            Startups
                          </DropdownMenuItem>
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            Education
                          </DropdownMenuItem>
                        </div>
                      </div>
                      <DropdownMenuSeparator className="bg-gray-700" />
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">By Solution</h3>
                        <div className="space-y-2">
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            CI/CD & Automation
                          </DropdownMenuItem>
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            DevOps
                          </DropdownMenuItem>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm hover:text-gray-300">
                        <span>Open Source</span>
                        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                    >
                      <div className="p-4 space-y-2">
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          GitHub Sponsors
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          The ReadME Project
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          Repositories
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          Topics
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          Trending
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          Collections
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="#" className="text-sm hover:text-gray-300">
                    Pricing
                  </Link>
                </>
              ) : (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm hover:text-gray-300">
                        <span>Product</span>
                        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                    >
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">Productivity tools</h3>
                        <p className="text-xs text-gray-400 mb-3">Improve your development process</p>
                        <div className="space-y-2">
                          <DropdownMenuItem className="flex items-start px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            <div className="mr-2 mt-0.5 bg-purple-800 p-1 rounded-md">
                              <Command className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Actions</div>
                              <div className="text-xs text-gray-400">Automate workflows</div>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-start px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            <div className="mr-2 mt-0.5 bg-green-800 p-1 rounded-md">
                              <GitPullRequest className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Packages</div>
                              <div className="text-xs text-gray-400">Host and manage packages</div>
                            </div>
                          </DropdownMenuItem>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm hover:text-gray-300">
                        <span>Solutions</span>
                        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                    >
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">For</h3>
                        <div className="space-y-2">
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            Enterprise
                          </DropdownMenuItem>
                          <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                            Teams
                          </DropdownMenuItem>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm hover:text-gray-300">
                        <span>Resources</span>
                        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                    >
                      <div className="p-4 space-y-2">
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          Documentation
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          GitHub Skills
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          Blog
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm hover:text-gray-300">
                        <span>Open Source</span>
                        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                    >
                      <div className="p-4 space-y-2">
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          GitHub Sponsors
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                          The ReadME Project
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="#" className="text-sm hover:text-gray-300">
                    Pricing
                  </Link>
                </>
              )}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="search"
                      placeholder="Search or jump to..."
                      className="pl-10 pr-16 py-1 bg-[#0d1117] border border-gray-700 rounded-md text-sm w-64 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <kbd className="px-1.5 py-0.5 text-xs border border-gray-600 rounded text-gray-400">/</kbd>
                    </div>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-gray-300 hover:text-white relative">
                      <Plus className="h-5 w-5" />
                      <span className="sr-only">Create new</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                  >
                    <div className="p-2 space-y-1">
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        New repository
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Import repository
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        New gist
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        New organization
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        New project
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-gray-300 hover:text-white relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500"></span>
                      <span className="sr-only">Notifications</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-80 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                  >
                    <div className="p-2 border-b border-gray-700 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 text-sm rounded-md bg-gray-800">Inbox</button>
                        <button className="px-2 py-1 text-sm rounded-md hover:bg-gray-800">Unread</button>
                      </div>
                      <div className="flex space-x-2 text-blue-400 text-sm">
                        <button className="hover:text-blue-300">Mark all as read</button>
                      </div>
                    </div>
                    <div className="p-4 text-center text-sm text-gray-400">
                      <Globe className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                      <p>No new notifications!</p>
                    </div>
                    <div className="p-2 border-t border-gray-700 text-center">
                      <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
                        View all notifications
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center">
                      <Avatar className="h-6 w-6 border border-gray-700">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                        <AvatarFallback className="bg-gray-700 text-xs">U</AvatarFallback>
                      </Avatar>
                      <ChevronDown className="h-3 w-3 ml-1 text-gray-400" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-64 bg-[#161b22] border border-gray-700 text-white p-0 rounded-md"
                  >
                    <div className="p-2 border-b border-gray-700">
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        <div className="flex items-center">
                          <div className="mr-2">Signed in as </div>
                          <div className="font-bold">username</div>
                        </div>
                      </DropdownMenuItem>
                    </div>
                    <div className="p-2 border-b border-gray-700">
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        <div className="w-full">
                          <div className="flex items-center justify-between w-full">
                            <span>Switch to light theme</span>
                            <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                              <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    </div>
                    <div className="p-2 border-b border-gray-700 space-y-1">
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Your profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Your repositories
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Your codespaces
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Your organizations
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Your projects
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Your stars
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Your gists
                      </DropdownMenuItem>
                    </div>
                    <div className="p-2 border-b border-gray-700 space-y-1">
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Upgrade
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Feature preview
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Help
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        Settings
                      </DropdownMenuItem>
                    </div>
                    <div className="p-2">
                      <DropdownMenuItem className="px-2 py-1.5 focus:bg-gray-800 rounded-md cursor-pointer">
                        <Link href="/signin" className="w-full">
                          Sign out
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    type="search"
                    placeholder="Search or jump to..."
                    className="pl-10 pr-4 py-1 bg-[#1a1f24] border border-gray-700 rounded-md text-sm w-64 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-xs border border-gray-600 rounded px-1 text-gray-400">/</span>
                  </div>
                </div>
                <Link href="/signin" className="text-sm hover:text-gray-300">
                  Sign in
                </Link>
                <Button variant="outline" className="text-sm border-gray-600 hover:border-gray-400">
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

