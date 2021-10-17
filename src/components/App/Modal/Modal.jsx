import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { modalActions } from "../../../redux/reducers/modalSlice";
import { CameraIcon, TrashIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { database, storage } from "../../../database/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import Spinner from "../Spinner/Spinner";

const Modal = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { modalState } = useSelector((state) => state.modal);
  const filePickkerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const captionRef = useRef();
  const [loading, setLoading] = useState(false);

  const uploadPost = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const docRef = await addDoc(collection(database, "posts"), {
        username: session?.user?.name,
        caption: captionRef.current.value,
        profileImage: session?.user?.image,
        timestamp: serverTimestamp(),
        userId: session?.user?.email,
      });
      const imageRef = ref(storage, `posts/${docRef.id}/image`);
      await uploadString(imageRef, selectedFile, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(database, "posts", docRef.id), {
            postImage: downloadURL,
          });
        }
      );

      setLoading(false);
      setSelectedFile(null);
      closeModal();
    } catch (error) {
      alert(error.message);
    }
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const closeModal = () => {
    dispatch(modalActions.disableModal());
  };

  return (
    <Transition.Root show={modalState} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {selectedFile ? (
                <div className="px-5">
                  <img src={selectedFile} alt="img" />
                  <div className="w-full mt-3 flex justify-center">
                    <TrashIcon
                      onClick={() => setSelectedFile(null)}
                      className="h-12 w-12 bg-red-500 text-white px-3 py-2 rounded-full hover:bg-red-400 cursor-pointer"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <CameraIcon
                    onClick={() => filePickkerRef.current.click()}
                    className="h-9 cursor-pointer px-3 py-2 rounded-full text-white bg-red-500 hover:bg-red-400"
                  />
                </div>
              )}

              <div className="mt-3 text-center">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-5 font-medium text-gray-800"
                >
                  Upload Photo
                </Dialog.Title>

                <div>
                  <input
                    ref={filePickkerRef}
                    type="file"
                    hidden
                    onChange={addImageToPost}
                  />
                </div>

                <div className="mt-3">
                  <input
                    className="border-none focus:outline-none w-full text-center"
                    type="text"
                    ref={captionRef}
                    placeholder="Please Enter a caption..."
                  />
                </div>
              </div>
              <div className="mt-4 w-full">
                <button
                  // disabled={!selectedFile}
                  onClick={uploadPost}
                  type="button"
                  className="bg-red-600 w-full py-2 text-white rounded-lg disabled:cursor-not-allowed disabled:bg-red-400"
                >
                  {loading ? <Spinner status={loading} /> : "Upload Post"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
