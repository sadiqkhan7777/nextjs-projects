"use client"
import React from 'react'

type Offer = {
  title: string;
  description: string;
}

const SpeacialOffers: React.FC = () => {
const offers: Offer[] = [
  {
    title: "Happy Hour Deal",
    description: "5Pm Say 7PM tak tamam drinks par 50% off hasil hay "
  },
  {
    title: "Family Meal Deal",
    description: "2 main courses order karen aur family deal coupon hasil karen"
  },
  {
    title: "Weekly Brunch Deal",
    description: "Ek free Complimentry drink ka luft utaen "
  },
  {
    title: "Mid-Night Deal",
    description: "Ek free Complimentry burger drink ka luft utaen "
  },
];

const handleOfferClick = (description: string) => {
  alert(description);
}

return (
<section className='py-10'>
<div className='container mx-auto text-center'>
  <h2 className='text-4xl font-bold mb-6 text-white'>
  Special Offer's
  </h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {offers.map((offer, index) => (
      <button key={index }
      onClick={() => handleOfferClick(offer.description)}
      className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transtion duration-300 transform hover:scale-105'>
       <h3 className='text-2xl font-semibold text-red-800'>{offer.title}</h3>
       <p className='text-slate-700 mt-3'>{offer.description}</p>
      </button>
    ))}

  </div>
</div>
</section>
)

}


export default SpeacialOffers