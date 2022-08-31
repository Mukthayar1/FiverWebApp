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

const GetDocDetails = (Setdata, Setloading, Docid) => {
    console.log('Docid?.Type===>', Docid?.Type)
    const unsub = onSnapshot(doc(db, Docid?.Type, Docid?.DocId), (doc) => {
        Setdata(doc.data());
        Setloading(false)
    });
}



export {
    GetServices,
    GetJobs,
    GetDocDetails
}