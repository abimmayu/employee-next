"use client";

import { getData, updateData } from "@/services/employee";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type EditPageProps = { params: { id: string[] } };
export default function EditPage(props: EditPageProps) {
  const { params } = props;
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    const res = await updateData(
      "http://localhost:3000/api/employee?id=" + params.id[0],
      {
        name:
          event.target.name.value !== params.id[1]
            ? event.target.name.value
            : params.id[1],
        occupation:
          event.target.occupation.value !== params.id[2]
            ? event.target.occupation.value
            : params.id[2],
        email:
          event.target.email.value !== params.id[3]
            ? event.target.email.value
            : params.id[3],
        password: event.target.password.value,
      }
    );
    console.log("🚀 ~ handleSubmit ~ res:", res);
    if (res.statusCode === 200) {
      event.target.reset();
      push("/employee");
      setLoading(false);
      setError("");
    } else {
      setError("Email Already Exist");
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-100 flex justify-center items-center flex-col min-h-screen from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br"
      id="register"
    >
      {error !== "" && (
        <div className="text-red-600 font-bold mb-5">{error}</div>
      )}
      <div className="bg-white shadow-md border border-gray-200 rounded-lg w-96 p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Edit the data!
          </h3>
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder={decodeURIComponent(params.id[1])}
              required
            />
          </div>
          <div>
            <label
              htmlFor="fullname"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder={decodeURIComponent(params.id[2])}
              required
            />
          </div>
          <div>
            <label
              htmlFor="fullname"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder={decodeURIComponent(params.id[3])}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Loading..." : "Edit"}
          </button>
          {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            have registered?{" "}
            <Link
              href="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign In
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
}
