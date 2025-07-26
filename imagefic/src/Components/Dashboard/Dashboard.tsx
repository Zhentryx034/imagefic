import React, { useEffect, useState } from 'react';
import DashboardNav from './DashboardNav';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/Pictures/dashboard images/dashboard-img (1).png'
import img2 from '../../assets/Pictures/dashboard images/dashboard-img (6).png'
import img3 from '../../assets/Pictures/dashboard images/dashboard-img (5).png' 
import img4 from '../../assets/Pictures/dashboard images/dashboard-img (4).png'
import img5 from '../../assets/Pictures/dashboard images/dashboard-img (3).png'
import img6 from '../../assets/Pictures/dashboard images/dashboard-img (2).png'
import Card from './Card';


const Dashboard: React.FC = () => {
    const [categories, setCategories] = useState<{id:number, name: string}[]>([])
    const navigate = useNavigate()
    const items = [
        { id: 1, img: img1, title: "Presentation", link: "/presentation" },
        // { id: 2, img: img2, title: "Cars", link: "/cars" },
        // { id: 3, img: img3, title: "Illustration", link: "/illustration" },
        // { id: 4, img: img4, title: "Art", link: "/art" },
        // { id: 5, img: img5, title: "Sport", link: "/sport" },
        // { id: 6, img: img6, title: "Nature", link: "/nature" }
    ]

    useEffect(()=>{
        //this logic check authentication immediately when component mounts
        if(!localStorage.getItem("authToken")){
            navigate('/login', {replace: true})
        }

        //This logic fetches categories from the server
        fetch('https://backend-imagfic.onrender.com/api/v1/categories/')
        .then(res =>res.json())
        .then(data => setCategories(data))
        .catch(err => console.error("Error Fetching categories", err))
    }, [navigate])

    // if not authenticated, don't render anything
    if(!localStorage.getItem("authToken")){{
        return null
    }}

//Example images for categories
const categoryImages: { [key:string]: string} = {
    test: img1,
}

  return (
     <div className='font-["Poppins"] bg-white h-screen'>
       <DashboardNav />
        <div className='mt-36 pl-6 pr-6 '>
            <h1 className='text-[36px] font-bold mt-8 mb-6 text-left pl-8 '>Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 p-6 bg-white'>
                {categories.map((cat)=> (
                    <Card 
                     key={cat.id}
                     img={categoryImages[cat.name] || categoryImages['test']}
                     title={cat.name}
                     link={`/category/${cat.id}`}
                    />
                ))}
            </div>
        </div>
     </div>
  );
}

export default Dashboard;