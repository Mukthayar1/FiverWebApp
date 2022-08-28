import { actionType } from "./type";
import { createAction } from "./index";
import { TOKEN } from "../../util/config";
import { authSerivce } from "../../services/AuthService";
//
import { doc, setDoc, onSnapshot, collection, query, where, updateDoc, getDoc, getDocs } from "firebase/firestore";
import { db, authweb } from "../../util/firebase"
import Swal from 'sweetalert2'
import {
  getAuth, signInWithEmailAndPassword, sendPasswordResetEmail,
  createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
export const SignIn = (data, setAuth) => {
  return async (dispatch) => {
    try {
      console.log('data', data)
      const auth = getAuth();
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {

          let AccessToken = userCredential?.user?.accessToken
          let Uid = userCredential.user.uid

          const unsub = onSnapshot(doc(db, "Users", Uid), (doc) => {
            dispatch(createAction(actionType.SET_SIGN_IN, true));
            dispatch(createAction(actionType.SET_ME, doc.data()));
            localStorage.setItem('isLogged', doc.data()?.userType);
            localStorage.setItem('Uid', Uid)
            setAuth(doc.data())

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Sign in success",
              showConfirmButton: false,
            })
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode) {
            Swal.fire({
              text: "Invalid email or password",
              icon: "error",
              button: "Try Again",
            })
          }
        });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or password is not correct"
      });
    }
  };
};

export const signOut = (callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.SET_ME, null));
    localStorage.removeItem(TOKEN);

    if (callback) {
      callback();
    }
  };
};

export const signUp = (data, navigation, checked) => {
  return async (dispatch) => {

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const docData = {
          ...data,
          IsVerify: false,
          CreateDateTime: (new Date).toLocaleDateString(),
          userType: checked == true ? 1 : 0

        };
        setDoc(doc(db, "Users", user.uid), docData).then(() => {
          Swal.fire({
            title: "Please login to continue",
            icon: "success",
            button: "Ok",
          })
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          if (error.code === 'auth/email-already-in-use') {

            Swal.fire({
              title: "This email address is already in use!",
              icon: "error",
              button: "Try Again",
            })
          }

          if (error.code === 'auth/invalid-email') {

            Swal.fire({
              title: "This email address is invalid!",
              icon: "error",
              button: "Try Again",
            })
          }
        }
        if (errorMessage) {
          Swal.fire({
            title: "This email address is already in use!",
            icon: "error",
            button: "Try Again",
          })
        }
      });



    // createUserWithEmailAndPassword(auth, data.email, data.pass)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     const docData = {
    //       ...data,
    //       IsVerify: false,
    //       CreateDateTime: (new Date).toLocaleDateString()

    //     };
    //     setDoc(doc(db, "Users", user.uid), docData).then(() => {


    //     }).catch((e) => {
    //       alert(e)
    //     })

    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     if (errorCode) {

    //       console.log('Error_Code', errorCode)

    //       // if (error.code === 'auth/email-already-in-use') {

    //       //   Swal.fire({
    //       //     title: "This email address is already in use!",
    //       //     icon: "error",
    //       //     button: "Try Again",
    //       //   })
    //       // }

    //       // if (error.code === 'auth/invalid-email') {

    //       //   Swal.fire({
    //       //     title: "This email address is invalid!",
    //       //     icon: "error",
    //       //     button: "Try Again",
    //       //   })
    //       // }

    //     }


    //     if (errorMessage) {
    //       Swal.fire({
    //         title: "This email address is already in use!",
    //         icon: "error",
    //         button: "Try Again",
    //       })
    //     }
    //   });

  };
};
