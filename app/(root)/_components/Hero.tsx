
import Image from "next/image";
import HeroImage from "@/public/assets/hero.png"
import Link from "next/link";

const Hero = () => {
    return (
        <main
            className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
            <div className="py-6 md:order-1 hidden md:block">
                <Image
                    src={HeroImage}
                    alt="Astronaut in the air"
                    width={400}
                    height={400}
                />
            </div>
            <div>
                <h1
                    className="text-4xl lg:text-5xl xl:text-6xl font-semibold lg:tracking-tight xl:tracking-tighter">
                    Centralized Data Manager, for individuals, families or enterprises!
                </h1>
                <p className="text-lg mt-4 text-gray-800 max-w-xl">
                    Introducing{" "}
                    <span className="text-gray-500 underline">
                        AI-translation
                    </span>
                    {" "}for groups with multilingual users.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                        rel="noopener"
                        href="https://github.com/surjithctly/astroship"
                        className="flex gap-1 items-center justify-center"
                        target="_blank">
                    </Link>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/dashboard" className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Get Started
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Hero