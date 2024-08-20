import {
  deleteData,
  insertData,
  retrieveData,
  retrieveDataById,
  updateData,
} from "@/lib/firebase/services";
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

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await insertData("employee", req);
  return NextResponse.json({
    status: res.status,
    message: res.message,
  });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log("🚀 ~ DELETE ~ id:", id);
  if (id) {
    const res = await deleteData("employee", id);
    return NextResponse.json({
      statusCode: res.statusCode,
      status: res.status,
      message: res.message,
    });
  }
}

export async function PUT(request: NextRequest) {
  const req = await request.json();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const res = await updateData("employee", id, req);
    return NextResponse.json({
      statusCode: res.statusCode,
      status: res.status,
      message: res.message,
    });
  }
}
