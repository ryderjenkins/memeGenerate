import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="flex flex-col md:flex-row items-center justify-between mb-16">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-5xl mb-6 text-blue-500 font-bold dark:text-gray-300">
                        Wellcome to Zupdogillion
                    </h2>
                    <h1 className="text-7xl md:text-7xl font-bold mb-4 text-gray-800 dark:text-white">
                        Turn text into memes with AI
                    </h1>
                    <Link
                        href="/generate"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 mt-5 px-6 rounded-lg text-lg transition duration-300"
                    >
                        Start Now
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="wolf.svg"
                        alt="AI Meme Generator"
                        width={800}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                    Publish Look and other memes from users
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
                        >
                            <Image
                                src={"wolf.svg"}
                                alt={`Meme ${i}`}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                                Meme Title {i}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                    Zupdogillion.ai Tutorial
                </h2>
                <p className="text-center pb-10">
                    Why should you use Zupdogillion.ai to generate memes over
                    other popular tools?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Basic Meme Formats
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Learn about popular meme structures and how to use
                            them effectively.
                        </p>
                        <Link
                            href="#"
                            className="text-blue-500 hover:underline"
                        >
                            Watch Tutorial
                        </Link>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Crafting Engaging Captions
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Discover techniques for writing captions that make
                            your memes stand out.
                        </p>
                        <Link
                            href="#"
                            className="text-blue-500 hover:underline"
                        >
                            Read Guide
                        </Link>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Crafting Engaging Captions
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Discover techniques for writing captions that make
                            your memes stand out.
                        </p>
                        <Link
                            href="#"
                            className="text-blue-500 hover:underline"
                        >
                            Read Guide
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                            How does the AI meme generator work?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Our AI analyzes your input and matches it with
                            suitable templates and images to create hilarious
                            memes tailored to your ideas.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                            Can I use the generated memes commercially?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            The memes generated are for personal use. For
                            commercial use, please check our licensing options
                            in the pricing section.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
