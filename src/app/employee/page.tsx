import { getData } from "@/services/employee";

type DetailProductPageProps = { params: { slug: string[] } };

export async function DetailPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log("🚀 ~ DetailPage ~ params:", params);
  const employee = await getData("http://localhost:3000/api/employee");
  return (
    <div>
      <h1 className="text-2xl">
        {params.slug ? "Detail Employee Page" : "Employee Page"}
      </h1>
      {params.slug && (
        <>
          <p className="text-lg">Type: {params.slug[0]}</p>
          <p className="text-lg">Gender: {params.slug[1]}</p>
          <p className="text-lg">Id: {params.slug[2]}</p>3
        </>
      )}
    </div>
  );
}
