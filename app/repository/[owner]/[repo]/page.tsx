"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Eye, GitBranch, GitFork, History, Play, Plus, Star, GitPullRequest } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import FileExplorer from "@/components/file-explorer"
import CodeViewer from "@/components/code-viewer"

export default function RepositoryPage({ params }: { params: { owner: string; repo: string } }) {
  const [activeTab, setActiveTab] = useState("code")

  // Sample file structure
  const files = [
    {
      name: "src",
      type: "directory",
      path: "src",
      children: [
        {
          name: "components",
          type: "directory",
          path: "src/components",
          children: [
            { name: "Button.tsx", type: "file", path: "src/components/Button.tsx" },
            { name: "Card.tsx", type: "file", path: "src/components/Card.tsx" },
            { name: "Input.tsx", type: "file", path: "src/components/Input.tsx" },
          ],
        },
        {
          name: "hooks",
          type: "directory",
          path: "src/hooks",
          children: [
            { name: "useLocalStorage.ts", type: "file", path: "src/hooks/useLocalStorage.ts" },
            { name: "useMediaQuery.ts", type: "file", path: "src/hooks/useMediaQuery.ts" },
          ],
        },
        { name: "App.tsx", type: "file", path: "src/App.tsx" },
        { name: "index.tsx", type: "file", path: "src/index.tsx" },
      ],
    },
    {
      name: "public",
      type: "directory",
      path: "public",
      children: [
        { name: "favicon.ico", type: "file", path: "public/favicon.ico" },
        { name: "index.html", type: "file", path: "public/index.html" },
        { name: "robots.txt", type: "file", path: "public/robots.txt" },
      ],
    },
    { name: ".gitignore", type: "file", path: ".gitignore" },
    { name: "package.json", type: "file", path: "package.json" },
    { name: "README.md", type: "file", path: "README.md" },
    { name: "tsconfig.json", type: "file", path: "tsconfig.json" },
  ]

  // Sample code for the README.md
  const readmeCode = `# ${params.repo}

A brief description of what this project does and who it's for.

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

Install the project with npm

\`\`\`bash
npm install my-project
cd my-project
npm start
\`\`\`

## API Reference

#### Get all items

\`\`\`http
GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

## License

[MIT](https://choosealicense.com/licenses/mit/)
`

  // Sample code for a TypeScript file
  const buttonComponentCode = `import React from 'react';

interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Is button disabled
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    ghost: 'bg-transparent hover:bg-gray-100'
  };
  
  const sizeStyles = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base'
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type="button"
      className={\`\${baseStyles} \${variantStyles[variant]} \${sizeStyles[size]} \${disabledStyles}\`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
`

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Header />

      {/* Repository Header */}
      <div className="border-b border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-sm mb-4">
            <Link href="/dashboard" className="text-blue-400 hover:underline">
              {params.owner}
            </Link>
            <span className="mx-1">/</span>
            <Link
              href={`/repository/${params.owner}/${params.repo}`}
              className="text-blue-400 hover:underline font-semibold"
            >
              {params.repo}
            </Link>
            <Badge variant="outline" className="ml-2 text-xs">
              Public
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative group">
              <Button variant="outline" size="sm" className="h-8 border-gray-700 group-hover:border-gray-500">
                <Eye className="h-4 w-4 mr-2" />
                Watch
                <span className="ml-2 bg-gray-700 px-1.5 rounded-full text-xs">5</span>
              </Button>

              <div className="absolute z-10 hidden group-hover:block mt-2 w-64 bg-[#161b22] border border-gray-700 rounded-md shadow-lg p-2">
                <div className="text-xs p-2">
                  <p className="font-semibold mb-1">Notifications</p>
                  <p className="text-gray-400">
                    You're watching this repository. You'll receive notifications for all conversations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Button variant="outline" size="sm" className="h-8 border-gray-700 group-hover:border-gray-500">
                <GitFork className="h-4 w-4 mr-2" />
                Fork
                <span className="ml-2 bg-gray-700 px-1.5 rounded-full text-xs">2</span>
              </Button>

              <div className="absolute z-10 hidden group-hover:block mt-2 w-64 bg-[#161b22] border border-gray-700 rounded-md shadow-lg p-2">
                <div className="text-xs p-2">
                  <p className="font-semibold mb-1">Fork this repository</p>
                  <p className="text-gray-400">Create a copy of this repository on your account.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Button variant="outline" size="sm" className="h-8 border-gray-700 group-hover:border-gray-500">
                <Star className="h-4 w-4 mr-2" />
                Star
                <span className="ml-2 bg-gray-700 px-1.5 rounded-full text-xs">128</span>
              </Button>

              <div className="absolute z-10 hidden group-hover:block mt-2 w-64 bg-[#161b22] border border-gray-700 rounded-md shadow-lg p-2">
                <div className="text-xs p-2">
                  <p className="font-semibold mb-1">Star this repository</p>
                  <p className="text-gray-400">Add this repository to your starred list for easy access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repository Navigation */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="code" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-transparent w-full justify-start rounded-none h-auto overflow-x-auto">
              <TabsTrigger
                value="code"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none py-3 px-4"
              >
                <Code className="h-4 w-4 mr-2" />
                Code
              </TabsTrigger>
              <TabsTrigger
                value="issues"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none py-3 px-4"
              >
                Issues
                <span className="ml-2 bg-gray-700 px-1.5 rounded-full text-xs">12</span>
              </TabsTrigger>
              <TabsTrigger
                value="pull-requests"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none py-3 px-4"
              >
                Pull requests
                <span className="ml-2 bg-gray-700 px-1.5 rounded-full text-xs">4</span>
              </TabsTrigger>
              <TabsTrigger
                value="actions"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none py-3 px-4"
              >
                <Play className="h-4 w-4 mr-2" />
                Actions
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none py-3 px-4"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none py-3 px-4"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none py-3 px-4"
              >
                Insights
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Repository Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <TabsContent value="code" className="mt-0">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-8 border-gray-700 hover:border-gray-500">
                <GitBranch className="h-4 w-4 mr-2" />
                main
              </Button>

              <div className="text-sm text-gray-400">
                <GitBranch className="h-4 w-4 inline mr-1" />
                <span>2 branches</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-8 border-gray-700 hover:border-gray-500">
                <Code className="h-4 w-4 mr-2" />
                Code
              </Button>

              <Button className="bg-green-600 hover:bg-green-700 text-white h-8">
                <Plus className="h-4 w-4 mr-2" />
                Add file
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <FileExplorer files={files} basePath={`/repository/${params.owner}/${params.repo}/blob/main`} />
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#161b22] border border-gray-700 rounded-md overflow-hidden mb-6">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">{params.owner}</span>
                    <span className="text-gray-400 mx-1">committed 3 days ago</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <History className="h-4 w-4 mr-1" />
                    <span>12 commits</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <CodeViewer
                  code={readmeCode}
                  language="markdown"
                  fileName="README.md"
                  lineCount={readmeCode.split("\n").length}
                />
              </div>

              <div className="mb-6">
                <CodeViewer
                  code={buttonComponentCode}
                  language="typescript"
                  fileName="src/components/Button.tsx"
                  lineCount={buttonComponentCode.split("\n").length}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="issues" className="mt-0">
          <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="h-8 border-gray-700 hover:border-gray-500">
                  Filters
                </Button>
                <input
                  type="text"
                  placeholder="Search all issues"
                  className="bg-[#0d1117] border border-gray-700 rounded-md px-3 py-1 text-sm w-64"
                />
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">New issue</Button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="text-green-500 mr-2">
                    <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-400 hover:underline">Add dark mode support</div>
                    <div className="text-xs text-gray-400">
                      #12 opened 2 days ago by <span className="text-gray-300">username</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <div className="flex items-center mr-4">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                      ></path>
                    </svg>
                    3
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-purple-900 text-purple-300 hover:bg-purple-800">enhancement</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="text-green-500 mr-2">
                    <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-400 hover:underline">Improve mobile responsiveness</div>
                    <div className="text-xs text-gray-400">
                      #11 opened 3 days ago by <span className="text-gray-300">username</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <div className="flex items-center mr-4">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 0 011 10.25v-7.5z"
                      ></path>
                    </svg>
                    5
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-red-900 text-red-300 hover:bg-red-800 mr-1">bug</Badge>
                    <Badge className="bg-blue-900 text-blue-300 hover:bg-blue-800">good first issue</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="text-green-500 mr-2">
                    <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-400 hover:underline">Add TypeScript support</div>
                    <div className="text-xs text-gray-400">
                      #10 opened 5 days ago by <span className="text-gray-300">contributor</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <div className="flex items-center mr-4">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                      ></path>
                    </svg>
                    2
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-purple-900 text-purple-300 hover:bg-purple-800">enhancement</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pull-requests" className="mt-0">
          <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="h-8 border-gray-700 hover:border-gray-500">
                  Filters
                </Button>
                <input
                  type="text"
                  placeholder="Search all pull requests"
                  className="bg-[#0d1117] border border-gray-700 rounded-md px-3 py-1 text-sm w-64"
                />
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">New pull request</Button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="text-green-500 mr-2">
                    <GitPullRequest className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-blue-400 hover:underline">Fix navigation responsiveness</div>
                    <div className="text-xs text-gray-400">
                      #4 opened 2 days ago by <span className="text-gray-300">username</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <div className="flex items-center mr-4">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                      ></path>
                    </svg>
                    3
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-green-900 text-green-300 hover:bg-green-800">ready for review</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="text-purple-500 mr-2">
                    <GitPullRequest className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-blue-400 hover:underline">Add unit tests for components</div>
                    <div className="text-xs text-gray-400">
                      #3 opened 4 days ago by <span className="text-gray-300">contributor</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <div className="flex items-center mr-4">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                      ></path>
                    </svg>
                    5
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-yellow-900 text-yellow-300 hover:bg-yellow-800">in progress</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="actions" className="mt-0">
          <div className="bg-[#161b22] border border-gray-700 rounded-md p-6">
            <div className="flex items-center mb-6">
              <Play className="h-6 w-6 mr-3 text-green-500" />
              <div>
                <h3 className="text-xl font-semibold">GitHub Actions</h3>
                <p className="text-gray-400 text-sm">Automate your workflow from idea to production</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0d1117] border border-gray-700 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 16 16" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">CI</div>
                      <div className="text-xs text-gray-400">Last run 2 hours ago</div>
                    </div>
                  </div>
                  <Badge className="bg-green-900 text-green-300">Passing</Badge>
                </div>
                <div className="text-sm text-gray-400">Workflow runs on push to main branch</div>
              </div>

              <div className="bg-[#0d1117] border border-gray-700 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center mr-2">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 16 16" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Deploy</div>
                      <div className="text-xs text-gray-400">Last run 2 hours ago</div>
                    </div>
                  </div>
                  <Badge className="bg-green-900 text-green-300">Passing</Badge>
                </div>
                <div className="text-sm text-gray-400">Workflow runs on push to main branch</div>
              </div>
            </div>
          </div>
        </TabsContent>
      </main>
    </div>
  )
}

