import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";
import { Accordion, AccordionItem } from "~/components/accordion";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const safteyOne =
  (<>
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <tbody>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                <h1 className="font-semibold">Pair Up</h1>
                <p>Go in Pairs or let someone know you are going to check camp.</p>
              </td>
            </tr>

            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14" />
                </svg>

              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                <h6 className="font-semibold">Be Quiet</h6>
                Please be quiet and walk slowly through camp.
              </td>
            </tr>

            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src="/public/images/person-hiking-solid_wpath.svg" className="w-60 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white">
                <h6 className="font-semibold">Walk on Path</h6>
                ALWAYS stay on path - please do not go under the camp of bats.
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>



  </>);

const safteyTwo =
  (<>
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">


      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
        <ul className="list-disc">
          <li>Binoculars</li>
          <li>Water</li>
          <li>Sun Protection</li>
          <li>Aerogard</li>
          <li>Gloves</li>
          <li> First Aid Kit (inc. Snake Kit, hand sanitizer)</li>
          <li>Long Socks /Long Pants/protective Shoes</li>
        </ul>
      </p>


    </div>

  </>);
const safteyThree =
  (<>
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
        <ul className="list-disc">

          <li>Water - preboiled preferred</li>
          <li>Bat wraps</li>
          <li>Syringes</li>
          <li>Dummies/teats</li>
          <li>Glucose (glucodin powder)</li>
          <li>Basket & handwarmers</li>
          <li>Identification</li>
        </ul>
      </p>

    </div>

  </>);

const safteyFour =
  (<>
    <table>
      <tbody>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

          <td className="px-6 py-4 text-gray-900 dark:text-white">

            <ul className="list-disc">
              <li>Do not attempt retrieval without second opinion from experienced carers or rescuers.</li>
              <li>Retrieving pups needs to be done as quietly as possible without disrupting the camp.</li>
              <li>Tree climbers will only be used for pups outside of the camp.</li>
              <li>Rescuers with 10M+ poles must be experienced or trained before attempting pole rescue.</li>
              <li>All pups rescued(?) must be reported to group chat, Tamsyn, Emma H or Megan.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>







  </>);



export default function BeforeYouGo() {
  return (
    <>
      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">Before You Go</h2></span>





      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  mb-4">

        <div className="relative overflow-x-auto sm:rounded-lg"><span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold m-3">Safety</h2></span>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ml-2">

            <tbody>
              <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <svg className="w-18 h-18 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                </td>
                <td className=" px-6 py-4 text-gray-900 dark:text-white">
                  <h1 className="font-semibold text-2xl ">Pair Up</h1>
                  <p>Go in Pairs or let someone know you are going to check camp.</p>
                </td>
              </tr>

              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <svg className="w-18 h-18  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14" />
                  </svg>

                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  <h6 className="font-semibold text-2xl">Be Quiet</h6>
                  Please be quiet and walk slowly through camp.
                </td>
              </tr>

              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <img src="/public/images/person-hiking-solid_wpath_outline.svg" className="w-18 h-18S md:w-15 max-w-full max-h-full" alt="Apple Watch" />
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  <h6 className="font-semibold text-2xl">Walk on Path</h6>
                  <p>ALWAYS stay on path - please do not go under the camp of bats.</p>

                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg  md:p-12 mb-2">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                <tr className="dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                  <td className="p-3">
                    <svg className="w-[70px] h-[70px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    <h3 className="text-gray-900 dark:text-white text-xl font-extrabold ">Human Emergency</h3>
                    <h1 className="font-semibold">Emergency ID: YBP207</h1>
                    <p>Located at the toilets at Fairlea oval – Please quote ID Number if you need to call Emergency Services</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>

        </div>

      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-3 m-3">Equipment </h2></span>


      <div className="grid md:grid-cols-2 gap-8">


        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-12">

          <tbody>
            <span>
            <tr>
              <td className="">
                <h2 className="text-gray-900 dark:text-white text-xl font-bold  "> Observing</h2>
                <ul className="list-disc p-3">
                  <li>Binoculars</li>
                  <li>Water</li>
                  <li>Sun Protection</li>
                  <li>Aerogard</li>
                  <li>Gloves</li>
                  <li> First Aid Kit (inc. Snake Kit, hand sanitizer)</li>
                  <li>Long Socks, long pants, protective shoes</li>
                </ul>
              </td>

              <td className="border-s ps-5 border-gray-300">

                <h2 className="text-gray-900 dark:text-white text-xl font-bold"> Rescuing</h2>
                <ul className="list-disc p-3">

                  <li>Water - preboiled preferred</li>
                  <li>Bat wraps</li>
                  <li>Syringes</li>
                  <li>Dummies/teats</li>
                  <li>Glucose (glucodin powder)</li>
                  <li>Basket & handwarmers</li>
                  <li>Identification</li>
                </ul>
              </td>
              </tr>
              </span>
          </tbody>
        </div>
      </div>

      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mt-5 ms-3">Guidelines </h2></span>

      <table>
        <tbody>

          <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

            <td className="px-6 py-4 text-gray-900 dark:text-white">

              <ul className="list-disc">
                <li>Do not attempt retrieval without second opinion from experienced carers or rescuers.</li>
                <li>Retrieving pups needs to be done as quietly as possible without disrupting the camp.</li>
                <li>Tree climbers will only be used for pups outside of the camp.</li>
                <li>Rescuers with 10M+ poles must be experienced or trained before attempting pole rescue.</li>
                <li>All pups rescued(?) must be reported to group chat, Tamsyn, Emma H or Megan.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

 




    </>
  )
}
