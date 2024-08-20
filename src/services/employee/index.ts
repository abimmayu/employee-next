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

export const deleteData = async (url: string) => {
  const res = await fetch(url, {
    method: "DELETE",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to delete data");
  }
  return res.json();
};

export const insertData = async (url: string, data: any) => {
  const res = await fetch(url, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to insert data");
  }
  return res.json();
};

export const updateData = async (url: string, data: any) => {
  const res = await fetch(url, {
    method: "PUT",
    cache: "no-store",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to update data");
  }
  return res.json();
};
