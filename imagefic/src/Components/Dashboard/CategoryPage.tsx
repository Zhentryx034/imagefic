import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";

const CategoryPage: React.FC = () => {
    const {id} = useParams<{id: string}>()
    const [images, setImages] = useState<string[]>([])
    const [categoryName, setCategoryName] = useState<string>("")  
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
    // First, try to get category name from the main categories list
    setIsLoading(true);
    
    fetch('https://backend-imagfic.onrender.com/api/v1/categories/', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token") || sessionStorage.getItem("access_token")}`
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Categories API error: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        if (Array.isArray(data)) {
            // Find the category with matching ID
            const category = data.find((cat: any) => cat.id.toString() === id);
            if (category) {
                setCategoryName(category.name);
            } else {
                console.warn(`Category with ID ${id} not found in categories list`);
                setCategoryName(`Category ${id}`);
            }
        } else {
            setCategoryName(`Category ${id}`);
        }
    })
    .catch(err => {
        console.error("Error fetching categories list:", err);
        setCategoryName(`Category ${id}`);
    });

   // Fetch images for this category
   fetch(`https://backend-imagfic.onrender.com/api/v1/categories/${id}/images/`, {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token") || sessionStorage.getItem("access_token")}`,
        },
   })
     .then(res => {
        if (!res.ok) {
          console.warn(`Images endpoint returned ${res.status}`);
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
     })
     .then(data => {
       setIsLoading(false);
       if (Array.isArray(data)) {
         setImages(data.map((item: any) => item.image));
       } else {
         console.warn("Images data is not an array:", data);
         setImages([]);
       }
     })
     .catch(err => {
       setIsLoading(false);
       console.error("Error fetching category images:", err);
       setImages([]);
     });
    }, [id])
        return (
             <div className="p-6">
     <h1 className="text-4xl font-bold mb-4">{categoryName} Images</h1>
     <div className="flex flex-wrap gap-4 justify-center">
       {isLoading ? (
         <p>Loading images...</p>
       ) : images.length > 0 ? (
         images.map((img, idx) => (
           <img key={idx} src={img} alt={`${categoryName} image ${idx + 1}`} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
         ))
       ) : (
         <p>No images available for this category.</p>
       )}
     </div>
   </div>
        )
}

export default CategoryPage;