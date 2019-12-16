
 import React, { Component } from 'react'
 import StarRatings from 'react-star-ratings';




 function Searchmovie({filtername , changeRating}) {
     
     return (
        <div>
        <div>   
             <input type="search" className="input-btn" placeholder="Tape the name of your favorite movie"  onChange={(e)=>filtername(e.target.value)}/>
            </div>
            <div className="starsearch">
             <StarRatings 
                
                starDimension={'20px'}
                starSpacing={'1px'}
                starRatedColor="blue"
                changeRating={(newRating, name) => changeRating(newRating, name)}
                numberOfStars={5}
                name='rating'
                 />
             </div>
         </div>
     ) 
 }
 
 
 
 
 export default Searchmovie 