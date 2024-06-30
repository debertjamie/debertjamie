import Image from "next/image";

const movies = [
  {
    name: "Railroad Tigers",
    img: "https://m.media-amazon.com/images/M/MV5BMjljMmYwN2ItYmM3Zi00YmE1LWFlMDgtN2ZmYmM3ZjRlOTIzXkEyXkFqcGdeQXVyNDM1Nzc0MTI@._V1_FMjpg_UY474_.jpg",
  },
  {
    name: "South Park",
    img: "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_FMjpg_UY480_.jpg",
  },
  {
    name: "Ip Man 4",
    img: "https://m.media-amazon.com/images/M/MV5BNzYyZWIwZjQtZGVjZi00NWIxLTk0ODMtNzA3YzE5MWM3OWI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY474_.jpg",
  },
];

export function Movies() {
  return (
    <div className="text-xl bg-stone-300 dark:bg-stone-800 px-4 py-2 space-y-2 rounded-xl">
      <p>Favourite Movies</p>
      <div className="relative flex flex-col items-center justify-center h-80">
        {movies.map((movie, index) => (
          <div
            key={movie.name}
            data-index={index}
            className="data-[index='1']:z-20 hover:z-30 data-[index='0']:-rotate-[12deg] lg:data-[index='0']:-rotate-[20deg] data-[index='2']:rotate-[12deg] lg:data-[index='2']:rotate-[20deg] data-[index='0']:scale-[.85] data-[index='2']:scale-[.85] data-[index='0']:-translate-x-[4rem] lg:data-[index='0']:-translate-x-[7rem] data-[index='2']:translate-x-[4rem] lg:data-[index='2']:translate-x-[7rem] data-[index='0']:absolute data-[index='1']:absolute data-[index='2']:absolute"
          >
            <div className="relative group rounded-lg overflow-hidden w-fit h-fit">
              <Image
                src={movie.img}
                alt={movie.name}
                height={0}
                width={0}
                sizes="100%"
                className="w-40 h-60 lg:w-48 lg:h-72"
              />
              <span className="pointer-events-none absolute inset-0 duration-300 opacity-0 group-hover:opacity-100 bg-black/60" />
              <small className="text-zinc-100 pointer-events-none absolute opacity-0 group-hover:opacity-100 duration-300 bottom-2 p-2 w-full font-semibold text-center flex justify-center items-center">
                {movie.name}
              </small>
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg">*Image credits to IMDB</p>
    </div>
  );
}
