import React from 'react';

const Help = () => {
    return (
        <div className="help animate__animated animate__fadeInUp">
            <div className="grid grid-rows-[10vh_1fr]">
                <h1 className="text-rose-500">Emergency</h1>
                <div className="flex justify-around">
                    <div className="overflow-hidden">
                        <div className="py-2 inline-block ">
                            <div className="overflow-hidden">
                                <h3>General</h3>
                                <table className=" text-center border-1 border-slate-800">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-lg font-medium text-gray-900 px-6 py-3"
                                            >
                                                Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="text-lg font-medium text-gray-900 px-6 py-3"
                                            >
                                                Contact No.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-1 border-slate-500 ">
                                        <tr className="border-b bg-blue-100 border-blue-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                MAHARASHTRA COVID HELPLINE
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-22027990, 020-26127394
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-purple-100 border-purple-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                CORONA (COVID 19) HELPLINE
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1075 OR 011-23978046
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-green-100 border-green-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                COVID ENQUIRY - THANE
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-25301740
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-red-100 border-red-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                AMBULANCE
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                102 , 1298 , 022-24308888
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-yellow-100 border-yellow-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                BLOOD BANK
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                104 , 1910
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-blue-100 border-blue-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Thane Civil Hospital
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-25472582
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="py-2 inline-block ">
                            <div className="overflow-hidden">
                                <h3>Hospitals</h3>
                                <table className=" text-center border-1 border-slate-800">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-lg font-medium text-gray-900 px-6 py-3"
                                            >
                                                Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="text-lg font-medium text-gray-900 px-6 py-3"
                                            >
                                                Contact No.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-1 border-slate-500 ">
                                        <tr className="border-b bg-blue-100 border-blue-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Bombay Hospital
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-22067676, 40511111
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-purple-100 border-purple-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Bhagvati Hospital
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-28932461, 28932462, 28932463
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-green-100 border-green-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Cooper Hospital
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-26207254
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-red-100 border-red-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Lokmanya Tilak Hospital (Sion)
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-24063000, 24076381 ,
                                                24092020 , 24082504
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-yellow-100 border-yellow-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                KEM Hospital Parel
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-24107000 ,24137517, 24131763
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-blue-100 border-blue-200">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Poddar Hospital ( Worli )
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                022-24933533, 24931846
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
