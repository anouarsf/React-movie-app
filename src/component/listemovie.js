import React from 'react';
import StarRatings from 'react-star-ratings';

function Listemovie(props) {

    return (
        <div className="container-movie">
            {props.liste.map((movie)=>
            <div class="card-movie">
            <button className="btn-read"><a href ={movie.youtube} className="lien-hypertexte">WATCH TRAILER</a></button>

            <img className=" img-movie" src={movie.image}/>
             <p className="title-movie">{movie.title}</p>
             
             <StarRatings 
                rating={Number(movie.rating)}

                starDimension={'15px'}
                starSpacing={'1px'}
                starRatedColor="orange"
                changeRating={(newRating, title) => props.changeRating(newRating, title)}
                numberOfStars={5}
                name='rating' />
            





                </div>
                )}

              
        </div>


    )
}

export default Listemovie