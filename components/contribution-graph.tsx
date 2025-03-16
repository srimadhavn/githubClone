"use client"

import { useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Generate random contribution data
const generateContributionData = () => {
  const today = new Date()
  const data = []

  // Generate data for the past year (52 weeks * 7 days)
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Random contribution count (weighted to have more zeros and low numbers)
    let count = 0
    const rand = Math.random()
    if (rand > 0.6) {
      if (rand > 0.9) {
        count = Math.floor(Math.random() * 10) + 10 // 10-20 contributions (rare)
      } else if (rand > 0.8) {
        count = Math.floor(Math.random() * 5) + 5 // 5-10 contributions (uncommon)
      } else {
        count = Math.floor(Math.random() * 5) + 1 // 1-5 contributions (common)
      }
    }

    data.push({
      date: date.toISOString().split("T")[0],
      count,
      level: count === 0 ? 0 : count < 5 ? 1 : count < 10 ? 2 : count < 15 ? 3 : 4,
    })
  }

  return data
}

export default function ContributionGraph() {
  const [contributionData, setContributionData] = useState<any[]>([])
  const [totalContributions, setTotalContributions] = useState(0)

  useEffect(() => {
    const data = generateContributionData()
    setContributionData(data)
    setTotalContributions(data.reduce((sum, day) => sum + day.count, 0))
  }, [])

  // Group data by weeks
  const weeks = []
  for (let i = 0; i < contributionData.length; i += 7) {
    weeks.push(contributionData.slice(i, i + 7))
  }

  // Get month labels
  const getMonthLabels = () => {
    const months = []
    const today = new Date()

    for (let i = 11; i >= 0; i--) {
      const date = new Date(today)
      date.setMonth(today.getMonth() - i)
      months.push(date.toLocaleString("default", { month: "short" }))
    }

    return months
  }

  const monthLabels = getMonthLabels()

  return (
    <div className="bg-[#161b22] border border-gray-700 rounded-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">{totalContributions} contributions in the last year</h3>
        <button className="text-xs text-gray-400 hover:text-blue-400">Contribution settings</button>
      </div>

      <div className="flex mt-4">
        <div className="flex flex-col justify-between text-xs text-gray-400 pr-2 pt-1 pb-1">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            {monthLabels.map((month, i) => (
              <span key={i} className="w-8 text-center">
                {month}
              </span>
            ))}
          </div>

          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <TooltipProvider key={dayIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-3 h-3 rounded-sm ${
                            day.level === 0
                              ? "bg-[#161b22] border border-gray-800"
                              : day.level === 1
                                ? "bg-[#0e4429]"
                                : day.level === 2
                                  ? "bg-[#006d32]"
                                  : day.level === 3
                                    ? "bg-[#26a641]"
                                    : "bg-[#39d353]"
                          }`}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-[#161b22] border border-gray-700 text-white text-xs p-2">
                        {day.count} contributions on {new Date(day.date).toDateString()}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-2 text-xs text-gray-400">
        <span className="mr-2">Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-[#161b22] border border-gray-800" />
          <div className="w-3 h-3 rounded-sm bg-[#0e4429]" />
          <div className="w-3 h-3 rounded-sm bg-[#006d32]" />
          <div className="w-3 h-3 rounded-sm bg-[#26a641]" />
          <div className="w-3 h-3 rounded-sm bg-[#39d353]" />
        </div>
        <span className="ml-2">More</span>
      </div>
    </div>
  )
}

