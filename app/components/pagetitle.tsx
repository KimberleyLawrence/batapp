import { Link } from "react-router";

//insert code for app between return (         )}
export default function Pagetitle({ children }: any) {
    return (


        <>
            <span>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 m-3">
                    {children}
                </h2>
            </span>


        </>
    )
}
