import firebase from "../helpers/firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  // child,
  // get,
  set,
  update,
} from "firebase/database";
import { useState, useEffect } from "react";
import { getAuth, deleteUser, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  // toastWarnNotify,
} from "./toastNotify";


// Bilgi Ekleme
export const AddBlog = (info, navigate) => {
  try {
    const db = getDatabase(firebase);
    const blogsRef = ref(db, "blogs/");
    const newBlogRef = push(blogsRef);
    set(newBlogRef, {
      title: info.title,
      imageURL: info.imageURL,
      context: info.context,
      email: info.email,
      userId: info.userId,
      displayName: info.displayName,
      createdTime: info.createdTime,
      // photoURL: photoURL,
    });
    toastSuccessNotify("Your blog is succesfully created");
    navigate("/");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

// Bilgi Çağırma

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogList, setBlogList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const blogsRef = ref(db, "blogs/");
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];

      for (let id in data) {
        blogArray.push({ id, ...data[id] });
      }
      setBlogList(blogArray);
      // console.log(data);
      // console.log(blogArray);
      setIsLoading(false);
    });
  }, []);
  // console.log(blogList);
  return { isLoading, blogList };
};

export const userDelete = async (navigate) => {

  const auth = getAuth();
  const user = auth.currentUser;

  deleteUser(user)
    .then(() => {
      toastSuccessNotify("Your profile is succesfully deleted");
      navigate("/");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
}


export const resetPassword = () => {
  const auth = getAuth();
  const userEmail = auth.currentUser.email
  sendPasswordResetEmail(auth, userEmail)
    .then(() => {
      toastSuccessNotify("Succesfully Password reset email sent!");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
}

export const verifyEmail = () => {
  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
    .then(() => {
      toastSuccessNotify("Succesfully Email verification sent!");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
}

export const DeleteBlog = (id, navigate) => {
  const db = getDatabase(firebase);
  remove(ref(db, "blogs/" + id))
  navigate("/")
};

export const UpdateBlog = (info) => {
  const db = getDatabase(firebase);
  const updates = {};
  updates["blogs/" + info.id] = info;

  return update(ref(db), updates);
};


// export const DeleteUser = (id) => {
//   const db = getDatabase(firebase);
//   remove(ref(db, "users/" + id));
// };

// export const UpdateUser = (info) => {
//   const db = getDatabase(firebase);
//   const updates = {};
//   updates["users/" + info.id] = info;

//   return update(ref(db), updates);
// };
