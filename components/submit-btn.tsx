import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
       bg-gray-900 text-white rounded-full outline-none transition-all 
       focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
       disabled:scale-100 disabled:bg-opacity-65 dark:bg-black/80 dark:hover:bg-black/90 dark:text-white/80 dark:hover:text-white"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:text-white/80 "></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-2 transition-all " />
        </>
      )}
    </button>
  );
}
