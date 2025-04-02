import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// code to display all items
export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const itemsSnap = await getDocs(q);

    const mappedItems = itemsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return mappedItems;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = await addDoc(
      collection(db, "users", userId, "items"),
      item
    );
    return itemsRef.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//if I wish to add the delete function, do it here 54:09min.
