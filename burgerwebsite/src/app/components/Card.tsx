import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">
          Delicious Burgers
        </h2>
        <p className="tex-white mb-4">
          Experience the juiest burgers in town, made with fresh ingredients amd
          grilled to perfection.
        </p>
        <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center">
          {" "}
          Coming Soon: Our New Burger Launches
        </h3>
        <ul>
          <li>
            <strong>Cheesy BBQ Bacon Burger:</strong> A mouthwatering blend of
            cheddar cheese, crispy bacon and BBQ.
          </li>
          <br />
          <li>
            <strong>Spicy Jalepeno Burger:</strong>A flery delight topped with
            fresh jelapenos and zesty chipotie mayo.
          </li>
          <br />
          <li>
            <strong>Mushroom Swiss Burger:</strong>Juicy beef patty melted Swiss
            cheese for a rich, savory taste.
          </li>
          <br />
          <li>
            <strong>Avocado Veggie Burger:</strong>A delicious plant-based
            option featuring a grilled veggie
          </li>
          <br />
          <li>
            <strong>Buffalo Chicken Burger:</strong>Crispy Chicken breast tossed
            in spicy buffalo sauce
          </li>
          <br />
        </ul>
        </div>
<div className="md:w-1/2 mt-6 md:mt-0">
<img src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706001.jpg?t=st=1730024357~exp=1730027957~hmac=01f4c683f12bba585cf94c5130ba896ee7f38b83ab1d5d78748707354db8aeac&w=1060" 
alt="Delicious Burger"
className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7" />
</div>

      
    </section>
  );
};

export default FloatingImageContentBlock;
// https://img.freepik.com/premium-photo/hamburger-with-fire-burning-background_985249-1473.jpg?w=740
