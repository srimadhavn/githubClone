import Link from "next/link"
import { Check, GitPullRequest, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import CodeViewer from "@/components/code-viewer"

export default function PullRequestPage({ params }: { params: { owner: string; repo: string; id: string } }) {
  // Sample diff code
  const diffCode = `@@ -10,7 +10,7 @@ const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
- onClick,
+ onClick = () => {},
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
@@ -19,7 +19,7 @@ const Button = ({
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
-   outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
+   outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800',
    ghost: 'bg-transparent hover:bg-gray-100'
  };`

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Header />

      <div className="border-b border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-sm mb-4">
            <Link href="/dashboard" className="text-blue-400 hover:underline">
              {params.owner}
            </Link>
            <span className="mx-1">/</span>
            <Link href={`/repository/${params.owner}/${params.repo}`} className="text-blue-400 hover:underline">
              {params.repo}
            </Link>
            <span className="mx-1">/</span>
            <Link
              href={`/pull-request/${params.owner}/${params.repo}/${params.id}`}
              className="text-blue-400 hover:underline"
            >
              Pull request #{params.id}
            </Link>
          </div>

          <div className="flex items-center">
            <GitPullRequest className="h-5 w-5 mr-2 text-green-500" />
            <h1 className="text-2xl font-bold">Fix navigation responsiveness</h1>
            <Badge className="ml-3 bg-green-900 text-green-300">Open</Badge>
          </div>

          <div className="flex items-center mt-2 text-sm text-gray-400">
            <Link href="#" className="text-gray-300 hover:underline">
              username
            </Link>
            <span className="mx-1">opened this pull request 2 days ago</span>
            <span className="mx-1">•</span>
            <span>4 commits</span>
            <span className="mx-1">•</span>
            <span>2 files changed</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs defaultValue="conversation">
              <TabsList className="bg-[#161b22] border border-gray-700 rounded-t-md w-full justify-start">
                <TabsTrigger
                  value="conversation"
                  className="data-[state=active]:bg-[#0d1117] data-[state=active]:border-t-2 data-[state=active]:border-t-orange-500 rounded-none"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Conversation
                </TabsTrigger>
                <TabsTrigger
                  value="commits"
                  className="data-[state=active]:bg-[#0d1117] data-[state=active]:border-t-2 data-[state=active]:border-t-orange-500 rounded-none"
                >
                  Commits
                </TabsTrigger>
                <TabsTrigger
                  value="checks"
                  className="data-[state=active]:bg-[#0d1117] data-[state=active]:border-t-2 data-[state=active]:border-t-orange-500 rounded-none"
                >
                  Checks
                </TabsTrigger>
                <TabsTrigger
                  value="files-changed"
                  className="data-[state=active]:bg-[#0d1117] data-[state=active]:border-t-2 data-[state=active]:border-t-orange-500 rounded-none"
                >
                  Files changed
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="conversation"
                className="mt-0 bg-[#0d1117] border border-t-0 border-gray-700 rounded-b-md p-4"
              >
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-[#161b22] border border-gray-700 rounded-md">
                        <div className="border-b border-gray-700 bg-[#1c2128] p-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-medium">username</span>
                            <span className="text-gray-400 text-sm ml-2">commented 2 days ago</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="mb-4">
                            This PR fixes the navigation menu on mobile devices and improves accessibility.
                          </p>
                          <p>Changes include:</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Added responsive breakpoints for mobile view</li>
                            <li>Fixed hamburger menu toggle</li>
                            <li>Improved keyboard navigation</li>
                            <li>Added proper ARIA attributes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-[#161b22] border border-gray-700 rounded-md">
                        <div className="border-b border-gray-700 bg-[#1c2128] p-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-medium">reviewer</span>
                            <span className="text-gray-400 text-sm ml-2">commented 1 day ago</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <p>Looks good! Just a few minor suggestions:</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Consider adding a transition for the mobile menu</li>
                            <li>The focus states could be more visible</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-[#161b22] border border-gray-700 rounded-md">
                        <div className="border-b border-gray-700 bg-[#1c2128] p-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-medium">username</span>
                            <span className="text-gray-400 text-sm ml-2">commented 12 hours ago</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <p>Thanks for the feedback! I've added the suggested changes in the latest commit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <textarea
                      placeholder="Leave a comment"
                      className="w-full bg-[#161b22] border border-gray-700 rounded-md p-3 text-sm min-h-[100px]"
                    ></textarea>
                    <div className="flex justify-end mt-2">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">Comment</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="files-changed"
                className="mt-0 bg-[#0d1117] border border-t-0 border-gray-700 rounded-b-md p-4"
              >
                <div className="mb-4 flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-gray-400">Showing</span>
                    <Button variant="ghost" size="sm" className="text-sm px-2 py-1">
                      2 changed files
                    </Button>
                    <span className="text-gray-400">with</span>
                    <Button variant="ghost" size="sm" className="text-sm px-2 py-1">
                      12 additions
                    </Button>
                    <span className="text-gray-400">and</span>
                    <Button variant="ghost" size="sm" className="text-sm px-2 py-1">
                      4 deletions
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="h-8 border-gray-700 hover:border-gray-500">
                      Viewed
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 border-gray-700 hover:border-gray-500">
                      Changes
                    </Button>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="bg-[#161b22] border border-gray-700 rounded-t-md p-3 flex justify-between items-center">
                    <div className="font-mono text-sm">src/components/Button.tsx</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-green-500 mr-2">+2</span>
                      <span className="text-red-500 mr-2">-2</span>
                    </div>
                  </div>
                  <CodeViewer
                    code={diffCode}
                    language="diff"
                    fileName="src/components/Button.tsx"
                    lineCount={diffCode.split("\n").length}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1">
            <div className="bg-[#161b22] border border-gray-700 rounded-md p-4 mb-4">
              <h3 className="font-medium mb-2">Reviewers</h3>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
                <span className="text-sm">reviewer</span>
              </div>
              <Button variant="outline" size="sm" className="w-full text-sm border-gray-700 hover:border-gray-500">
                Add reviewers
              </Button>
            </div>

            <div className="bg-[#161b22] border border-gray-700 rounded-md p-4 mb-4">
              <h3 className="font-medium mb-2">Labels</h3>
              <div className="flex items-center mb-2">
                <Badge className="bg-green-900 text-green-300 hover:bg-green-800">enhancement</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full text-sm border-gray-700 hover:border-gray-500">
                Add labels
              </Button>
            </div>

            <div className="bg-[#161b22] border border-gray-700 rounded-md p-4 mb-4">
              <h3 className="font-medium mb-2">Linked issues</h3>
              <div className="flex items-center mb-2">
                <span className="text-sm text-blue-400 hover:underline">#12 Add responsive navigation</span>
              </div>
              <Button variant="outline" size="sm" className="w-full text-sm border-gray-700 hover:border-gray-500">
                Link an issue
              </Button>
            </div>

            <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
              <h3 className="font-medium mb-4">Merge</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">All checks have passed</p>
                    <p className="text-xs text-gray-400">2 successful checks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Review required</p>
                    <p className="text-xs text-gray-400">1 approving review required</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Branch is up to date</p>
                    <p className="text-xs text-gray-400">Can be merged automatically</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Merge pull request</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

