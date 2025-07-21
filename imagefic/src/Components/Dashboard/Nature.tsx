import React, {useEffect,useState} from 'react'
import DashboardNav from "./DashboardNav";


const Nature:React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
 const API_BASE_URL = "https://backend-imagfic.onrender.com"

    useEffect(() => {
       fetch(`${API_BASE_URL}/api/v1/categories/1/images/`)
       .then(res => res.json())
       .then(data => {
        console.log('Here is the',data)
        if(Array.isArray(data)) {
          setImages(data.map((item) => item.image)[0]);
        } else {
          console.error("No image found in response", data);
        }
       })
       .catch(err => {
        console.error("Error fetching nature images:", err);
        // setImages(null); // Set to null if there's an error
       })
    }, []);

  return (
    <div>
        <DashboardNav />
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Nature Dashboard</h1>
            <p className="text-lg">Explore the beauty of nature through our collection.</p>
          {images.length > 0 ? (
          images.map((img, idx) => (
            <img key={idx} src={img} alt={`Nature ${idx + 1}`} className="mt-8 w-full max-w-md rounded-lg shadow-lg" />
          ))
        ) : (
          <p className="mt-8 text-red-500">No image available</p>
        )}
            </div>
    </div>
  )
}

export default Nature
