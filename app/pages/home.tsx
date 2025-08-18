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
      <Pagetitle name="Bats Monitoring App" />

      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Bat Monitoring
        </h1>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Information for observation and rescuing within the Yarra Bend Flying Fox colony.</p>
        <ul className="my-4 space-y-3">
          <li>
            <Link to="/before_you_go" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            
             
              <span className="flex-1 ms-3 whitespace-nowrap">Before You Go</span>
             
            </Link>
          </li>
          <li>
            <Link to="/locations" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <span className="flex-1 ms-3 whitespace-nowrap">Locations</span>
            </Link>
          </li>
          <li>
            <Link to="/look" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <span className="flex-1 ms-3 whitespace-nowrap">What to Look For</span>
            </Link>
          </li>
          <li>
            <Link to="/rescue" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <span className="flex-1 ms-3 whitespace-nowrap">How to Rescue and Wrap</span>
            </Link>
          </li>
          <li>
            <Link to="/calender" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <span className="flex-1 ms-3 whitespace-nowrap">Bat Calender</span>
            </Link>
          </li>
          <li>
            <Link to="/report" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <svg aria-hidden="true" className="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
             
              <span className="flex-1 ms-3 whitespace-nowrap">How to Report Non-Urgent/Dead Bat</span>
            </Link>
          </li>
        
        </ul>
      
      </div >



    </>
  )
}
