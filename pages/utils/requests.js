const API_KEY = process.env.API_KEY

const requestedAPI = [
    {
        title: "Trending",
           url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
       },
       {
           title: "Top Rated",
              url: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Action",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Comedy",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Horror",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Romance",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Mystrery",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Trending",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Trending",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
          
       {
           title: "Trending",
              url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
          },
       
]

export default requestedAPI;