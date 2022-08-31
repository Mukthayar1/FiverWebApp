import { doc, setDoc, onSnapshot, collection, query, where, updateDoc, getDoc, getDocs, deleteDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../util/firebase';


const GetServices = (SetServices) => {
    const q = collection(db, "Services");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const EssayList = [];
        querySnapshot.forEach((doc) => {
            EssayList.push({ ...doc.data(), docId: doc.id });
        });
        SetServices(EssayList)
    })
}

const GetJobs = (SetJobs) => {
    const q = collection(db, "Jobs");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const EssayList = [];
        querySnapshot.forEach((doc) => {
            EssayList.push({ ...doc.data(), docId: doc.id });
        });
        SetJobs(EssayList)
    })
}

const GetDocDetails = (Setdata) => {
    const q = collection(db, "Jobs");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const EssayList = [];
        querySnapshot.forEach((doc) => {
            EssayList.push({ ...doc.data(), docId: doc.id });
        });
        Setdata(EssayList)
    })
}



export {
    GetServices,
    GetJobs,
    GetDocDetails
}