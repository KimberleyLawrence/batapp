import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Caleender | Bats Victoria" },
        { name: "description", content: "Bats Victoria" },
    ];
}

export default function Calender() {
    return (
        <>


            <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">Bat Calendar</h2></span>


            <div className="grid md:grid-cols-2 gap-8">


                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-12 mb-3  ">
                    <span><h2 className="text-gray-900 dark:text-white text-2xl font-extrabold mb-3 text-2xl">Time of Day</h2></span>
                    <tbody>
                        <tr>
                            <td className=" p-2">
                                <div className=" flex justify-center items-center">
                                    <svg className="w-13 h-13 text-gray-800 dark:text-white " fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                    </svg>
                                </div>

                                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 text-center"> Morning</h2>
                                <p className="text-center text-sm">Pups maybe playing and fall. Please observe before rescue</p>
                            </td>

                            <td className="ps-4 border-gray-400 text-centre">
                                <div className=" flex justify-center items-center">
                                    <svg className="w-13 h-13 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
                                    </svg>
                                </div>


                                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 text-center"> Evening</h2>
                                <p className="text-center text-sm">Mums will crèche pups, please don’t remove without advice</p>
                            </td>
                        </tr>
                    </tbody>




                </div>
            </div>



            <div className="relative  overflow-x-auto shadow-md sm:rounded-lg border-gray-200 border rounded-lg">

                <span><h2 className="text-gray-900 dark:text-white text-2xl font-extrabold m-3">Pup Season </h2></span>
                <table className="w-full text-sm text-left  dark:text-blue-100">
                    <tbody className=" text-white dark:text-white">
                        <tr className="text-center align-top">
                            <th scope="col" className="px-4 py-1  dark:text-white  ">
                                <h4 className="text-xl text-black" > Oct-Nov</h4>
                                <p className="text-gray-500 text-sm">Pups should be on mum for the 1st 4 weeks of their life.</p>
                            </th>
                            <th scope="col" className=" border-s ps-4 border-gray-400 px-4 py-1  dark:text-white">
                                <h4 className="text-xl text-black"> Nov-Dec</h4>
                                <p className="text-gray-500 text-sm">Mums will leave their babies in the tree for a break</p>
                            </th>
                            <th scope="col" className=" border-s ps-4 border-gray-400 px-4 py-1  dark:text-white">
                                <h4 className="text-xl text-black"> Jan-Feb</h4>
                                <p className="text-gray-500 text-sm">Pups are learning to fly and will fly if approached.</p>
                            </th>

                        </tr>

                        <tr className="bg-red-600 border-b text-center ">
                            <td colSpan={3} className="text-lg font-bold">CRITICAL</td>
                        </tr>

                        <tr className="bg-red-300 text-black border-b align-top ">

                            <td className=" list-disc px-4 py-1 text-sm">
                                <td>
                                    <li>Small pup (size of hand) on ground.</li>
                                    <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc border-s ps-4 px-4 py-1 border-gray-400 text-sm">
                                <td>
                                    <li>Pup on ground.</li>
                                    <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc border-s ps-4 px-4 py-1 border-gray-400 text-sm">

                                <li>Pup on ground. </li>
                                <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>

                            </td>

                        </tr>



                        <tr className="bg-orange-600 border-b text-center">
                            <td colSpan={3} className="text-lg font-bold">URGENT</td>
                        </tr>

                        <tr className="bg-orange-300 text-black border-b align-top ">

                            <td className="px-4 py-1 text-sm">

                                <li>Pup alone, vocalising, no adults around.</li>
                            </td>

                            <td className="px-4 py-1 border-s ps-4 border-gray-400 text-sm">
                                <ul className="list-disc">
                                    <li>Pup alone, vocalizing, no adults around.</li>
                                    <li> Condition check:</li>
                                    <ul>
                                        <li>Is their call hoarse?</li>
                                        <li>Are they skinny?</li>
                                        <li>Eyes bright?</li>
                                        <li>How big are they?</li>
                                    </ul>
                                </ul>
                            </td>
                            <td className="px-4 py-1 border-s ps-4 border-gray-400 text-sm">
                                <ul className="list-disc ">
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
                            <td colSpan={3} className="text-lg font-bold">NON-URGENT</td>
                        </tr>

                        <tr className="bg-green-200 text-black border-b align-top ">

                            <td className=" list-disc px-4 py-1 text-sm">
                                <td>
                                    <li>Small pup (size of hand) on ground.</li>
                                    <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-4 py-1 border-s ps-4 border-gray-400 text-sm">
                                <td>
                                    <li>Pup on ground.</li>
                                    <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-4 py-1 border-s ps-4 border-gray-400 text-sm">

                                <li>Pup on ground. </li>
                                <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>

                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <div>
                <p className="text-xs">Pups can be born anytime between Oct-Feb. </p>

                <p className="text-xs">This guide is based on general observations from past seasons.
                </p>
            </div>


        </>
    )
}
