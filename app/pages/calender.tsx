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
            <Pagetitle name="Bat Calender" />


           

            <div className="grid md:grid-cols-2 gap-8">

                <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Time of Day</h2></span>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <tbody>
                        <tr>
                            <td className="">
                                <img src="/public/images/sun_sunset-02.svg" width="100" />

                                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 "> Morning</h2>
                                <p>Pups maybe playing and fall. Please observe before rescue</p>
                            </td>

                            <td className="">
                                <img src="/public/images/sun_sunset-01.svg" width="100" />
                                <h2 className="text-gray-900 dark:text-white text-2xl mb-2 text-centre"> Evening</h2>
                                Mums will crèche pups, please don’t remove without advice
                            </td>
                        </tr>
                    </tbody>




                </div>
            </div>

            <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Bat Calender </h2></span>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-gray-500 ">
                <table className="w-full text-sm text-left  dark:text-blue-100">
                    <tbody className="text-xs text-white dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-black dark:text-white">
                                <h4> Oct-Nov</h4>
                                <p>Pups should be on mum for the 1st 4 weeks of their life.</p>
                            </th>
                            <th scope="col" className="px-6 py-3 text-black dark:text-white">
                                <h4> Nov-Dec</h4>
                                <p>Mums will leave their babies in the tree for a break</p>
                            </th>
                            <th scope="col" className="px-6 py-3 text-black dark:text-white">
                                <h4> Jan-Feb</h4>
                                <p>Pups are learning to fly and will fly if approached.</p>
                            </th>

                        </tr>

                        <tr className="bg-red-600 border-b text-center ">
                            <td colSpan="3">CRITICAL</td>
                        </tr>

                        <tr className="bg-red-300 text-black border-b ">

                            <td className=" list-disc px-6 py-4">
                                <td>
                                    <li>Small pup (size of hand) on ground.</li>
                                    <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-6 py-4">
                                <td>
                                    <li>Pup on ground.</li>
                                    <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-6 py-4">

                                <li>Pup on ground. </li>
                                <li>Pup low in tree, vocalizing, no adults around, no adults responding.</li>

                            </td>

                        </tr>



                        <tr className="bg-orange-600 border-b text-center">
                            <td colSpan="3">URGENT</td>
                        </tr>

                        <tr className="bg-orange-300 text-black border-b ">

                            <td className="px-6 py-4">

                                <li>Pup alone, vocalising, no adults around.</li>
                            </td>

                            <td className="px-6 py-4">
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
                            <td className="px-6 py-4">
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
                            <td colSpan="3">NON-URGENT</td>
                        </tr>

                        <tr className="bg-green-200 text-black border-b ">

                            <td className=" list-disc px-6 py-4">
                                <td>
                                    <li>Small pup (size of hand) on ground.</li>
                                    <li>Pup low in tree, vocalising, no adults around,no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-6 py-4">
                                <td>
                                    <li>Pup on ground.</li>
                                    <li> Pup low in tree, vocalizing, no adults around, no adults responding.</li>
                                </td>
                            </td>
                            <td className="list-disc px-6 py-4">

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
