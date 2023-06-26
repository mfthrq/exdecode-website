"use client";

import 'tailwindcss/tailwind.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import countriesData from '@/components/codePhone.json';
import Head from 'next/head';

export default function Contact() {
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Lakukan sesuatu dengan nomor telepon yang di-submit
    //     console.log(selectedCountry + phoneNumber);
    // };
    return (
        <section class="bg-gray-900">
            <Head>
                <link rel="icon" href="/logo-exdecode-bgblue.png" />
                <title>Contact</title>
            </Head>
            <Navbar />
            <div class="py-36 px-4 mx-auto max-w-screen-md">
                <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p class="mb-16 text-center text-white sm:text-xl text-justify">Got a problem on the server? Want to give feedback about the server? Or want to ask about our community partnership? Let us know!</p>
                </motion.div>

                <form action="#" class="-mt-8 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                        <input type="email" id="email" class="block h-12 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="excodian@gmail.com" required />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='w-full'
                    >
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                        <div class='flex w-full'>
                            <select id="country" value={selectedCountry} onChange={handleCountryChange} class="flex-none h-12 w-24 p-3 text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" >
                                {countriesData.map((country) => (
                                    <option key={country.code} value={country.dial_code}>
                                        {country.code} ({country.dial_code})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                class="flex-1 w-full h-12 p-3 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="123-456-78"
                            />
                        </div>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block h-12 p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Message</label>
                        <textarea id="message" rows="6" class="block h-12 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment"></textarea>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        type="submit"
                        className="mb-8 inline-flex cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        href="https://discord.gg/vuzKehbscE"
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
            <Footer />
        </section>

    )
}