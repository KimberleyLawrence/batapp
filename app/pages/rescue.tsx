import Batnoise from "~/components/batnoise";
import type { Route } from "./+types/home";
import Pagetitle from "~/components/pagetitle";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Rescue() {
  return (
    <>
     <span><h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">Rescue and Wrap</h2></span>
      
      

    </>
  )
}
