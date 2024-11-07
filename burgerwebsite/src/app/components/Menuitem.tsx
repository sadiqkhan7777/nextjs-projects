import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://img.freepik.com/premium-photo/burger-being-pulled-out-brick-oven-fire-blurred-background_955712-44062.jpg?w=740",
    "https://img.freepik.com/premium-photo/cajun-blackened-burger-delight_1036998-271023.jpg?w=740",
    "https://img.freepik.com/premium-photo/juicy-cheeseburger-smoky-grill_681147-23643.jpg?w=826",
    "https://img.freepik.com/premium-photo/hamburger-with-cheese-lettuce-it-is-burning-flames_1272865-18199.jpg?w=740",
    "https://img.freepik.com/premium-photo/burgers-advertising_1197721-36270.jpg?w=740",
    "https://img.freepik.com/premium-photo/sweet-chili-maple-burger_944420-62235.jpg?w=740",
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/burger-with-bun-onions-it_273179-5682.jpg?w=826")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h1 className="text-3xl text-white z-10 relative">So Order Now..!!</h1>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-x-20 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 r"
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`Product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />

              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Burger Name {index + 1}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $149
                  </p>

                  <del>
                    <br />
                    <p className="text-sm text-blue-800 cursor-auto ml-2 ">
                      {" "}
                     $199
                    </p>
                  </del>

                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;

//  https://img.freepik.com/premium-photo/burger-being-pulled-out-brick-oven-fire-blurred-background_955712-44062.jpg?w=740
//  https://img.freepik.com/premium-photo/cajun-blackened-burger-delight_1036998-271023.jpg?w=740
//  https://img.freepik.com/premium-photo/juicy-cheeseburger-smoky-grill_681147-23643.jpg?w=826
//  https://img.freepik.com/premium-photo/hamburger-with-cheese-lettuce-it-is-burning-flames_1272865-18199.jpg?w=740
//  https://img.freepik.com/premium-photo/burgers-advertising_1197721-36270.jpg?w=740
//  https://img.freepik.com/premium-photo/sweet-chili-maple-burger_944420-62235.jpg?w=740

//  https://img.freepik.com/premium-photo/hamburger-with-grill-that-has-grill-background_976492-84218.jpg?w=740
//  https://img.freepik.com/premium-photo/hamburger-with-flames-background-fire-it_1264368-313.jpg?w=826
//  https://img.freepik.com/premium-photo/burger-served-skateboard_1243330-81.jpg?w=740
// https://img.freepik.com/premium-photo/fresh-guacamole-with-diced-tomatoes-onions_1243330-6333.jpg?w=740
// https://img.freepik.com/premium-photo/dark-matter-burger_1243330-176.jpg?w=740
// https://img.freepik.com/premium-photo/delicious-burger-with-meat-cheese-tomatoes-lettuce-fresh-ingredients_1158995-1045.jpg?w=740
// https://img.freepik.com/premium-photo/sweet-chili-maple-burger_944420-62235.jpg?w=740
// https://img.freepik.com/premium-photo/food-day_1275925-3613.jpg?w=740
// https://img.freepik.com/premium-photo/hamburger-with-black-bread_960396-860421.jpg?w=740
// https://img.freepik.com/premium-photo/burger-with-side-edible-black-holes_1243330-850.jpg?w=740
// https://img.freepik.com/premium-photo/delicious-burger-with-meat-cheese-tomatoes-lettuce-fresh-ingredients_1212738-450.jpg?w=826
// https://img.freepik.com/premium-photo/hamburger-with-fire-burning-background_985249-1473.jpg?w=740
//  https://img.freepik.com/premium-photo/hamburger-with-lot-cheese-lettuce-vegetables_1125254-9678.jpg?w=360
// https://img.freepik.com/premium-photo/burger-with-bun-onions-it_273179-5682.jpg?w=826
// https://img.freepik.com/premium-photo/hamburger-with-sesame-seeds-it-is-covered-rain_1197721-20298.jpg?w=740
// https://img.freepik.com/premium-photo/delicious-burger-with-meat-cheese-tomatoes-lettuce-fresh-ingredients_1158995-993.jpg?w=826
