"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeViewerProps {
  code: string
  language: string
  fileName: string
  lineCount?: number
}

export default function CodeViewer({ code, language, fileName, lineCount = 0 }: CodeViewerProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Split code into lines
  const codeLines = code.split("\n")

  // Determine language class for syntax highlighting
  const getLanguageClass = () => {
    switch (language.toLowerCase()) {
      case "javascript":
      case "js":
        return "language-javascript"
      case "typescript":
      case "ts":
        return "language-typescript"
      case "jsx":
        return "language-jsx"
      case "tsx":
        return "language-tsx"
      case "html":
        return "language-html"
      case "css":
        return "language-css"
      case "json":
        return "language-json"
      case "markdown":
      case "md":
        return "language-markdown"
      default:
        return "language-plaintext"
    }
  }

  return (
    <div className="bg-[#0d1117] border border-gray-700 rounded-md overflow-hidden">
      <div className="flex justify-between items-center p-2 bg-[#161b22] border-b border-gray-700">
        <div className="text-sm font-mono">{fileName}</div>
        <button onClick={copyToClipboard} className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-gray-800">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {codeLines.map((line, index) => (
              <tr key={index} className="hover:bg-gray-800/50">
                <td className="py-0 pl-4 pr-2 text-right text-gray-500 select-none w-12 border-r border-gray-700 bg-[#161b22]/30">
                  {index + 1}
                </td>
                <td className="py-0 pl-4 pr-2 font-mono whitespace-pre">
                  <code className={getLanguageClass()}>{line || " "}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

