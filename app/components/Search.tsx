'use client'

import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    };
    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target?.value);
    };

    return (
        <form
            className="w-50 flex justify-center content-center gap-2 md:justify-between"
            onSubmit={handleSubmit}>
            <input
                className="p-2 outline-orange-400 rounded-lg text-lg"
                type="text"
                value={search}
                placeholder="Search..."
                onChange={handleChange}>
            </input>
            <button className="bg-blue-500 p-2 flex justify-center rounded-lg">
                <svg className="w-6 h-6  text-gray-800 self-center dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </button>
        </form>
    );
};