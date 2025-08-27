import Pagetitle from "~/components/pagetitle";
import type { Route } from "./+types/home";
import { Link } from "react-router";

// SEO Data/info
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


//insert code for app between return (         )}
export default function Home() {
  return (


    <>


      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <span><h2 className="text-gray-900 dark:text-white text-4xl font-extrabold mb-3">Bat Monitoring </h2></span>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Information for observation and rescuing within the Yarra Bend Flying Fox colony.</p>
        <ul className="my-4 space-y-3">
          <li>
            <Link to="/new_before_you_go" className="flex items-center p-3 text-base  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Before You Go</h2>
                <p className="italic">Safety, Equipment, Guidelines</p>
              </span>


            </Link>
          </li>
          <li>
            <Link to="/locations" className="flex items-center p-3 text-base  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5" />
              </svg>


              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Locations</h2>
                <p className="italic">Location Terminology</p>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/look" className="flex items-center p-3 text-base  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>



              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >What to Look for</h2>
                <p className="italic">Sights and Sounds</p>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/rescue" className="flex items-center p-3 text-base  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.46 8.291 3.849-3.849a1.5 1.5 0 0 1 2.122 0l.127.127a1.5 1.5 0 0 1 0 2.122l-3.84 3.838a4 4 0 0 0-2.258-2.238Zm0 0a4 4 0 0 1 2.263 2.238l3.662-3.662a8.961 8.961 0 0 1 0 10.27l-3.676-3.676m-2.25-5.17 3.678-3.676a8.961 8.961 0 0 0-10.27 0l3.662 3.662a4 4 0 0 0-2.238 2.258L4.615 6.863a8.96 8.96 0 0 0 0 10.27l3.662-3.662a4 4 0 0 0 2.258 2.238l-3.672 3.676a8.96 8.96 0 0 0 10.27 0l-3.662-3.662a4.001 4.001 0 0 0 2.238-2.262m0 0 3.849 3.848a1.5 1.5 0 0 1 0 2.122l-.127.126a1.499 1.499 0 0 1-2.122 0l-3.838-3.838a4 4 0 0 0 2.238-2.258Zm.29-1.461a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.718 1.471-3.84 3.838a1.5 1.5 0 0 0 0 2.122l.128.126a1.5 1.5 0 0 0 2.122 0l3.848-3.848a4 4 0 0 1-2.258-2.238Zm2.248-5.19L6.69 4.442a1.5 1.5 0 0 0-2.122 0l-.127.127a1.5 1.5 0 0 0 0 2.122l3.849 3.848a4 4 0 0 1 2.238-2.258Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Rescue and Wrap</h2>
                <p className="italic">Vaxxed and approved rescuers only</p>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/calender" className="flex items-center p-3 text-base  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Bat Calender</h2>
                <p className="italic">Time and month considerations</p>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/report" className="flex items-center p-3 text-base  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Report Non-Urgent/Dead Bats</h2>
                <p className="italic">How to report</p>
              </span>
            </Link>
          </li>

        </ul>




      </div >

      <section className="bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                <tr className="dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                  <td className="p-1">
                    <svg className="w-[70px] h-[70px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    <h3 className="text-gray-900 dark:text-white text-2xl font-extrabold mb-2">Human Emergency</h3>
                    <h1 className="font-semibold">Emergency ID: YBP207</h1>
                    <p>Located at the toilets at Fairlea oval – Please quote ID Number if you need to call Emergency Services</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>

        </div>

      </section>



    </>
  )
}
