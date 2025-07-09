import React from 'react';
import image1 from '../../../assets/Pictures/image1.png';
import image2 from '../../../assets/Pictures/image2.png';
import image3 from '../../../assets/Pictures/image3.png';
import image4 from '../../../assets/Pictures/image4.png';
import image5 from '../../../assets/Pictures/image5.png';
import image6 from '../../../assets/Pictures/image6.png';

const GallerySection: React.FC = () => {
  return (
    <section className="py-16 px-4  md:px-10 w-full">
      <div className="text-center mx-auto max-w-7xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-roboto font-medium mb-4 mt-8">
          Create Your Best Work, with High Quality Images
        </h2>
        <p className="font-roboto text-sm sm:text-base mb-12">
          Unique hand-picked photos, affordable HD and 4K video clips, editable vectors—and much, much more. You'll find it all, right here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 md:px-28 lg:grid-cols-3 gap-4 mb-6">
          {[image1, image2, image3, image4, image5, image6].map((src, index) => (
            <img key={index} src={src} alt={`gallery-${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
