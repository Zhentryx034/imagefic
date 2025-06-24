import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import DashboardNav from "./DashboardNav";
import img1 from "../../assets/Pictures/cars/Untitled/car (1).png";
import img2 from "../../assets/Pictures/cars/Untitled/car (2).png";
import img3 from "../../assets/Pictures/cars/Untitled/car (3).png";
import img4 from "../../assets/Pictures/cars/Untitled/car (4).png";
import img5 from "../../assets/Pictures/cars/Untitled/car (5).png";
import img6 from "../../assets/Pictures/cars/Untitled/car (6).png";
import img7 from "../../assets/Pictures/cars/Untitled/car (7).png";
import img8 from "../../assets/Pictures/cars/Untitled/car (8).png";
import img9 from "../../assets/Pictures/cars/Untitled/car (9).png";
import img10 from "../../assets/Pictures/cars/Untitled/car (10).png";
import img11 from "../../assets/Pictures/cars/Untitled/car (11).png";
import img12 from "../../assets/Pictures/cars/Untitled/car (12).png";
import img13 from "../../assets/Pictures/cars/Untitled/car (13).png";
import img14 from "../../assets/Pictures/cars/Untitled/car (14).png";
import img15 from "../../assets/Pictures/cars/Untitled/car (15).png";

const CARS_PER_PAGE = 15; // 5 columns x 3 rows

// Example car images array (replace with your actual image URLs)
const carImages: string[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const Cars:React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const totalPages = Math.ceil(carImages.length / CARS_PER_PAGE);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Group images into pages
  const pages = Array.from({ length: totalPages }, (_, i) =>
    carImages.slice(i * CARS_PER_PAGE, (i + 1) * CARS_PER_PAGE)
  );

  // Handle page change
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Listen to Embla's select event
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <DashboardNav />
      <div className="overflow-hidden mt-36 pl-6 pr-6 " ref={emblaRef}>
         <h1 className='text-[36px] font-bold mt-8 mb-6 text-left pl-8 '>Cars</h1>
        <div className="flex">
          {pages.map((page, pageIndex) => (
            <div className="flex-shrink-0 w-full p-4" key={pageIndex}>
              <div className="grid grid-cols-5 grid-rows-3 gap-4">
                {page.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Car ${pageIndex * CARS_PER_PAGE + i + 1}`}
                    className="w-full h-28 object-cover rounded-lg shadow hover:scale-105 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded transition-colors duration-200 text-sm font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              i === selectedIndex
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => scrollTo(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cars;
