import AddProductCom from "@/components/addproduct";
import TitleHead from "@/components/titleHead";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function AddProductPage() {
  return (
    <>
      <TitleHead title="Add Product" icon={<MdOutlineAddShoppingCart />} />
      <AddProductCom />
    </>
  );
}
