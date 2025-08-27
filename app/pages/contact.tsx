import Pagetitle from "~/components/pagetitle";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Contact() {
  return (
    <>

      <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Important Contacts</h2></span>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">For any enquiries, questions or concerns</p>
        <ul className="my-4 space-y-3">
          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src="/public/images/flybynight_logo_fromwebsite.jpg" className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Tamsyn</h2>
                <p className="italic">Fly By Night</p>
              </span>
            </a>
          </li>


          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src="/public/images/flybynight_logo_fromwebsite.jpg" className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Emma</h2>
                <p className="italic">Fly By Night</p>
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src="/public/images/FOBB_logo.png" className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >Megan</h2>
                <p className="italic">Friends of Bats and Bushcare</p>
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <svg className="w-20 h-15 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap ">
                <h2 className="font-bold text-gray-900" >What's App Bat Observation Chat </h2>
                <p className="italic">Invite only</p>
              </span>
            </a>
          </li>

          
        </ul>

      </div>

    </>
  )
}
