import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";
import ImageStaticMap from "src/images/yb_map_bats.svg";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Locations | Bats Victoria" },
    { name: "description", content: "Bats Victoria" },
  ];
}

export default function Locations() {
  return (
    <>

      <Pagetitle>Locations</Pagetitle>
      <section className="bg-white dark:bg-gray-900 ">
        <div className=" mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  md:p-12">







              <h1 className="font-semibold text-2xl mb-3">Interactive Map</h1>


              <iframe src="https://www.google.com.au/maps/d/u/0/embed?mid=1W0OACpLC-KvnQI4EfaITIMKsQSgFwW0&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>



              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <tbody>
                  <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>


                      <div className="text-sm font-semibold">T Intersection</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Freeway Side</div>
                    </th>

                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>


                      <div className="text-sm font-semibold">Kew Side</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Fairfield Side</div>
                    </th>

                  </tr>


                </tbody>
              </table>
            </div>





            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  md:p-12">







              <h1 className="font-semibold text-2xl mb-2">Static Map</h1>
              <img src={ImageStaticMap} alt="" className="flex-shrink-0" />



              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <tbody>
                  <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>


                      <div className="text-sm font-semibold">T Intersection</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Freeway Side</div>
                    </th>

                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-2 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>


                      <div className="text-sm font-semibold">Kew Side</div>
                    </th>
                    <td className="">
                      <div className="flex items-center">
                      </div>
                    </td>
                    <th scope="row" className="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                      <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                      </svg>
                      <div className="text-sm font-semibold">Fairfield Side</div>
                    </th>

                  </tr>


                </tbody>
              </table>
            </div>




          </div>



        </div>



      </section>





    </>
  )
}
