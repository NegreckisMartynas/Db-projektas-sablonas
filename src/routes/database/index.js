import { database } from '../../services/database';
import { collection, getDocs } from "firebase/firestore"

export async function get(){
    const snapshot = await getDocs(collection(database ,'products'))
    const data = [];
    snapshot.forEach(doc => data.push(doc.data()));
    return {
        body: {
            data: data
        }
    };
}