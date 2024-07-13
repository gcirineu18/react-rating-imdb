
export const mutationLogin = async() => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjY3MWYxMWNjMDQyNDBlOTg5ZTgxNGNlYjcwZDUxYSIsIm5iZiI6MTcyMDcyOTYzNS42NDQ4MzQsInN1YiI6IjY2OGVjZTQ1NzZjYTIyZDU0ODAzMzUxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0HQmyZUPJWKQ_wU9RPWpRlAwiBe4S3joQJ68QB8VlOA'
              }
        }
    );
    return res.json();
}