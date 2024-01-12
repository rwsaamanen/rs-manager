import React from 'react'
import { CheckCircle2 } from "lucide-react"
const features = [
  {
    title: "Track, share and create your tasks.",
    description:
      "Create and plan your unique ideas. ",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Create workshops",
    description:
      "Supports workshops for individuals and groups. Everything to keep you organized.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Realtime Data Optimization",
    description:
      "Your data is private and secured with realtime updates.",
    icon: "bx:bxs-data",
  },
  {
    title: "Simplicity",
    description:
      "Created purely for you to be simple and efficient. Nothing extra.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Advanced Integrations",
    description:
      "Fully automated with simultaneous caching and structured integrations. New AI to support auto translations.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Community",
    description:
      "Community driven application with next-gen chat integration.",
    icon: "bx:bxs-user",
  },
];

const Features = () => {
  return (
    <>
      <div className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-semibold lg:tracking-tight">
          Everything you need to start productive lifestyle
        </h2>
        <p className="text-lg mt-4 text-gray-400">
          Swiftyfi serves as a straight forward project management application with a touch of chat feature. Carefully crafted for everyone.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {
          features.map((item) => (
            <div className="flex gap-4 items-start">
                <CheckCircle2 className='text-green-400 h-7 w-7 shrink-0' />

              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>{" "}
                <p className="text-gray-400 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Features