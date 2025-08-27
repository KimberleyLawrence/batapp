import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Locations() {
  return (
    <>

      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-3">Locations </h2></span>
      <section className="bg-white dark:bg-gray-900">
        <div className=" mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  md:p-12">







              <h1 className="font-semibold text-2xl mb-3">Interactive Map</h1>


              <iframe src="https://www.google.com.au/maps/d/u/0/embed?mid=1W0OACpLC-KvnQI4EfaITIMKsQSgFwW0&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
             
          
             
              <div className="grid md:grid-cols-2 gap-8">


                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  ">

                  <tbody className="">
                    <tr>
                      <td className="" >
                        <ul className="list-disc px-6 py-6">
                          <li>Fairfield Side</li>
                          <li>Kew Side</li>
                        </ul>
                      </td>

                      <td className="" >
                        <ul className=" list-disc px-12 py-6">
                          <li>T Intersection</li>
                          <li>Freeway Bridge</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </div>
                </div>
           




              <h1 className="font-semibold text-2xl mb-3">Static Map</h1>
              <img src="/images/yb_map_bats.svg" alt="" className="flex-shrink-0" />

              <div className="row col-sm text-center">

                <div className="col-sm-3 themed-grid-col">

                  <p className="text-orange-600"> T Intersection</p>

                </div>
                <div className="col-sm-3 themed-grid-col">

                  <p className="text-green-800 col-sm-3"> Fairfield Side</p>
                </div>
                <div className="col-sm-3 themed-grid-col">
                  <p className="text-yellow-600 col-sm-3"> Kew Side</p>

                </div>
                <div className="col-sm-3 themed-grid-col">
                  <p className="text-blue-600 col-sm-3"> Freeway Side</p>
                </div>


              </div>









            </div>



          </div>
        </div>


      </section>


    </>
  )
}
