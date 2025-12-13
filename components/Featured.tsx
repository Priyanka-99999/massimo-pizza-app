import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

const featuredProducts = [
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
  {
    id: "4",
    title: "Spicy Arrabbiata",
    desc: "A classic Italian pasta dish with a fiery tomato sauce made from garlic, tomatoes, and dried red chili peppers.",
    img: "/temporary/p4.png",
    price: 26.9,
  },
  {
    id: "5",
    title: "Jalapeño Burger",
    desc: "A spicy kick to your burger experience with fresh jalapeños and pepper jack cheese.",
    img: "/temporary/p5.png",
    price: 22.9,
  },
  {
    id: "6",
    title: "Margherita Pizza",
    desc: "Simple and classic, topped with tangy tomato sauce, fresh mozzarella cheese, and fresh basil leaves.",
    img: "/temporary/p6.png",
    price: 21.9,
  },
  {
    id: "7",
    title: "Double Patty Burger",
    desc: "For the big appetite, two flame-grilled beef patties with double cheese and all the fixings.",
    img: "/temporary/p7.png",
    price: 32.9,
  },
  {
    id: "8",
    title: "Veggie Delight",
    desc: "Loaded with fresh bell peppers, onions, mushrooms, olives, and spinach on a crispy crust.",
    img: "/temporary/p8.png",
    price: 23.9,
  },
  {
    id: "9",
    title: "Chicken Supreme",
    desc: "Grilled chicken breast topped with fresh avocado, lettuce, and our signature sauce.",
    img: "/temporary/p9.png",
    price: 25.9,
  },
];

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative flex-1 w-full hover:scale-105 transition-all duration-500">
              {item.img && (
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-contain" 
                />
              )}
            </div>

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8 text-gray-500 text-sm max-w-[90%]">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              
              {/* THE BUTTON */}
              <AddToCartButton product={item} /> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}