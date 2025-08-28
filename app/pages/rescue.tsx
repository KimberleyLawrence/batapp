import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Rescue() {
  return (
    <>


      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">Rescue and Wrap</h2></span>

      <div className="bg-red-300 dark:bg-gray-800 dark:border-gray-700 rounded-lg md:p-12 mb-5">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">


            <tr className="dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
              <td className="p-1">
                <svg className="w-[70px] h-[70px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                <h6 className="text-md">Being Vaccinated does <u>NOT</u> mean you should rescue. <strong className="font-semibold">Minimum 24hr monitoring should occur before any intervention for Non-Urgent cases.</strong></h6>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className=" mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mb-5 md:p-12">

              <h1 className="font-semibold text-2xl mb-1 ps-3 mt-2 ">How to Wrap</h1>
              <img src="/images/bat_wrap-01-2.png" alt="" className="flex-shrink-0" />



              <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400 m-2 ">

                <li>Open Wrap</li>
                <li>Place dummy in mouth before or during wrapping process</li>
              </ul>


              <img src="/images/bat_wrap_2.png" alt="" className="flex-shrink-0" />

              <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400 m-2 ">
                <li>Place bats tummy on the stuffing side of the roll (Bat will grab on with feet like they
                  do with their mums)</li>
                <li>Hold the baby in place gently but firmly, proceed to wrap around the body. (NB You can
                  cover the babies head)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  md:p-12">

              <h1 className="font-semibold text-2xl mt-2 mb-3 ps-3">How to Rescue</h1>
              <img src="/images/bat_in_towel.jpg" alt="" className="flex-shrink-0  max-w-sm mx-auto rounded-lg" />


              <ol className=" m-5 max-w-md space-y-1 list-decimal list-inside dark:text-gray-400">

                <li>Wrap in Bat Wrap </li>
                <li>Dry Glucose = Place a large pinch of glucose powder & put in mouth</li>
                <li>Warm pup for 5-10 minutes (depending on weather*)– place in basket with heat pad or under jacket against your body
                  <ul>*NB if Temperature on the day is above 27 degrees Celsius DO NOT PLACE ON
                    ARTIFICIAL HEAT</ul>
                </li>
                <li>DO NOT GIVE FLUIDS UNTIL WARM</li>
                <li>Once warm (IF EXPERIENCED CARER/RESCUER) gently provide glucose water –STOP if bat is not lapping </li>
                <li>Place dummy in mouth</li>
              </ol>
              <img src="/images/bat_in_towel.jpg" alt="" className="flex-shrink-0" />







            </div>
          </div>
        </div>







      </section>

    </>
  )
}
