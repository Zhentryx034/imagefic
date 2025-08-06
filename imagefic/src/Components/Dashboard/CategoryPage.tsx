import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
    const {id} = useParams<{id: string}>()
    const [images, setImages] = useState<string[]>([])
    const [categoryName, setCategoryName] = useState<string>("")

    useEffect(() => {
         // Fetch category name (optional)
        
   fetch(`https://backend-imagfic.onrender.com/api/v1/categories/${id}/`, {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token") || sessionStorage.getItem("access_token")}`,
        },
   })
     .then(res => res.json())
     .then(data => setCategoryName(data.name))
     .catch(() => setCategoryName('Category'));

   // Fetch images for this category
   fetch(`https://backend-imagfic.onrender.com/api/v1/categories/${id}/images/`, {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token") || sessionStorage.getItem("access_token")}`,
        },
   })
     .then(res => res.json())
     .then(data => {
       if (Array.isArray(data)) {
         setImages(data.map((item: any) => item.image));
       }
     });
    }, [id])
        return (
             <div>
     <h1 className="text-4xl font-bold mb-4">{categoryName} Images</h1>
     <div className="flex flex-wrap gap-4 justify-center">
       {images.length > 0 ? (
         images.map((img, idx) => (
           <img key={idx} src={img} alt={`Category ${idx + 1}`} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
         ))
       ) : (
         <p>No images available for this category.</p>
       ) }
     </div>
   </div>
        )
}

export default CategoryPage;