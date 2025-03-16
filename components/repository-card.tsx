import Link from "next/link"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"

interface RepositoryCardProps {
  name: string
  owner: string
  description: string
  language: string
  languageColor: string
  stars: number
  isPublic: boolean
  updatedAt: string
  showActions?: boolean
}

export default function RepositoryCard({
  name,
  owner,
  description,
  language,
  languageColor,
  stars,
  isPublic,
  updatedAt,
  showActions = true,
}: RepositoryCardProps) {
  return (
    <div className="border-b border-gray-700 pb-6 mb-6">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center">
            <Link href={`/repository/${owner}/${name}`} className="font-medium text-blue-400 hover:underline text-lg">
              {name}
            </Link>
            <span className="ml-2 text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">
              {isPublic ? "Public" : "Private"}
            </span>
          </div>

          {description && <p className="text-sm text-gray-400 mt-1 mb-3">{description}</p>}

          <div className="flex items-center flex-wrap gap-4 text-xs text-gray-400">
            {language && (
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: languageColor }} />
                <span>{language}</span>
              </div>
            )}

            {stars > 0 && (
              <Link href="#" className="flex items-center hover:text-gray-300">
                <Star className="h-4 w-4 mr-1" />
                <span>{stars}</span>
              </Link>
            )}

            {updatedAt && <span>Updated {updatedAt}</span>}
          </div>
        </div>

        {showActions && (
          <div className="flex items-start">
            <Button variant="outline" size="sm" className="h-8 border-gray-700">
              <Star className="h-4 w-4 mr-2" />
              Star
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

