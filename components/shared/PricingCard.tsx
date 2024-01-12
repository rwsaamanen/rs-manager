import Link from 'next/link'
import Check from "@/public/icons/check-icon.svg"
import React from 'react'
import Image from 'next/image'

const PricingCard = ({ plan }: { plan: any }) => {
    return (
        <div>
            <div className="flex bg-neutral-950 flex-col w-full border-first lg:order-none border-2 shadow-md shadow-gray-600 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
                <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-400">{plan.name}</h4>
                    <p className="mt-3 text-4xl font-bold text-white md:text-4xl">
                        {
                            plan.price && typeof plan.price === "object"
                                ? plan.price.monthly
                                : plan.price
                        }
                    </p>
                </div>
                <ul className="grid mt-8 text-left gap-y-4">
                    {plan.features.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-gray-400">
                            <Image src={Check} alt='check' width={24} height={24} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col items-center mt-8">
                    <Link href={plan.button.link || "#"}>
                        <p className={plan.popular ? "bg-black hover:bg-neutral-900 text-white px-2 p-1 border border-gray-700 rounded-md" : "bg-white hover:bg-white/80 text-black px-2 p-1 border border-gray-700 rounded-md"}>
                            {plan.button.text || "Get Started"}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard
