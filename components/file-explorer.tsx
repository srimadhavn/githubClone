"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, File, Folder } from "lucide-react"

interface FileItem {
  name: string
  type: "file" | "directory"
  path: string
  children?: FileItem[]
}

interface FileExplorerProps {
  files: FileItem[]
  basePath: string
}

export default function FileExplorer({ files, basePath }: FileExplorerProps) {
  return (
    <div className="border border-gray-700 rounded-md overflow-hidden">
      <div className="bg-[#161b22] p-2 border-b border-gray-700">
        <h3 className="font-medium">Files</h3>
      </div>
      <div className="bg-[#0d1117] p-2">
        <FileTree files={files} basePath={basePath} level={0} />
      </div>
    </div>
  )
}

function FileTree({ files, basePath, level }: { files: FileItem[]; basePath: string; level: number }) {
  return (
    <div className="space-y-1" style={{ marginLeft: level > 0 ? "1rem" : "0" }}>
      {files.map((file) => (
        <FileNode key={file.path} file={file} basePath={basePath} level={level} />
      ))}
    </div>
  )
}

function FileNode({ file, basePath, level }: { file: FileItem; basePath: string; level: number }) {
  const [isOpen, setIsOpen] = useState(level === 0)

  const toggleOpen = () => {
    if (file.type === "directory") {
      setIsOpen(!isOpen)
    }
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase()

    if (extension === "js" || extension === "jsx") return "📄 "
    if (extension === "ts" || extension === "tsx") return "📄 "
    if (extension === "css" || extension === "scss") return "📄 "
    if (extension === "html") return "📄 "
    if (extension === "json") return "📄 "
    if (extension === "md") return "📄 "
    if (extension === "png" || extension === "jpg" || extension === "jpeg" || extension === "svg") return "🖼️ "

    return "📄 "
  }

  return (
    <div>
      <div
        className={`flex items-center py-1 px-2 rounded hover:bg-gray-800 cursor-pointer ${file.type === "file" ? "text-blue-400" : "text-white"}`}
        onClick={toggleOpen}
      >
        {file.type === "directory" ? (
          <>
            {isOpen ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
            <Folder className="h-4 w-4 mr-2 text-blue-400" />
          </>
        ) : (
          <File className="h-4 w-4 mr-2" />
        )}

        <Link
          href={`${basePath}/${file.path}`}
          className={file.type === "file" ? "hover:underline" : ""}
          onClick={(e) => file.type === "directory" && e.preventDefault()}
        >
          {file.name}
        </Link>
      </div>

      {file.type === "directory" && isOpen && file.children && (
        <FileTree files={file.children} basePath={basePath} level={level + 1} />
      )}
    </div>
  )
}

