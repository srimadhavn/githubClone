import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      <Header user={false} />

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Build and ship software on a<br />
            single, collaborative platform
          </h1>
          <p className="text-xl mb-12 text-gray-300">
            Join the world's most widely adopted AI-powered developer platform.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white text-black py-6 px-4 rounded-md"
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white py-6 px-4 rounded-md transition-colors duration-300">
              Sign up for GitHub
            </Button>
          </div>

          <div className="mt-4">
            <Button
              variant="outline"
              className="border-gray-600 hover:border-gray-400 py-6 px-4 rounded-md transition-colors duration-300"
            >
              Try GitHub Copilot
            </Button>
          </div>

          {/* Animated Background */}
          <div className="mt-20 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="bg-[#161b22] rounded-lg border border-gray-700 shadow-xl max-w-3xl mx-auto overflow-hidden transform transition-transform hover:scale-[1.01] duration-300">
                <div className="p-4 bg-[#0d1117] border-b border-gray-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-400">GITHUB COPILOT: CHAT</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 p-4 border-r border-gray-700 text-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gray-700 rounded-full mr-2 flex items-center justify-center">
                        <span className="text-xs">AI</span>
                      </div>
                      <div>GitHub Copilot</div>
                    </div>
                    <p className="text-gray-400 text-xs">Hi @username, how can I help you?</p>
                    <p className="text-gray-400 text-xs mt-2">
                      I'm powered by AI, so surprises and mistakes are possible. Make sure to verify any generated code
                      or suggestions.
                    </p>
                  </div>
                  <div className="w-full md:w-2/3 bg-[#0d1117] p-4 text-xs font-mono">
                    <div className="flex items-center text-gray-400 mb-2 overflow-x-auto whitespace-nowrap pb-2">
                      <span className="bg-gray-800 px-2 py-1 rounded mr-2">game.ts</span>
                      <span className="bg-gray-800 px-2 py-1 rounded mr-2">characters.module.css</span>
                      <span className="bg-gray-800 px-2 py-1 rounded">bonus-level.ts</span>
                    </div>
                    <div className="mt-4 overflow-hidden">
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">76</div>
                        <div className="text-green-400">if (this.cursors.left.isDown) {"{"}</div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">77</div>
                        <div className="text-blue-300">
                          {" "}
                          this.player.<span className="text-purple-400">setVelocityX</span>(-200);
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">78</div>
                        <div className="text-green-400">
                          {"}"} else if (this.cursors.right.isDown) {"{"}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">79</div>
                        <div className="text-blue-300">
                          {" "}
                          this.player.<span className="text-purple-400">setVelocityX</span>(200);
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">80</div>
                        <div className="text-green-400">
                          {"}"} else {"{"}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">81</div>
                        <div className="text-blue-300">
                          {" "}
                          this.player.<span className="text-purple-400">setVelocityX</span>(0);
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">82</div>
                        <div className="text-green-400">{"}"}</div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">83</div>
                        <div className="text-blue-300"></div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">84</div>
                        <div className="text-green-400">
                          if (this.cursors.up.isDown && this.player.body.touching.down) {"{"}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">85</div>
                        <div className="text-blue-300">
                          {" "}
                          this.player.<span className="text-purple-400">setVelocityY</span>(-330);
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-gray-500 mr-4 select-none">86</div>
                        <div className="text-green-400">{"}"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#161b22] p-6 rounded-lg border border-gray-700 text-left">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Coding</h3>
              <p className="text-gray-400">Work together seamlessly with your team on code, issues, and projects.</p>
            </div>

            <div className="bg-[#161b22] p-6 rounded-lg border border-gray-700 text-left">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.27002 6.96002L12 12.01L20.73 6.96002"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22.08V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Development</h3>
              <p className="text-gray-400">Accelerate your workflow with GitHub Copilot, your AI pair programmer.</p>
            </div>

            <div className="bg-[#161b22] p-6 rounded-lg border border-gray-700 text-left">
              <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12H18L15 21L9 3L6 12H2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">DevOps Automation</h3>
              <p className="text-gray-400">
                Automate your development workflow with GitHub Actions and secure your code.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 bg-[#161b22] p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Ready to start building?</h2>
            <p className="text-gray-400 mb-6">Join millions of developers and organizations building with GitHub.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white py-6 px-8 rounded-md transition-colors duration-300">
                Sign up for GitHub
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 hover:border-gray-400 py-6 px-8 rounded-md transition-colors duration-300"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0d1117] text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <svg
                height="24"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                data-view-component="true"
                className="fill-white mb-4"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              <p className="text-sm">© 2023 GitHub, Inc.</p>
              <p className="text-sm mt-4">GitHub and the Octocat logo are registered trademarks of GitHub, Inc.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Customer stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Developer API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Electron
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    GitHub Desktop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    GitHub CLI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mobile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Premium Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Inclusion
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Social Impact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

