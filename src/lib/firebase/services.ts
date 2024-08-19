import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import app from "./init";

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
  return docRef.id;
}

export async function updateData(
  collectionName: string,
  id: string,
  data: any
) {
  const docRef = doc(firestore, collectionName, id);
  await updateDoc(docRef, data);
}

export async function deleteData(collectionName: string, id: string) {
  const docRef = doc(firestore, collectionName, id);
  await deleteDoc(docRef);
}
