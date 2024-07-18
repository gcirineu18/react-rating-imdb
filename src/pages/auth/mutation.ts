
export const mutationLogin = async() => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_CREDENTIALS_API_KEY}`
              }
        }
    );
    return res.json();
}