/* eslint-disable react/display-name */
import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnails = forwardRef (({ data }, ref) => {
    const BASE_URL = "http://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} className="p-2 group cursor-pointer transition ease-in transform sm:hover:scale-105 hover:z-50">
            <Image 
            layout="responsive"
            src={`${BASE_URL}${data.backdrop_path || data.poster_path}`}
            height="225"
            width="400"
            alt={data.original_title}
            />
            <div className="pt-2">
                <p className="truncate max-w-m">{data.overview}</p>
            </div>
            <h2 className="mt-1 text2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                {data.title || data.original_name}
            </h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
                {data.media_type && data.media_type}{" • "}
                {data.release_date || data.first_air_date}{" • "}
                <ThumbUpIcon className="h-5 mx-2"/> {data.vote_count}
            </p>
        </div>

    );
});

export default Thumbnails;