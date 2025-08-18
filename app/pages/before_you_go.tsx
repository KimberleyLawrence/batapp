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


      <Accordion>
        <AccordionItem title="Safety">
          {safteyOne}
        </AccordionItem>
        <AccordionItem title="Observing Equipment">
          {safteyTwo}
        </AccordionItem>
        <AccordionItem title="Rescue Equipment">
          {safteyThree}
        </AccordionItem>
        <AccordionItem title="Guidelines">
          {safteyFour}
        </AccordionItem>
      </Accordion>


      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">



          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <tbody>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700  ">
                  <td className="p-4">
                    <img src="/public/images/medic.svg" className="w-70 md:w-100 max-w-full max-h-full" alt="medic" />
                  </td>
                  <td className="p-4">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Human Emergency</h2>
                  </td>
                </tr>
              </tbody>



              <h1 className="font-semibold">Emergency ID: YBP207</h1>
              <p>Located at the toilets at Fairlea oval – Please quote ID Number if you need to call Emergency Services</p>

            </div>














          </div>
        </div>
      </section>




    </>
  )
}
