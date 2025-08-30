import Pagetitle from "~/components/pagetitle";
import ContactItem from "~/components/contact";
import type { Route } from "./+types/home";
import ImageFlyByNightLogo from "src/images/flybynight_logo_fromwebsite.jpg";
import ImageFFOB from "src/images/FOBB_logo.png";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Important Contacts | Bats Victoria" },
    { name: "description", content: "Bats Victoria" },
  ];
}

export default function Contact() {
  return (
    <>

      <Pagetitle>Important Contacts</Pagetitle>

      <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <p className="text-md font-normal text-gray-500 dark:text-gray-400">For any enquiries, questions or concerns</p>
        <ul className="my-4 space-y-3">

          <ContactItem name="Tamsyn" url="#" icon={ImageFlyByNightLogo} >Fly by Night</ContactItem>
          <ContactItem name="Emma" url="#" icon={ImageFlyByNightLogo} >Fly by Night</ContactItem>
          <ContactItem name="Megan" url="#" icon={ImageFFOB} >Friends of Bats and Bushcare</ContactItem>

          {/* 
          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src={ImageFlyByNightLogo} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl" >Tamsyn</h2>
                <p className="italic">Fly By Night</p>
              </span>
            </a>
          </li>


          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src={ImageFlyByNightLogo} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl" >Emma</h2>
                <p className="italic">Fly By Night</p>
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src={ImageFFOB} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl" >Megan</h2>
                <p className="italic">Friends of Bats and Bushcare</p>
              </span>
            </a>
          </li>
        */}

          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <svg className="w-20 h-15 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900 text-xl " >What's App  </h2>
                <p className="italic">Bat Observation Chat</p>

              </span>
            </a>
          </li>





        </ul>

      </div>


      <section className="bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg  md:p-12 mb-8">
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

      </section>

      <span className="block text-sm text-gray-500 text-center align-bottom dark:text-gray-400"> ©2025 Fly By Night</span>
      <span className="block text-xs text-gray-500 text-center align-bottom dark:text-gray-400"> <a href="https://kimberleylawrence.com/">App built by KLD</a></span>

    </>
  )
}
