"use client";
import EditCategoryCom from "@/components/editcategory";
import TitleHead from "@/components/titleHead";
import { Suspense } from "react";
import { CiEdit } from "react-icons/ci";

export default function EditCategoryPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TitleHead title="Edit Category" icon={<CiEdit />} />
        <EditCategoryCom />
      </Suspense>
    </>
  );
}
