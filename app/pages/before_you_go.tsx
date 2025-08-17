import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function BeforeYouGo() {
  return (
    <>
      <Pagetitle name="Before You Go" />

      <Batnoise />


      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Safety  </h2>




            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <tbody>
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img src="/public/images/user-pair.svg" className="w-60 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                    </td>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                      <h1 className="font-semibold">Pair Up</h1>
                      <p>Go in Pairs or let someone know you are going to check camp.</p>
                    </td>
                  </tr>

                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img src="/public/images/shh.svg" className="w-60 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
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



          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">

              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Human Emergency</h2>
              <tbody>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700  ">
                  <td className="p-4">
                    <img src="/public/images/medic.svg" className="w-70 md:w-60 max-w-full max-h-full" alt="medic" />
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">

                    <h1 className="font-semibold">Emergency ID: YBP207</h1>
                    <p>Located at the toilets at Fairlea oval – Please quote if you need to call Emergency Services</p>
                  </td>
                </tr>
              </tbody>
            </div>




            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Equipment</h2>

              <h3 className="text-gray-900 dark:text-white text-2xl underline mb-2">For Observation</h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                <ul>
                  <li>Binoculars</li>
                    <li>Water</li>
                    <li>Sun Protection</li>
                    <li>Aerogard</li>
                    <li>Gloves</li>
                    <li> First Aid Kit (inc. Snake Kit, hand sanitizer)</li>
                    <li>Long Socks /Long Pants/protective Shoes</li>
                </ul>
              </p>
                  <h3 className="text-gray-900 dark:text-white text-2xl underline mb-2">For Rescue</h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                <ul>
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








          </div>
        </div>
      </section>




    </>
  )
}
