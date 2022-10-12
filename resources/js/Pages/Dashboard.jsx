import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    Berita Terbaru
                                </div>
                                {/* <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p> */}
                                <table class="table-auto">
                                    <thead>
                                        <tr>
                                            <th class="border px-4 py-2">No</th>
                                            <th class="border px-4 py-2">
                                                Judul Berita
                                            </th>
                                            <th class="border px-4 py-2">
                                                Penulis
                                            </th>
                                            <th class="border px-4 py-2">
                                                Kunjungan
                                            </th>
                                            <th class="border px-4 py-2">
                                                Tgl. Rilis
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border px-4 py-2">1</td>
                                            <td class="border px-4 py-2">
                                                Web Berita dibuat
                                            </td>
                                            <td class="border px-4 py-2">
                                                Cell
                                            </td>
                                            <td class="border px-4 py-2">
                                                unlimited
                                            </td>
                                            <td class="border px-4 py-2">
                                                2 Jam yang lalu
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #photography
                                </span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #travel
                                </span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #winter
                                </span>
                            </div> */}
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    Berita Populer
                                </div>
                                <table class="table-auto">
                                    <thead>
                                        <tr>
                                            <th class="border px-4 py-2">No</th>
                                            <th class="border px-4 py-2">
                                                Judul Berita
                                            </th>
                                            <th class="border px-4 py-2">
                                                Penulis
                                            </th>
                                            <th class="border px-4 py-2">
                                                Kunjungan
                                            </th>
                                            <th class="border px-4 py-2">
                                                Tgl. Rilis
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border px-4 py-2">1</td>
                                            <td class="border px-4 py-2">
                                                Web Berita dibuat
                                            </td>
                                            <td class="border px-4 py-2">
                                                Cell
                                            </td>
                                            <td class="border px-4 py-2">
                                                unlimited
                                            </td>
                                            <td class="border px-4 py-2">
                                                2 Jam yang lalu
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
