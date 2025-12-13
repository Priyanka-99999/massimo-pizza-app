import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    title: "Sicilian Pizza",
    desc: "Spicy pepperoni, jalapeños, crushed red pepper flakes.",
    img: "/temporary/p1.png",
    price: 24.9,
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Flame-grilled beef patty, crispy bacon, melted cheddar.",
    img: "/temporary/p2.png",
    price: 29.9,
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Classic Italian delight with thin crust and fresh mozzarella.",
    img: "/temporary/p3.png",
    price: 24.9,
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Pasta with spicy tomato sauce and fresh basil.",
    img: "/temporary/p4.png",
    price: 26.9,
  },
  {
    id: 5,
    title: "Jalapeño Burger",
    desc: "A spicy kick with fresh jalapeños and pepper jack cheese.",
    img: "/temporary/p5.png",
    price: 22.9,
  },
  {
    id: 6,
    title: "Margherita Pizza",
    desc: "Simple and classic with tangy tomato sauce and basil.",
    img: "/temporary/p6.png",
    price: 21.9,
  },
  {
    id: 7,
    title: "Double Patty Burger",
    desc: "Two flame-grilled beef patties with double cheese.",
    img: "/temporary/p7.png",
    price: 32.9,
  },
  {
    id: 8,
    title: "Veggie Delight",
    desc: "Fresh bell peppers, onions, mushrooms, and olives.",
    img: "/temporary/p8.png",
    price: 23.9,
  },
  {
    id: 9,
    title: "Chicken Supreme",
    desc: "Grilled chicken topped with avocado and lettuce.",
    img: "/temporary/p9.png",
    price: 25.9,
  },
  {
    id: 10,
    title: "Pesto Pasta",
    desc: "Creamy basil pesto sauce with pine nuts and parmesan.",
    img: "/temporary/p10.png",
    price: 28.9,
  },
  {
    id: 11,
    title: "BBQ Chicken Pizza",
    desc: "Tangy BBQ sauce, red onion, and cilantro.",
    img: "/temporary/p11.png",
    price: 26.9,
  },
  {
    id: 12,
    title: "Mushroom Swiss",
    desc: "Juicy burger topped with sautéed mushrooms and swiss.",
    img: "/temporary/p12.png",
    price: 24.9,
  },
];

export default function MenuPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 flex flex-col items-center">
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full mt-8">
        {menuItems.map((item) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className="w-full h-[400px] flex flex-col border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all group bg-white"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative h-[60%] w-full bg-fuchsia-50">
              {item.img && (
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              )}
            </div>

            {/* TEXT CONTAINER */}
            <div className="flex flex-col justify-between p-4 h-[40%]">
              <div className="flex justify-between items-start">
                <h1 className="text-lg font-bold uppercase text-red-500">{item.title}</h1>
                <span className="text-red-500 font-bold text-lg">${item.price}</span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 my-2">
                {item.desc}
              </p>
              <button className="hidden group-hover:block w-full bg-red-500 text-white p-2 rounded-md font-bold uppercase transition-all">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}