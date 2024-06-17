"use client";

import { useRouter } from "next/navigation";
import { Pen2, TrashBin2 } from "solar-icon-set";

export const Card = ({ item }) => {
  const router = useRouter();
  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/JQuHmHVSWkKr", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  return (
    <div className="flex bg-ireng-300 p-2 mb-2 rounded-lg justify-between">
      <div>
        <h3> {item.nama_toko}</h3>
        <p>{item.daftar_belanja}</p>
      </div>
      {/* <button onClick={handleDeleteData}>Delete</button> */}
      <div className="flex justify-center items-center gap-4">
        <div className="p-1 cursor-pointer">
          <Pen2 iconStyle="Bold" color="#FFFFFF" />
        </div>
        <div onClick={handleDeleteData} className="p-1 cursor-pointer">
          <TrashBin2 iconStyle="Bold" color="#FFFFFF" />
        </div>
      </div>
    </div>
  );
};
