"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Globe, Lock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/header"

export default function CreateRepository() {
  const [repoName, setRepoName] = useState("")
  const [description, setDescription] = useState("")
  const [visibility, setVisibility] = useState("public")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate repository creation
    setTimeout(() => {
      setIsLoading(false)
      
      if (repoName) {
        toast({
          title: "Repository created successfully",
          description: "Redirecting to your new repository...",
        })
        router.push(`/repository/username/${repoName}`)
      } else {
        toast({
          title: "Repository creation failed",
          description: "Please provide a repository name.",
          variant: "destructive",
        })
      }
    }, 1500)
  }
  
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Create a new repository</h1>
        
        <div className="bg-[#161b22] border border-gray-700 rounded-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="owner" className="text-white block mb-2">Owner</Label>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-700 rounded-full mr-2"></div>
                <span>username</span>
                <span className="mx-2">/</span>
                <Input 
                  id="repo-name" 
                  placeholder="repository-name" 
                  className="bg-[#0d1117] border-gray-700 text-white flex-1"
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="description" className="text-white block mb-2">Description <span className="text-gray-400">(optional)</span></Label>
              <Textarea 
                id="description" 
                placeholder="Short description of your repository" 
                className="bg-[#0d1117] border-gray-700 text-white w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <h2 className="text-lg font-medium mb-4">Repository visibility</h2>
              
              <RadioGroup value={visibility} onValueChange={setVisibility} className="space-y-4">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="public" id="public" className="mt-1" />
                  <div>
                    <Label htmlFor="public" className="flex items-center text-white">
                      <Globe className="h-5 w-5 mr-2" />
                      Public
                    </Label>
                    <p className="text-sm text-gray-400 mt-1">
                      Anyone on the internet can see this repository. You choose who can commit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="private" id="private" className="mt-1" />
                  <div>
                    <Label htmlFor="private" className="flex items-center text-white">
                      <Lock className="h-5 w-5 mr-2" />
                      Private
                    </Label>
                    <p className="text-sm text-gray-400 mt-1">
                      You choose who can see and commit to this repository.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <h2 className="text-lg font-medium mb-4">Initialize this repository with:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Checkbox id="add-readme" className="mt-1" />
                  <div className="ml-3">
                    <Label htmlFor="add-readme" className="text-white">Add a README file</Label>
                    <p className="text-sm text-gray-400">
                      This is where you can write a long description for your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Checkbox id="add-gitignore-template" className="mt-1" />
                  <div className="ml-3">
                    <Label htmlFor="add-gitignore-template" className="text-white">Add .gitignore</Label>
                    <p className="text-sm text-gray-400">
                      Choose which files not to track from a list of templates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Checkbox id="add-license" className="mt-1" />
                  <div className="ml-3">
                    <Label htmlFor="add-license" className="text-white">Choose a license</Label>
                    <p className="text-sm text-gray-400">
                      License determines how other people can use your code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Checkbox id="add-gitignore" className="mt-1" />
                  <div className="ml-3">
                    <Label htmlFor="add-gitignore" className="text-white">Add .gitignore</Label>
                    <p className="text-sm text-gray-400">
                      Choose which files not to track from a list of templates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Checkbox id="add-\

