import React, { useState } from 'react';




export const Modal = ({ title, children }: any) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleItem = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            {isOpen && (

                <div id="popup-modal" tabindex={-1} className="  backdrop-blur-2xl  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
                    <div className="relative p-5 pt-10 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                            <div className="p-4 md:p-5 text-center">
                                <svg className="mx-auto mb-4 text-red-600 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you vaccinated and trained for bat rescues?</h3>
                                <button onClick={toggleItem} data-modal-hide="popup-modal" type="button" className="text-white bg-green-600 text-lg font-medium rounded-lg text-md inline-flex items-center px-5 py-2.5 text-center">
                                    Yes, I am.
                                </button>
                                <a href="/batapp/" data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-lg font-medium text-gray-900 bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">
                                    No, I'm Not</a>
                                 <p className=" mt-8 text-lg font-normal text-gray-500 dark:text-gray-400">Vaccinated Rescuers:</p>
                                <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Being vaxxed doesn't always mean you should rescue. Min 24hr monitoring should occur before intervention for Non-Urgent cases</p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )

};