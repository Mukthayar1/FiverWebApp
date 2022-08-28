import { doc, setDoc, onSnapshot, collection, query, where, updateDoc, getDoc, getDocs, deleteDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../util/firebase';
import Swal from 'sweetalert2'
import moment from 'moment';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();


const AddService = async (values, RestForm, onCloseModal, file_Url, auth) => {

    function broofa() {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    let uid = broofa();

    const docData = {
        title: values?.title,
        charges: values?.charges,
        description: values?.description,
        id: values?.type?.id,
        service_name: values?.type?.name,
        create_date_time: new Date(),
        file_Url: file_Url,
        Created_User_Email: auth?.email

    };

    await setDoc(doc(db, "Services", uid), docData).then(() => {
        Swal.fire({
            title: "Success fully added",
            icon: "success",
            // button: "Ok",
        })
        RestForm();
        onCloseModal();

    }).catch(() => {
        Swal.fire({
            title: "Failed To Add",
            icon: "error",
            // button: "Try Again",
        })
    })
}

const AddServices = (values, RestForm, onCloseModal, imageurl, auth) => {

    if (values?.title?.length > 0 && values?.charges?.length > 0 && values.description?.length > 0) {

        const metadata = { contentType: imageurl?.type };
        const storageRef = ref(storage, 'images/' + imageurl.name);
        const uploadTask = uploadBytesResumable(storageRef, imageurl, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    AddService(values, RestForm, onCloseModal, downloadURL, auth)
                });
            }
        );

    }

    else {
        Swal.fire({
            title: "Failed To Add 2",
            icon: "error",
            // button: "Try Again",
        })
    }

}

const AddJob = async (values, RestForm, downloadURL, auth, jobtype) => {

    function broofa() {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    let uid = broofa();

    const docData = {
        title: values?.JobTittle,
        charges: values?.JobBudget,
        description: values?.JobDescribe,
        jobtype: jobtype,
        create_date_time: new Date(),
        file_Url: downloadURL,
        Created_User_Email: auth?.email

    };

    await setDoc(doc(db, "Jobs", uid), docData).then(() => {
        Swal.fire({
            title: "Success fully added",
            icon: "success",
            // button: "Ok",
        })
        RestForm();

    }).catch(() => {
        Swal.fire({
            title: "Failed To Add",
            icon: "error",
            // button: "Try Again",
        })
    })
}

const AddJobImage = (values, RestForm, imageurl, auth, jobtype) => {

    if (values?.JobTittle?.length > 0 && values?.JobBudget?.length > 0 && values.JobDescribe?.length > 0) {

        const metadata = { contentType: imageurl?.type };
        const storageRef = ref(storage, 'images/' + imageurl.name);
        const uploadTask = uploadBytesResumable(storageRef, imageurl, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    AddJob(values, RestForm, downloadURL, auth, jobtype)
                });
            }
        );

    }

    else {
        Swal.fire({
            title: "Failed To Add 2",
            icon: "error",
            // button: "Try Again",
        })
    }

}








export {
    AddServices,
    AddJobImage
}