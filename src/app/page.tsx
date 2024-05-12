import Image from "next/image";
import infoLogo from '../../public/assets/icons/list/info.svg';
import iconClose from '../../public/assets/icons/list/close.svg';
import CoreLayout from "@/layout/core.layout";

export default function Home() {
    return (
        <CoreLayout>
            <div>
                <div>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                            <Image
                                priority
                                src={infoLogo}
                                width="0"
                                height="0"
                                sizes="100vw"
                                alt="Follow us on Twitter"
                            />
                            <span>Not confident</span>
                        </button>
                        <button type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                            <span>Human Help</span>
                            <Image
                                priority
                                src={infoLogo}
                                width="0"
                                height="0"
                                sizes="100vw"
                                alt="Follow us on Twitter"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border rounded-lg overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                    <tr>
                                        <th scope="col"
                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">John
                                            Brown
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">New York No. 1
                                            Lake
                                            Park
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button type="button"
                                                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Jim
                                            Green
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">27</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">London No. 1
                                            Lake
                                            Park
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button type="button"
                                                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Joe
                                            Black
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sidney No. 1
                                            Lake
                                            Park
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button type="button"
                                                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="flex flex-row justify-between w-full text-sm font-medium text-gray-800">
                                        <Image
                                            priority
                                            src={infoLogo}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            alt="Follow us on Twitter"
                                        />
                                        {'Only X rows are shown. View full list for more'}
                                        <Image
                                            priority
                                            src={iconClose}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            alt="Follow us on Twitter"
                                        />
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="flex flex-row w-full gap-2 p-2">
                                    <button type="button"
                                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                                        <Image
                                            priority
                                            src={infoLogo}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            alt="Follow us on Twitter"
                                        />
                                        <span>Not confident</span>
                                    </button>
                                    <button type="button"
                                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                                        <Image
                                            priority
                                            src={infoLogo}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            alt="Follow us on Twitter"
                                        />
                                        <span>Not confident</span>
                                    </button>
                                    <button type="button"
                                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                                        <Image
                                            priority
                                            src={infoLogo}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            alt="Follow us on Twitter"
                                        />
                                        <span>Not confident</span>
                                    </button>
                                    <button type="button"
                                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                                        <Image
                                            priority
                                            src={infoLogo}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            alt="Follow us on Twitter"
                                        />
                                        <span>Not confident</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CoreLayout>
    );
}
