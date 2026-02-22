import React from "react";
import bg from "../../../assets/Image/banner-01.png"; // তোমার ছবি

export default function AboutMe() {
  return (
    <section className="relative bg-[#212428] text-white p-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Header-এর সাথে align করার জন্য */}
      <div className="max-w-[84%] mx-auto px-4 sm:px-6 lg:px-8  justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={bg}
                alt="Sifat"
                className="rounded-3xl shadow-2xl z-10 w-full object-cover"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
              {/* স্মুথ ফেইড */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#212428] z-20 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <div>
            <h1 className="text-5xl font-bold text-[#FF014F] grp-8 ">About <span className="text-white">Me</span> </h1>
          </div>
          <div className="text-gray-300 space-y-6 lg:space-y-8">
            <p className="text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id obcaecati consequuntur reprehenderit, minus quo magnam voluptates maiores. Iste impedit nobis eaque modi minima consequatur. Porro qui quam accusantium magni.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque facilis in non dolor delectus vero harum iusto, labore, debitis voluptatum aliquam porro aut quidem iste tempore ex itaque nesciunt aliquid!
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae perspiciatis debitis! Corporis esse saepe illo accusamus fuga maxime officiis excepturi voluptatem! Cupiditate, assumenda eos distinctio illo deleniti dolorem repudiandae?
            </p>
            <button className="p-4 bg-[#FF014F] w-40 rounded-md shadow-2xl shadow-black mt-10"> Larn More </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}