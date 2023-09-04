import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 flex p-4 justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl gap-2">
            <h1 className="text-3xl font-bold text-white md: text-center">
                <Link href="/">Wiki Search!</Link>
            </h1>
                <Search />
        </nav>
    )
}