import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Calender() {
  return (
    <>
      <Pagetitle name="Bat Calender"/> 
      
 

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                <h4> Oct-Nov</h4>
                <p>Pups should be on mum for the 1st 4 weeks of their life.</p>
                </th>
                <th scope="col" class="px-6 py-3">
                                     <h4> Nov-Dec</h4>
                    <p>Mums will leave their babies in the tree for a break</p>
                </th>
                <th scope="col" class="px-6 py-3">
                  <h4> Jan-Feb</h4>
                    <p>Pups are learning to fly and will fly if approached.</p>
                </th>
                
            </tr>
        </thead>
          <tbody>
            
             <tr>
                <th scope="col" class="px-6 py-3">
                <h4> Oct-Nov</h4>
                <p>Pups should be on mum for the 1st 4 weeks of their life.</p>
                </th>
                <th scope="col" class="px-6 py-3">
                                     <h4> Nov-Dec</h4>
                    <p>Mums will leave their babies in the tree for a break</p>
                </th>
                <th scope="col" class="px-6 py-3">
                  <h4> Jan-Feb</h4>
                    <p>Pups are learning to fly and will fly if approached.</p>
                </th>
                
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400">
             
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400">
               <td>Urgent</td>
            </tr>


            
            <tr class="bg-blue-600 border-b border-blue-400">
                
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400">
               
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-blue-600 border-b border-blue-400">
                
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-blue-500 border-blue-40">
                
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


    </>
  )
}
