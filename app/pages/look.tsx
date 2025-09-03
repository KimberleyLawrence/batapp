import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";
import Alonebat from "src/images/alone_bat_2.svg";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "What to Look For | Bats Victoria" },
    { name: "description", content: "Bats Victoria" },
  ];
}

export default function Look() {
  return (
    <>


      <Pagetitle>What to Look For</Pagetitle>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-12 mb-2">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <svg className="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  <h1 className="font-semibold text-2xl ">Look</h1>
                  <p>Look for pups away from their mother or pups low in trees.</p>
                </td>
              </tr>

              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <svg className="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
                  </svg>


                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  <h6 className="font-semibold text-2xl ">Listen</h6>
                  <p>Listen for high pitched crying/chirping sounds</p>
                  <h6 className="font-semibold italic">Listen to baby bat cry</h6>
                  <Batnoise />
                </td>
              </tr>
              <tr className=" dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <img src={Alonebat} className=" md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  <h6 className="font-semibold text-2xl ">Alone for a long period</h6>
                  (Note the location and check on way out)
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>





      <div className="bg-red-300 dark:bg-gray-800 dark:border-gray-700 rounded-lg  md:p-12 mb-5">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">


            <tr className="dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
              <td className="p-1">
                <svg className="w-[70px] h-[70px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">

                <h6>A very low pup or pups on the ground are in direct danger, may be compromised and/or susceptible to dog attack and will be treated as high priority.</h6>
              </td>
            </tr>




          </table>
        </div>
      </div>


      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">Questions to Consider</h2></span>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 md:p-12 mb-8">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <p> <strong> You may also be asked these questions by a carer/rescuer </strong></p>
          <ul className="pl-5 list-disc">
            <li>Age: How big is it (ie size of your hand? Bigger?)</li>
            <li>Condition:</li>
            <ul className="pl-5 list-disc">
              <li>Lethargic?</li>
              <li>Does it have bright eyes?</li>
              <li>Alone or With Adults?</li>
              <li>Are there adults near by?</li>
              <li>Has baby just fallen & mum is looking for them?</li>
            </ul>
            <li>Call / Crying: Is the sound hoarse? Is the pup quiet?</li>
          </ul>
        </div>
      </div>


    </>
  )
}
