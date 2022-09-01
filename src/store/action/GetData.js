import { doc, setDoc, onSnapshot, collection, query, where, updateDoc, getDoc, getDocs, deleteDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../util/firebase';


const GetServices = (SetServices, SetLoading) => {
    const q = collection(db, "Services");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const EssayList = [];
        querySnapshot.forEach((doc) => {
            EssayList.push({ ...doc.data(), docId: doc.id });
        });
        SetServices(EssayList)
        if (SetLoading) {
            SetLoading(false)
        }
    })
}

const GetJobs = (SetJobs, SetLoading) => {
    const q = collection(db, "Jobs");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const EssayList = [];
        querySnapshot.forEach((doc) => {
            EssayList.push({ ...doc.data(), docId: doc.id });
        });
        SetJobs(EssayList)
        if (SetLoading) {
            SetLoading(false)
        }
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