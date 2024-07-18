
export const fetchMovies = async() => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_CREDENTIALS_API_KEY}`
              }
        }
    );
    return res.json();
}


export const fetchTvShows = async() => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_CREDENTIALS_API_KEY}`
              }
        }
    );
    return res.json();
}