import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-300 dark:bg-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div
                            className="inline"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <Image
                                src="wolf.svg"
                                width={50}
                                height={50}
                                alt="logo"
                            />
                            <h3 className="text-lg font-semibold mb-0 ml-2 text-gray-800 dark:text-white">
                                Zupdogillion.ai
                            </h3>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300">
                            Generate original memes powered by Zupdogillion.ai
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                            Menu
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/generate"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    Generate
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/all-memes"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    All Memes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                            Resources
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    Pitch Deck
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                            Contect and Follow us
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-600 dark:text-gray-300">
                        © 2024 AI Meme Generator. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
