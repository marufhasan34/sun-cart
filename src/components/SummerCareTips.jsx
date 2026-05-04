import Image from "next/image";
import React from "react";

const SummerCareTips = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center">Summer Care Tips</h2>
      <div className="flex items-center mt-14 gap-9">
        
          <Image
            src="https://glamveda.com/cdn/shop/articles/Protein_Bleach_Blog.jpg?v=1653369212&width=2428"
            alt="summer vibes"
            width={500}
            height={500}
             unoptimized
          />
       
        <div>
            <h3 className="text-3xl">Summer Skincare Tips</h3>
            <p className="text-gray-400 mt-3">Summer means warmer weather, longer days, and more time spent outdoors. Summertime is the perfect time to show off your radiant skin! And while that’s all great news for your social life, it’s not so great for your skin. That’s because the sun’s harmful ultraviolet (UV) rays are always present, and they can penetrate through clouds, fog, and even glass. The sun, heat, and humidity can take a toll on your skin, leaving it feeling dry, irritated, and covered in breakouts. But don’t worry, we’ve got you covered with the best summer skincare tips for flawless skin.</p>
            <p className="text-gray-400 mt-2">Achieving and maintaining flawless summer skin can be a challenge. To start, it’s important to use products that are specifically designed for summer weather. Heavy creams and ointments can clog pores and lead to breakouts, so opt for lighter-weight products that won’t weigh your skin down. Look for products that contain ingredients like hyaluronic acid, which helps to hydrate and plump the skin, and niacinamide, which reduces inflammation and redness.</p>
        </div>
      </div>
      <div className="flex items-center flex-row-reverse mt-20 gap-9">
        
          <Image
            src="https://extension.usu.edu/images/news_images/hydration-image.jpg"
            alt="summer vibes"
            width={500}
            height={500}
             unoptimized
          />
       
        <div>
            <h3 className="text-3xl">Tips for Staying Hydrated This Summer</h3>
            <p className="text-gray-400 mt-3">Summer HydrationSummer is a great time to be outside – but proper precautions must be taken. It is especially important to stay hydrated as temperatures rise. Heat exhaustion and heat stroke are serious health conditions, but they can be avoided.</p>
            <p className="text-gray-400 mt-2">Achieving and maintaining flawless summer skin can be a challenge. To start, it’s important to use products that are specifically designed for summer weather. Heavy creams and ointments can clog pores and lead to breakouts, so opt for lighter-weight products that won’t weigh your skin down. Look for products that contain ingredients like hyaluronic acid, which helps to hydrate and plump the skin, and niacinamide, which reduces inflammation and redness.</p>
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;
