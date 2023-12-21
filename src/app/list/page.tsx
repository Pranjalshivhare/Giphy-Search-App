'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,

} from "@ant-design/icons";
import axios from 'axios';
export default function ListPage() {
  

const [search, setSearch] = useState('');
const [gifs, setGifs] = useState([]);
const [loading, setLoading] = useState(false);
const [like, setLike] = useState();
const searchGif = () => {
  if(search.length > 0){
    setLoading(true);
    fetch(GIPHY_API+search)
    .then((res)=>{
      setLoading(false);
      return res.json();
    })
    .then((result) => {
      setGifs(result.data.map((gif:any) => {
        return gif.images.fixed_height.url;
      }))
    })
  }
}
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=ol3Q3DAaYPARl1WxsmYFkArTCwstVA92&limit=50&offset=0&q=";


var api_key = 'ol3Q3DAaYPARl1WxsmYFkArTCwstVA92';


const handleLike = async () =>{ // _id = postId
  // console.log("Like this post",_id);
  try {
    const {data} = await axios.put('/like-post', {});
    <HeartOutlined
                    onClick={() => handleLike()}
                    className="text-danger pt-2 h5 px-2"
                  />

    // console.log("liked: ",data);
    // fetchUserPost(); // ones post updated then rerender the post
  } catch (error) {
    console.log("handleLIke =>", error);
  }
}


console.log(gifs);
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h2>Giphy Search App</h2>

        {/* <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> */}
        
        <input 
        className=" md:flex  text-black"
          type="text"
          placeholder='Search GIFs'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />

          <button onClick={searchGif} className="font-semibold text-indigo-400 hover:text-indigo-700">
            Search!
          </button>


          </div>
    </div>
    <div className='grid grid-cols-4 gap-4 top-0 bg-clip-content p-6 ' >
        {
          gifs.map((gif:any)=>{
            return (
              <div className='rounded-lg' >
                <HeartOutlined
                    onClick={() => handleLike()}
                    className="text-danger pt-2 h5 px-2"
                  />
                <img src={gif}/>
              </div>
            )
          })
        }

        </div>


    </div>
    
  )
}