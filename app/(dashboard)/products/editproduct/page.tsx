"use client";
import EditProductCom from "@/components/editproduct";
import TitleHead from "@/components/titleHead";
import { Suspense } from "react";
import { CiEdit } from "react-icons/ci";

export default function EditProductPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TitleHead title="Edit Product" icon={<CiEdit />} />
        <EditProductCom />
      </Suspense>
    </>
  );
}
