export default function Navbar() {
    return (
        <div class="bg-blue-700 fixed h-24 w-full z-20 top-0 left-0 rounded-b-3xl shadow-lg shadow-indigo-500/40">
            <div class="mt-2 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center ml-8">
                    <img src={"logo-exdecode.png"} class="h-12 h-12" alt="Exdecode Logo" />
                </a>
                <div class="flex md:order-2">
                    <button data-collapse-toggle="divbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="bg-blue-700 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0">
                        <li>
                            <a href="#" class="block text-xl py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-gray-300 md:p-0 md:dark:text-gray-300" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block text-xl py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-300 md:p-0 md:dark:text-white-300 hover:text-gray-300">About</a>
                        </li>
                        <li>
                            <a href="#" class="block text-xl py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-300 md:p-0 md:dark:text-white-300 hover:text-gray-300">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block text-xl py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-300 md:p-0 md:dark:text-white-300 hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}