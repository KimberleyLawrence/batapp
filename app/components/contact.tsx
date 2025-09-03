export default function ContactItem({ name, url, icon, children }: any) {
    return (
        <>
            <li>
                <a href={url} className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    {icon ?
                        <img src={icon} className="w-20 md:w-15 max-w-full max-h-full" alt="Apple Watch" />
                        :
                        <>
                            <span className="w-20 md:w-15 max-w-full max-h-full"></span>
                        </>
                    }
                    <span className="flex-1 ms-3 whitespace-nowrap ">
                        <h2 className="font-bold text-gray-900 text-xl" >{name}</h2>
                        <p className="italic">{children}</p>
                    </span>
                </a>
            </li>

        </>
    )
};