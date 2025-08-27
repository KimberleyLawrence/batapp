import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Report() {
  return (
    <>




      <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">How to Report Non-Urgent/Dead Bats</h2></span>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table>
            <tr>
              <td className="px-2 py-2">
                <svg className=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  width="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
                  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>


              </td>
              <tr>
                <td className="px-2 py-2">
                  <p> <strong> 1. Take a photo </strong></p>
                  <ul className="pl-5 list-disc">

                    <li>Please take a picture of the bat zoomed <u>in</u> with your camera</li>
                    <li>Please take a picture of the bat zoomed <u>out</u> and please mark thebat in this picture – We are looking for clear markers(trees/logs/rocks)</li>
                    <li>Mark spot if possible (Use ribbon, sticks, rocks etc.)</li>
                  </ul>
                </td>
              </tr>
            </tr>
          </table>

        </div>
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table>
            <tr>
              <td className="px-1 py-1">
                <svg className=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                </svg>

              </td>
              <tr>
                <td className="px-1 py-1">
                  <p> <strong> 2. Record the Location </strong></p>
                  <ul className="pl-5 list-disc">

                    <li>Pin drop the location on Google Maps</li>
                    <li>And or Avenza / What 3 Words</li>
                  </ul>
                </td>
              </tr>
            </tr>
          </table>


        </div>
      </div>


      





         
     




    </>
  )
}
