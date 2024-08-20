// "use client";

import { getData } from "@/services/employee";
import Link from "next/link";

type DetailProductPageProps = { params: { slug: string[] } };

export default async function DetailPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log("🚀 ~ DetailPage ~ params:", params);
  const employee = await getData("http://localhost:3000/api/employee");
  console.log("🚀 ~ DetailPage ~ employee:", employee);
  return (
    <div className="flex min-h-screen items-center justify-center min-h-screen from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br flex-col">
      <div className="text-3xl font-bold">Employee Data</div>
      <div className="p-1 mt-10 mb-5">
        <Link
          href="/register"
          className="font-medium text-green-600 hover:text-green-800 bg-green-200 rounded p-2 flex-end m-5"
        >
          Register an Employee
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Occupation
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {employee.data.length > 0 &&
                  employee.data.map((employee: any) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={employee.id}
                    >
                      <td className="py-4 px-6">{employee.name}</td>
                      <td className="py-4 px-6">{employee.occupation}</td>
                      <td className="py-4 px-6">{employee.email}</td>
                      <td className="py-4 px-6">
                        <Link
                          href={`/employee/edit/${employee.id}/${employee.name}/${employee.occupation}/${employee.email}/${employee.password}`}
                          className="font-medium text-blue-600 hover:text-blue-800 bg-blue-200 rounded mr-2 p-2"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/employee/delete/${employee.id}`}
                          className="font-medium text-red-600 hover:text-red-800 bg-red-200 rounded p-2"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
