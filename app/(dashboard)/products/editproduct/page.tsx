import EditProductCom from "@/components/editproduct";
import TitleHead from "@/components/titleHead";
import { CiEdit } from "react-icons/ci";

export default function EditProductPage() {
  return (
    <>
      <TitleHead title="Edit Product" icon={<CiEdit />} />
      <EditProductCom />
    </>
  );
}
