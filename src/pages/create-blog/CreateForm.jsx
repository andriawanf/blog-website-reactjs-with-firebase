import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore"
import { auth, db, storage } from "../../config/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const tagsBlog = [
    'Education',
    'Otomotif',
    'Financial',
    'Marketing',
    'Sport',
]

const modules = {
    toolbar: [
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{font: []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            {list: "ordered"},
            {list: "bullet"},
            {list: "-1"},
            {list: "+1"}
        ],
        ["link", "image", "video"]
    ]
}

export default function CreateForm() {
    const [user] = useAuthState(auth);
    const descRef = useRef("");
    const [valueDesc, setValueDesc] = useState('');

    

    const schema = yup.object().shape({
        title: yup.string().required("please add the title first!"),
        // description: yup.string().required("You must add a description!"),
        tag_blog: yup.string().required("You must choose one of the tag!"),
        photo_cover: yup.string().required("You must choose a photo!"),
    });

    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const postRef = collection(db, "blogs-post");

    // Display image from input user
    const [image, setImage] = useState("");

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        // You can perform additional validation, e.g., checking file type or size

        if (file) {
            const storageRef = ref(storage, `blog_images/${file.name}`);

            try {
                // Upload the file to Firebase Storage
                await uploadBytes(storageRef, file);

                // Get the download URL of the uploaded file
                const downloadURL = await getDownloadURL(storageRef);

                // Update the state with the download URL
                setImage(downloadURL);
            } catch (error) {
                console.error("Error uploading image to Firebase Storage:", error);
            }
        }
    };

    const onCreatePost = async (data) => {
        // Upload the image first
        // const imageUrl = image ? await uploadImageToFirebase(image) : null;
        await addDoc(postRef, {
            ...data,
            username: user?.displayName,
            description: valueDesc,
            user_id: user?.uid,
            foto_user: user?.photoURL,
            created_at: new Date().toLocaleDateString(),
            photo_cover: image,
        });
        resetField("title");
        resetField("description");
        resetField("tag_blog");
        resetField("photo_cover");
    }

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <div>
            <form className="container font-comfortaa" onSubmit={handleSubmit(onCreatePost)}>
                <div className="relative px-6 space-y-12 pt-14 lg:px-40 lg:pt-44">
                    <div className="pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Create Blog</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This blog will be displayed publicly so make it something specials.
                        </p>

                        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Input Title */}
                            <div className="sm:col-span-4">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            {...register("title")}
                                            className="block flex-1 border-0 bg-transparent py-1.5 px-3.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="ex. Breaking News!"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-red-600">{errors.title?.message}</p>
                                </div>
                            </div>
                            {/* Input Description */}
                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    {/* <textarea
                                        id="description"
                                        name="description"
                                        rows={5}
                                        {...register("description")}
                                        className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    /> */}
                                    <ReactQuill 
                                    id="description"
                                    name="description"
                                    theme="snow" 
                                    value={descRef.current.value}
                                    ref={descRef}
                                    modules={modules}
                                    onChange={() => setValueDesc(descRef.current.value)}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-red-600">{errors.description?.message}</p>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                            </div>
                            {/* Input Tag */}
                            <div className="sm:col-span-full">
                                <label htmlFor="tag_blog" className="block text-sm font-medium leading-6 text-gray-900">
                                    Tag
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500 sm:max-w-md">
                                        <select className="block w-full text-gray-900 border-0 rounded-md shadow-sm ring-1 py-1.5 px-3.5 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" {...register('tag_blog')}>
                                            <option value="">Choose the tag blog</option>
                                            {tagsBlog.map((tag, index) => (
                                                <option key={index} value={tag}>{tag}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <p className="mt-2 text-sm text-red-600">{errors.tag_blog?.message}</p>
                                </div>
                            </div>
                            {/* Input Photo */}
                            <div className="col-span-full">
                                <label htmlFor="photo_cover" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                                    <div className="text-center">
                                        {image ? (
                                            <img src={image} alt="User's cover photo" className="object-cover w-full mx-auto rounded-lg h-96" />
                                        ) : (
                                            <>
                                                <PhotoIcon className="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
                                                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor="photo_cover"
                                                        className="relative font-semibold bg-white rounded-md cursor-pointer text-sky-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-800"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input
                                                            id="photo_cover"
                                                            name="photo_cover"
                                                            type="file"
                                                            {...register("photo_cover")}
                                                            className="sr-only"
                                                            onChange={handleFileChange}
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-red-600">{errors.file_upload?.message}</p>
                            </div>
                            <button className="inline-flex justify-center px-4 py-2.5 text-sm font-bold text-sky-100 bg-sky-500 border border-transparent rounded-md hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2" onClick={openModal}>Post blog</button>
                        </div>
                    </div>
                </div>
            </form>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/25 backdrop-blur-md" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto font-comfortaa">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-bold leading-6 text-sky-500"
                                    >
                                        Post blog successful
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your blog has been successfully Post. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
