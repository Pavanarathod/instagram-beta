import { useEffect } from "react";
import { useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { database } from "../database/firebase";

const useFirebaseCollection = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        setLoading(true);
        await onSnapshot(
          query(collection(database, "posts"), orderBy("timestamp", "desc")),
          (snapshot) => {
            setUserPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          }
        );

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserPosts();
  }, []);

  return [userPosts, loading, error];
};

export default useFirebaseCollection;
