"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter();
  const [nama_toko, setNamaToko] = useState("");
  const [daftar_belanja, setDaftarBelanja] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/JQuHmHVSWkKr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ nama_toko, daftar_belanja }]),
    });
    router.refresh();
    setNamaToko("");
    setDaftarBelanja("");
  }

  return (
    <div className="flex flex-col mb-4">
      <input
        className="mb-2"
        value={nama_toko}
        placeholder="Masukan nama toko disini"
        onChange={(event) => setNamaToko(event.target.value)}
      />
      <textarea
        className="mb-2"
        value={daftar_belanja}
        placeholder="Masukan daftar belanjaan"
        onChange={(event) => setDaftarBelanja(event.target.value)}
      ></textarea>
      <button onClick={handleCreateData}>Submit</button>
    </div>
  );
};
