"use client";

import ModalDelete from "@/components/modal/modal_delete";
import { deleteData } from "@/services/employee";
import { useRouter } from "next/navigation";

export default function DeletePage(props: any) {
  const { params } = props;

  const router = useRouter();
  const handleDelete = async () => {
    const res = await deleteData(
      "http://localhost:3000/api/employee?id=" + params.id
    );
    console.log("🚀 ~ handleDelete ~ res:", res);
    if (res.statusCode === 200) {
      router.back();
    }
    router.refresh();
  };

  const handleCancel = async () => {
    router.back();
  };

  return (
    <ModalDelete>
      <div id="modal-id">
        <div className="absolute inset-0 z-0"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 flex items-center text-red-500 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
              <p className="text-sm text-gray-500 px-8">
                Do you really want to delete this account? This process cannot
                be undone
              </p>
            </div>

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <button
                onClick={() => handleCancel()}
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete()}
                className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalDelete>
  );
}
