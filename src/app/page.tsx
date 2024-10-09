"use client";
import Image from "next/image";
import { supabase } from "@/utils/supabase/supabase";
// import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

export default function Home() {
  // const { data: notes, error, status } = await supabase.from("links").select();
  // const router = useRouter();

  // console.log(notes);

  async function signOut() {
    let { error } = await supabase.auth.signOut();

    // redirect("/login");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Home page</h1>
      <form action={signOut}>
        <button>Sing out</button>
      </form>

      <button onClick={signOut}>sign out 2</button>
    </div>
  );
}
