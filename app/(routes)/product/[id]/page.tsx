import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

// Temporary data
const products = [
  {
    id: "1",
    title: "Sicilian Pizza",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, and crushed red pepper.",
    img: "/temporary/p1.png",
    price: 24.9,
  },
  {
    id: "2",
    title: "Bacon Deluxe",
    desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon and cheese.",
    img: "/temporary/p2.png",
    price: 29.9,
  },
  {
    id: "3",
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, and fresh mozzarella.",
    img: "/temporary/p3.png",
    price: 24.9,
  },
];

// 1. Change the props type to use Promise
type Props = {
  params: Promise<{ id: string }>;
};

// 2. Make the component 'async'
export default async function SingleProductPage({ params }: Props) {
  // 3. Await the params to get the ID
  const { id } = await params;

  // Find the product that matches the URL id
  const singleProduct = products.find((item) => item.id === id) || products[0];

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row gap-8 items-center relative text-red-500">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-1/2 md:h-[70%]">
        <Image
          src={singleProduct.img}
          alt={singleProduct.title}
          fill
          className="object-contain"
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <div className="text-3xl font-bold">${singleProduct.price}</div>
        
        <AddToCartButton product={singleProduct} />
      </div>
    </div>
  );
}