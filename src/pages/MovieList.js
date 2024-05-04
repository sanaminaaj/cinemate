
import { useEffect } from "react";
import Card  from "../components/Card";
import useFetch from "../components/useFetch";

export default function MovieList  ({apiPath,title}) {
  

  const {data:movies}=useFetch(apiPath)
  useEffect(() => {
    document.title = `${title}/ Cinemate`;
  });
  return (
    <main>
       <section className="max-w-7xl mx-auto py-7">
        <h2 className="dark:text-white">Movies</h2>
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}