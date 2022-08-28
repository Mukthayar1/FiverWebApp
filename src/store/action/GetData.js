import { doc, setDoc, onSnapshot, collection, query, where, updateDoc, getDoc, getDocs, deleteDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../util/firebase';


const GetServices = (SetServices) => {
    const q = collection(db, "Services");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const EssayList = [];
        querySnapshot.forEach((doc) => {
            EssayList.push(doc.data());
        });
        SetServices(EssayList)
    })
}

const GetJobs = (SetJobs) => {
    const q = collection(db, "Jobs");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const EssayList = [];
        querySnapshot.forEach((doc) => {
            EssayList.push(doc.data());
        });
        SetJobs(EssayList)
    })
}



export {
    GetServices,
    GetJobs
}