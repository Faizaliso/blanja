import { Form } from "@/components/form";
import { Card } from "@/components/card";
import { Logo } from "@/components/logo";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/JQuHmHVSWkKr", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-ireng-700">
      <section className="bg-ireng-500 w-[600px] p-4 rounded-lg">
        <Logo />
        <h1 className="text-white font-bold text-lg">
          Hallo <span>Faizal</span>
        </h1>
        <p className="mb-3">
          Tulis daftar belanjaan kamu disini supaya tidak lupa 😭😪
        </p>
        <Form />
        <div>
          {data.map((item) => {
            return <Card key={item._id} item={item} />;
          })}
        </div>
      </section>
    </main>
  );
}
