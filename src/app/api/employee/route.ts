import { retrieveData, retrieveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const employee = await retrieveDataById("employee", id);
    if (employee) {
      return NextResponse.json({
        status: 200,
        message: "SUCCESS",
        data: employee,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Employee Not Found!",
      data: null,
    });
  }

  const employees = await retrieveData("employee");
  return NextResponse.json({
    status: 200,
    message: "SUCCESS",
    data: employees,
  });
}
