import 'tailwindcss/tailwind.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import countriesData from '@/components/codePhone.json';
import Head from 'next/head';

export default function Contact() {
    const [state, handleSubmit] = useForm("mpzgarqy");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Mengatur data negara dari JSON ke dalam state countries
        setCountries(countriesData);

        // Mengatur negara pertama sebagai negara yang dipilih secara default
        setSelectedCountry(countriesData[0].dial_code);
    }, []);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleCountryChange = (e) => {
        const selectedCountryCode = e.target.value;
        setSelectedCountry(selectedCountryCode);

        // Mencari negara yang sesuai dengan kode yang dipilih
        const selectedCountryData = countriesData.find((country) => country.dial_code === selectedCountryCode);

        // Mengatur kode telepon negara yang dipilih ke phoneNumber
        if (selectedCountryData) {
            setPhoneNumber(selectedCountryData.dial_code);
        }
    };

    if (state.succeeded) {
        return (
            <p>Thanks for joining!</p>
        );
    }

    return (
        <section className="bg-gray-900">
            <Head>
                <link rel="icon" href="/logo-exdecode-bgblue.png" />
                <title>Contact</title>
            </Head>
            <Navbar />
            <div className="py-36 px-4 mx-auto max-w-screen-md">
                <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                    <p className="mb-16 text-center font-normal text-gray-300 sm:text-xl text-justify">Got a problem on the server? Want to give feedback about the server? Or want to ask about our community partnership? Let us know!</p>
                </motion.div>

                <form action="https://formspree.io/f/mpzgarqy" method="POST" className="-mt-8 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="block h-12 shadow-sm bg-gray-700 border text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 border-gray-600 placeholder-gray-400"
                            placeholder="excodian@gmail.com"
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className="w-full"
                    >
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                        <div className="flex w-full">
                            <select
                                id="country"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                className="flex-none h-12 w-24 p-3 text-sm text-white bg-gray-700 rounded-l-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-600 placeholder-gray-400"
                                required
                            >
                                {countriesData.map((country) => (
                                    <option key={country.code} value={country.dial_code}>
                                        {country.code} ({country.dial_code})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                className="block flex-1 w-full rounded-r-lg h-12 shadow-sm bg-gray-700 border text-white text-sm focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 border-gray-600 placeholder-gray-400"
                                placeholder="123-456-78"
                                required
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            className="block h-12 shadow-sm bg-gray-700 border text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 border-gray-600 placeholder-gray-400"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3 }}
                        className="sm:col-span-2"
                    >
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            className="block h-32 shadow-sm bg-gray-700 border text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 border-gray-600 placeholder-gray-400"
                            placeholder="Leave a comment"
                            required
                        ></textarea>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3.5 }}
                        type="submit"
                        className="flex items-center justify-center w-28 h-12 mb-8 inline-flex cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={state.submitting}
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
            <Footer />
        </section>
    );
}
