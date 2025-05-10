
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/add"); // Navigate to the "/add" page after the component mounts
  }, [router]);

  return <></>;
}
