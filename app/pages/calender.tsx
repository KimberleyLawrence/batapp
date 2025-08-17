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
      
 

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <tbody className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                <tr>

                
                          
                <th scope="col" className="px-6 py-3">
                <h4> Oct-Nov</h4>
                <p>Pups should be on mum for the 1st 4 weeks of their life.</p>
                </th>
                <th scope="col" className="px-6 py-3">
                                     <h4> Nov-Dec</h4>
                    <p>Mums will leave their babies in the tree for a break</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4> Jan-Feb</h4>
                    <p>Pups are learning to fly and will fly if approached.</p>
                </th>
                
            </tr>
        
            <tr className="bg-red-600 border-b ">
               <td colspan="3">Critical</td>
            </tr>
           
            <tr className="bg-blue-500 border-b border-blue-400">
             
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                
            </tr>
            


    
            <tr className="bg-blue-600 border-b border-blue-400">
                
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
               
            </tr>
            
        </tbody>
    </table>
</div>


    </>
  )
}
