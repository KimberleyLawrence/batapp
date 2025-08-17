// Accordion.js
import React, { useState, Children, cloneElement } from 'react';

export const Accordion = ({ children }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            {Children.map(children, (child, index) => {
                return cloneElement(child, {
                    isOpen: openIndex === index,
                    onClick: () => handleToggle(index),
                });
            })}
        </div>
    );
};

export const AccordionItem = ({ title, content, isOpen, onClick }) => (

    <>
        <h2 id="accordion-flush-heading-1" onClick={onClick}>
            <button type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                onClick={onClick}
            >
                <span>{title}</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        {isOpen && (
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
            </div>
        )}



    </>
);