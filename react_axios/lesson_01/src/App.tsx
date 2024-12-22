import React, { useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [id, setId] = useState<number>();

  // Get all the data
  const getAllData = () => {
    const url: string = "https://fakestoreapi.com/products/";
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error:", err));
  };

  // Add new Data
  const addNewData = () => {
    const url: string = "https://fakestoreapi.com/products/";
    axios
      .post(url, {
        title: "abc",
        price: 99,
        description: "lorem ipsum set",
        image: "abc",
        category: "abc",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error:", err));
  };

  // update data
  const updateData = () => {
    const url: string = `https://fakestoreapi.com/products/${id}`;
    axios
      .put(url, {
        title: "abc",
        price: 99,
        description: "lorem ipsum set",
        image: "abc",
        category: "abc",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error:", err));
  };

  // delete by id
  const deleteData = () => {
    const url: string = `https://fakestoreapi.com/products/${id}`;
    axios
      .delete(url)
      .then((res) => console.log(res))
      .then((err) => console.log("Error:", err));
  };

  return (
    <>
      <h1 className="text-center text-8xl text-red-600">App</h1>
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        {/* Get all data: get operation */}
        <button
          className="px-5 py-2 bg-cyan-500 rounded-lg"
          onClick={getAllData}
        >
          Get All Data
        </button>

        {/* Create new data: post operation */}
        <button
          className="px-5 py-2 bg-emerald-500 rounded-lg"
          onClick={addNewData}
        >
          Add New Data
        </button>

        {/* Update data: put operation */}
        <div className="flex gap-3">
          <input
            onChange={(e) => setId(Number(e.target.value))}
            type="number"
            className="px-5 py-2 rounded-lg outline-none"
            placeholder="Enter data id"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-yellow-500 rounded-lg"
            onClick={updateData}
          >
            Update Data
          </button>
        </div>

        {/* delete data: delete operation */}
        <div className="flex gap-3">
          <input
            onChange={(e) => setId(Number(e.target.value))}
            type="number"
            className="px-5 py-2 rounded-lg outline-none"
            placeholder="Enter data id"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-red-500 rounded-lg"
            onClick={deleteData}
          >
            Delete Data
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
