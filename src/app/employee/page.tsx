// "use client";

import { getData } from "@/services/employee";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type DetailProductPageProps = { params: { slug: string[] } };

export default async function DetailPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log("🚀 ~ DetailPage ~ params:", params);
  const employee = await getData("http://localhost:3000/api/employee");

  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated" && session?.user.role !== "admin") {
  //     router.push("/login");
  //   }
  // }, [status, router, session?.user.role]);
  return (
    <div className="flex w-10/12 place-items-center justify-center m-4">
      <div className="overflow-x-auto m-4">
        <table className="min-w-full shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Occupation</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {employee.data.length > 0 &&
              employee.data.map((employee: any) => (
                <tr className="border-b border-blue-gray-200" key={employee.id}>
                  <td className="py-3 px-4">{employee.name}</td>
                  <td className="py-3 px-4">{employee.occupation}</td>
                  <td className="py-3 px-4">{employee.email}</td>
                  <td className="py-3 px-4">
                    <Link
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
