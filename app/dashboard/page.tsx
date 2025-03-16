"use client"

import { useState } from "react"
import Link from "next/link"
import { Book, Code, GitBranch, Plus, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import ContributionGraph from "@/components/contribution-graph"
import RepositoryCard from "@/components/repository-card"

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const repositories = [
    {
      name: "awesome-project",
      owner: "username",
      description: "A collection of awesome resources and tools for developers",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 128,
      isPublic: true,
      updatedAt: "3 days ago",
    },
    {
      name: "react-components",
      owner: "username",
      description: "Reusable React components with TypeScript",
      language: "TypeScript",
      languageColor: "#2b7489",
      stars: 85,
      isPublic: true,
      updatedAt: "1 week ago",
    },
    {
      name: "personal-website",
      owner: "username",
      description: "My personal portfolio website built with Next.js",
      language: "TypeScript",
      languageColor: "#2b7489",
      stars: 12,
      isPublic: true,
      updatedAt: "2 weeks ago",
    },
    {
      name: "data-visualization",
      owner: "username",
      description: "Interactive data visualization library",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 45,
      isPublic: true,
      updatedAt: "1 month ago",
    },
    {
      name: "private-notes",
      owner: "username",
      description: "Personal notes and snippets",
      language: "Markdown",
      languageColor: "#083fa1",
      stars: 0,
      isPublic: false,
      updatedAt: "2 days ago",
    },
  ]

  const filteredRepositories = repositories.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h2 className="text-xl font-semibold">username</h2>
                  <p className="text-gray-400 text-sm">@username</p>
                </div>
              </div>

              <div className="text-sm text-gray-400 mb-6">Full-stack developer passionate about open source</div>

              <Button variant="outline" className="w-full text-sm border-gray-700 hover:border-gray-500 mb-6">
                Edit profile
              </Button>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Organizations</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="block w-8 h-8 bg-gray-700 rounded-md"></Link>
                  <Link href="#" className="block w-8 h-8 bg-gray-700 rounded-md"></Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Recent activity</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-700 rounded-full mr-2 mt-1"></div>
                    <div className="text-sm">
                      <p>
                        Pushed to{" "}
                        <Link href="#" className="text-blue-400 hover:underline">
                          main
                        </Link>{" "}
                        in{" "}
                        <Link href="#" className="text-blue-400 hover:underline">
                          username/awesome-project
                        </Link>
                      </p>
                      <p className="text-gray-500 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-700 rounded-full mr-2 mt-1"></div>
                    <div className="text-sm">
                      <p>
                        Created issue{" "}
                        <Link href="#" className="text-blue-400 hover:underline">
                          #42
                        </Link>{" "}
                        in{" "}
                        <Link href="#" className="text-blue-400 hover:underline">
                          organization/repository
                        </Link>
                      </p>
                      <p className="text-gray-500 text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-700 rounded-full mr-2 mt-1"></div>
                    <div className="text-sm">
                      <p>
                        Reviewed pull request{" "}
                        <Link href="#" className="text-blue-400 hover:underline">
                          #15
                        </Link>{" "}
                        in{" "}
                        <Link href="#" className="text-blue-400 hover:underline">
                          organization/repository
                        </Link>
                      </p>
                      <p className="text-gray-500 text-xs">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="overview">
              <TabsList className="bg-[#161b22] border-b border-gray-700 w-full justify-start rounded-none mb-6">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none"
                >
                  <Book className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="repositories"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none"
                >
                  <GitBranch className="h-4 w-4 mr-2" />
                  Repositories
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none"
                >
                  <Code className="h-4 w-4 mr-2" />
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="packages"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none"
                >
                  Packages
                </TabsTrigger>
                <TabsTrigger
                  value="stars"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Stars
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0 space-y-6">
                <ContributionGraph />

                <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
                  <h3 className="font-semibold mb-4">Popular repositories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {repositories.slice(0, 4).map((repo, index) => (
                      <div
                        key={index}
                        className="border border-gray-700 rounded-md p-4 hover:border-gray-600 transition-colors duration-200"
                      >
                        <div className="flex justify-between mb-2">
                          <Link
                            href={`/repository/${repo.owner}/${repo.name}`}
                            className="font-medium text-blue-400 hover:underline"
                          >
                            {repo.name}
                          </Link>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                            {repo.isPublic ? "Public" : "Private"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{repo.description}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          {repo.language && (
                            <>
                              <div
                                className="w-3 h-3 rounded-full mr-1"
                                style={{ backgroundColor: repo.languageColor }}
                              />
                              <span className="mr-4">{repo.language}</span>
                            </>
                          )}

                          {repo.stars > 0 && (
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1" />
                              <span>{repo.stars}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
                  <h3 className="font-semibold mb-4">Contribution activity</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">username</span> created a pull request in
                          <Link href="#" className="text-blue-400 hover:underline ml-1">
                            organization/repository
                          </Link>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                        <div className="mt-2 p-3 bg-[#0d1117] border border-gray-700 rounded-md">
                          <p className="text-sm font-medium">Fix navigation responsiveness</p>
                          <p className="text-xs text-gray-400 mt-1">
                            This PR fixes the navigation menu on mobile devices and improves accessibility.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">username</span> opened an issue in
                          <Link href="#" className="text-blue-400 hover:underline ml-1">
                            organization/repository
                          </Link>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">5 days ago</p>
                        <div className="mt-2 p-3 bg-[#0d1117] border border-gray-700 rounded-md">
                          <p className="text-sm font-medium">Add dark mode support</p>
                          <p className="text-xs text-gray-400 mt-1">
                            We should add support for dark mode to improve user experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Button variant="outline" className="text-sm border-gray-700 hover:border-gray-500">
                      Show more activity
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="repositories" className="mt-0">
                <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <Input
                      type="search"
                      placeholder="Find a repository..."
                      className="bg-[#0d1117] border border-gray-700 text-sm w-full md:max-w-md"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-sm border-gray-700 hover:border-gray-500">
                        Type
                      </Button>
                      <Button variant="outline" className="text-sm border-gray-700 hover:border-gray-500">
                        Language
                      </Button>
                      <Button variant="outline" className="text-sm border-gray-700 hover:border-gray-500">
                        Sort
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        New
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-0">
                    {filteredRepositories.length > 0 ? (
                      filteredRepositories.map((repo, index) => (
                        <RepositoryCard
                          key={index}
                          name={repo.name}
                          owner={repo.owner}
                          description={repo.description}
                          language={repo.language}
                          languageColor={repo.languageColor}
                          stars={repo.stars}
                          isPublic={repo.isPublic}
                          updatedAt={repo.updatedAt}
                        />
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-400">
                        <p>No repositories found matching "{searchTerm}"</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="mt-0">
                <div className="bg-[#161b22] border border-gray-700 rounded-md p-6 text-center">
                  <h3 className="font-semibold text-xl mb-2">Create your first GitHub Project</h3>
                  <p className="text-gray-400 mb-4">
                    Projects are a customizable, flexible tool for planning and tracking your work.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Create project</Button>
                </div>
              </TabsContent>

              <TabsContent value="packages" className="mt-0">
                <div className="bg-[#161b22] border border-gray-700 rounded-md p-6 text-center">
                  <h3 className="font-semibold text-xl mb-2">Get started with GitHub Packages</h3>
                  <p className="text-gray-400 mb-4">
                    Safely publish packages, store your packages alongside your code, and share your packages privately
                    with your team.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Choose a registry</Button>
                </div>
              </TabsContent>

              <TabsContent value="stars" className="mt-0">
                <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
                  <div className="flex justify-between items-center mb-6">
                    <Input
                      type="search"
                      placeholder="Search stars..."
                      className="bg-[#0d1117] border border-gray-700 text-sm w-full max-w-md"
                    />
                    <Button variant="outline" className="text-sm border-gray-700 hover:border-gray-500">
                      Sort
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <RepositoryCard
                      name="react"
                      owner="facebook"
                      description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
                      language="JavaScript"
                      languageColor="#f1e05a"
                      stars={178000}
                      isPublic={true}
                      updatedAt="1 day ago"
                    />

                    <RepositoryCard
                      name="next.js"
                      owner="vercel"
                      description="The React Framework for Production"
                      language="JavaScript"
                      languageColor="#f1e05a"
                      stars={89000}
                      isPublic={true}
                      updatedAt="3 days ago"
                    />

                    <RepositoryCard
                      name="tailwindcss"
                      owner="tailwindlabs"
                      description="A utility-first CSS framework for rapid UI development."
                      language="CSS"
                      languageColor="#563d7c"
                      stars={62000}
                      isPublic={true}
                      updatedAt="1 week ago"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

