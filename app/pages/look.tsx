import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Look() {
  return (
    <>
      <Pagetitle name="What to Look For"/> 
      

      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">What to Look For</h2></span>
      
 <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <tbody>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src="/public/images/eye-solid-full.svg" className="w-60 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                <h1 className="font-semibold">Look For</h1>
                  <p>Pups away from their mother or pups low in trees.</p>
              </td>
            </tr>

            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src="/public/images/noise.svg" className="w-60 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                <h6 className="font-semibold">Listen For</h6>
                  <p>High pitched crying/chirping sounds</p>
                  <h6 className="font-semibold">Play baby bat sound</h6>
                   <Batnoise />
              </td>
            </tr>
               <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src="/public/images/alone_bat.svg" className="w-60 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                <h6 className="font-semibold">Alone for extended periods</h6>
                (Note the location and check on way out)
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      </div>
      

      
      
      
 <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

        
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src="/public/images/alert.svg" className="w-60 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                
                  <p>A very low pup or pups on the ground are in direct danger, may be compromised, susceptible to dog attack and will be treated as high priority.</p>
              </td>
            </tr>

           

        
        </table>
      </div>
    </div>

    </>
  )
}
