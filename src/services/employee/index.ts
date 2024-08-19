export const getData = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
