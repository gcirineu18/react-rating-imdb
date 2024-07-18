
export const fetchTvShowDetails = async (tvShowId:string) =>{
   const res = await fetch( 
    `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
    {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_CREDENTIALS_API_KEY}`
          }
    }
);

    return res.json();
}