import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-slate-800 text-4xl text-center font-bold mb-12">
                Contact Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-slate-600 mb-4">
                        We&apos;d love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center text-slate-600">
                            <FaPhoneAlt className="mr-2 text-xl" />
                            <span>(123) 456-7890</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <FaEnvelope className="mr-2 text-xl" />
                            <span>support@eshop.com</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <FaMapMarkerAlt className="mr-2 text-xl" />
                            <span>123 E-Shop St, Online City, Web</span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
                        <div>
                            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your email"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows="4"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                type="button"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};