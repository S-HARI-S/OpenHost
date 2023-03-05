import React, { useState } from "react";

export default function Text() {
  return (
    <>
    <div className="flex items-center justify-center flex-col">
    <div>
        <label
          htmlFor="small-input"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
        >
          <b>UserId</b>
        </label>
        <input
          id="author"
          placeholder="Enter userId"
          type="text"
          className="block w-96 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="small-input"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
        >
          <b>ClientId</b>
        </label>
        <input
          id="author"
          placeholder="Enter clientId"
          type="text"
          className="block w-96 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="button"
        class="mt-8 w-20 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        call
      </button>
    </div>
 
    </>
  );
}
