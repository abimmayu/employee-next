import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const docRef = doc(firestore, collectionName, id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
}

export async function insertData(collectionName: string, data: any) {
  const docRef = await addDoc(collection(firestore, collectionName), data);

  return {
    statusCode: 200,
    status: true,
    message: "Insert success",
    data: docRef.id,
  };
}

export async function updateData(
  collectionName: string,
  id: string,
  data: any
) {
  const docRef = doc(firestore, collectionName, id);
  await updateDoc(docRef, data);

  return {
    statusCode: 200,
    status: true,
    message: "Update success",
  };
}

export async function deleteData(collectionName: string, id: string) {
  console.log(
    `Deleting document with id ${id} form collection ${collectionName}`
  );
  const docRef = doc(firestore, collectionName, id);
  await deleteDoc(docRef);
  console.log(`Document with id ${id} deleted successfully`);
  return { statusCode: 200, status: true, message: "Delete success" };
}

export async function register(data: {
  name: string;
  occupation: string;
  email: string;
  password: string;
}) {
  const q = query(
    collection(firestore, "employee"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const employees = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (employees.length > 0) {
    return { statusCode: 400, status: false, message: "Email already exist!" };
  } else {
    data.password = await bcrypt.hash(data.password, 10);

    try {
      await addDoc(collection(firestore, "employee"), data);
      console.log("🚀 ~ data:", data);
      return { statusCode: 200, status: true, message: "Register success" };
    } catch (error) {
      return { statusCode: 400, status: false, message: "Register failed" };
    }
  }
}

export async function login(data: { email: string }) {
  const q = query(
    collection(firestore, "employee"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const employees = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (employees) {
    return employees[0];
  } else {
    return null;
  }
}
