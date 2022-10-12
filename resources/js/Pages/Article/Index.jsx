import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Index(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Article
                </h2>
            }
        >
            <Head title="Article" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div class="px-6 py-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="font-bold text-xl mb-2">
                                    Berita Terbaru
                                </div>
                                <button
                                    class="col-end-7 bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
                                    type="button"
                                    data-modal-toggle="defaultModal"
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Launch demo modal
                                </button>

                                {/* <!-- Modal --> */}
                                <div
                                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                                    id="exampleModal"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div class="modal-dialog relative w-auto pointer-events-none">
                                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                <h5
                                                    class="text-xl font-medium leading-normal text-gray-800"
                                                    id="exampleModalLabel"
                                                >
                                                    Modal title
                                                </h5>
                                                <button
                                                    type="button"
                                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div class="modal-body relative p-4">
                                                Modal body text goes here.
                                            </div>
                                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                <button
                                                    type="button"
                                                    class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    type="button"
                                                    class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
                                                >
                                                    Save changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <hr />
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
                                        <td class="border px-4 py-2">Cell</td>
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
