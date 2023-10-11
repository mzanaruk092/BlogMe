import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { FaUser,FaClock } from 'react-icons/fa6'
import SideBar from '../components/SideBar';

function SingleBlog() {

    const [users, setUsers] = useState([]);
    useEffect(()  => {
        axios.get(`http://localhost:3000/blogs/${id}`).then((res) => {
            setUsers(res.data);
            
        })
    }, [])

    const {id} = useParams()

  return (
    <div className='py-40 mb-5 leading-snug' >
        


            {/* Blog detail */}
        <div className='max-w-7xl mx-auto my-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={users.image} alt='' className='w-full mx-auto rounded'/>
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{users.title}</h2>
                <p className='mb-3 text-gray-500'><FaUser className='inline-flex items-center mr-2'/>{users.author} | {users.published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{users.reading_time}</p>
                <p className='text-base text-gray-500'>{users.content}</p>
                <div className='text-base text-gray-500'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit recusandae ut vero officia? Voluptas enim perspiciatis, harum assumenda illo, minima, fugiat voluptate optio architecto distinctio itaque quidem nulla? Voluptates, laudantium!</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet neque vero dolores voluptate dicta quis. Deleniti commodi quidem, a fugiat praesentium optio cum doloribus distinctio placeat molestiae. Blanditiis, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem placeat natus deserunt. Quas deleniti cumque harum minima distinctio quisquam quidem, error autem at tempora sit veniam nisi. Commodi, at?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit recusandae ut vero officia? Voluptas enim perspiciatis, harum assumenda illo, minima, fugiat voluptate optio architecto distinctio itaque quidem nulla? Voluptates, laudantium!</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet neque vero dolores voluptate dicta quis. Deleniti commodi quidem, a fugiat praesentium optio cum doloribus distinctio placeat molestiae. Blanditiis, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem placeat natus deserunt. Quas deleniti cumque harum minima distinctio quisquam quidem, error autem at tempora sit veniam nisi. Commodi, at?</p>
                    
                </div>
            </div>

            
        </div>
    </div>
         
   )
}

export default SingleBlog