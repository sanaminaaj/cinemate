import { Link } from "react-router-dom";

export default function Card ({key,movie})  {
  const image=`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`;
  return (
    <>
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to="#">
            <img className="rounded-t-lg w-full h-auto" src={image} alt="" />
        </Link>
        <div className="p-5">
            <Link to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {movie.title}
                </h5>
            </Link>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            
        </div>
    </div>
    
    </>
  )
}