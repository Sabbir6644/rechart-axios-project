import axios from 'axios';
import { useEffect, useState } from 'react';
function AxiosData() {
     const [courses, setCourses]= useState([]);
     useEffect(()=>{
          axios('data.json')
          .then(data => setCourses(data.data))
     },[])
     
     return (
          <div className='grid grid-cols-3 gap-4 '>
             {
               courses.map((course,index)=><div key={index} className='border rounded-lg bg-gray-400 p-3 text-white text-center flex flex-col'>
<img src={course.image} alt="" />
<div className='flex-grow'>
<h2 className='text-2xl font-semibold'>{course.course}</h2>
<p>{course.description}</p>
<h3>Price: {course.price}</h3>
</div>
<button className='w-full bg-green-600 py-3 rounded-lg'>Select</button>
</div>
               )
             } 
              
            
          </div>
     );
}

export default AxiosData;