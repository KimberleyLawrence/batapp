import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Calender() {
    return (
        <>
    

<span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">Bat Calendar</h2></span>


            <div className="grid md:grid-cols-2 gap-8">

   
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-12  ">
                    <span><h2 className="text-gray-900 dark:text-white text-2xl font-extrabold mb-3">Time of Day</h2></span>
                    <tbody>
                        <tr>
                            <td className="">
                                <svg className="w-15 h-15 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                            </svg>

                                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 text-centre"> Morning</h2>
                                <p>Pups maybe playing and fall. Please observe before rescue</p>
                            </td>

                            <td className="border-s ps-5 border-gray-400">
                                <svg className="w-15 h-15 text-gray-800 dark:text-white" aria-hidden="true"  fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd" />
                                </svg>

                                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 text-centre"> Evening</h2>
                                <p>Mums will crèche pups, please don’t remove without advice</p>
                            </td>
                        </tr>
                    </tbody>




                </div>
            </div>



            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-gray-500 ">
                
            <span><h2 className="text-gray-900 dark:text-white text-2xl font-extrabold m-3">Pup Season </h2></span>
                <table className="w-full text-sm text-left  dark:text-blue-100">
                    <tbody className="text-xs text-white dark:text-white">
                        <tr>
                            <th scope="col" className="px-4 py-1 text-black dark:text-white">
                                <h4> Oct-Nov</h4>
                                <p>Pups should be on mum for the 1st 4 weeks of their life.</p>
                            </th>
                            <th scope="col" className=" border-s ps-5 border-gray-400 px-4 py-1 text-black dark:text-white">
                                <h4> Nov-Dec</h4>
                                <p>Mums will leave their babies in the tree for a break</p>
                            </th>
                            <th scope="col" className=" border-s ps-5 border-gray-400 px-4 py-1 text-black dark:text-white">
                                <h4> Jan-Feb</h4>
                                <p>Pups are learning to fly and will fly if approached.</p>
                            </th>

                        </tr>

                        <tr className="bg-red-600 border-b text-center ">
                            <td colSpan={3}>CRITICAL</td>
                        </tr>

                        <tr className="bg-red-300 text-black border-b ">

                            <td className=" list-disc px-4 py-1">
                                <td>
                                    <li>Small pup (size of hand) on ground.</li>
                                    <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc border-s ps-5 px-4 py-1 border-gray-400">
                                <td>
                                    <li>Pup on ground.</li>
                                    <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc border-s ps-5 px-4 py-1 border-gray-400">

                                <li>Pup on ground. </li>
                                <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>

                            </td>

                        </tr>



                        <tr className="bg-orange-600 border-b text-center">
                            <td colSpan={3}>URGENT</td>
                        </tr>

                        <tr className="bg-orange-300 text-black border-b ">

                            <td className="px-4 py-1 ">

                                <li>Pup alone, vocalising, no adults around.</li>
                            </td>

                            <td className="px-4 py-1 border-s ps-5 border-gray-400">
                                <ul className="list-disc">
                                    <li>Pup alone, vocalizing, no adults around.</li>
                                    <li> Condition check:</li>
                                    <ul>
                                        <li>Is their call hoarse?</li>
                                        <li>Are they skinny?</li>
                                        <li>Eyes bright?</li>
                                        <li>How big arethey?</li>
                                    </ul>
                                </ul>
                            </td>
                            <td className="px-4 py-1 border-s ps-5 border-gray-400">
                                <ul className="list-disc">
                                    <li>Pup will be learning to fly</li>
                                    <ul>
                                        <li>Is their call hoarse?</li>
                                        <li>How are they moving?</li>
                                        <li>Any Injuries?</li>
                                    </ul>
                                </ul>
                            </td>

                        </tr>

                        <tr className="bg-green-600 border-b text-center">
                            <td colSpan={3}>NON-URGENT</td>
                        </tr>

                        <tr className="bg-green-200 text-black border-b ">

                            <td className=" list-disc px-4 py-1">
                                <td>
                                    <li>Small pup (size of hand) on ground.</li>
                                    <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-4 py-1 border-s ps-5 border-gray-400">
                                <td>
                                    <li>Pup on ground.</li>
                                    <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-4 py-1 border-s ps-5 border-gray-400">

                                <li>Pup on ground. </li>
                                <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>

                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>


        </>
    )
}
