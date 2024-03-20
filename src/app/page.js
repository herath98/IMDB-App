import fetch from 'node-fetch'; 
const API_KEY = process.env.API_KEY;

export default async function Home(searchParams) {
  const genre = searchParams.genre || 'fetchTrending';
  let url;
  
  if (genre === 'fetchTopRated') {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  }

  const res = await fetch(url);

  console.log('Response Status:', res.status);

  if (!res.ok) {
    const errorMessage = await res.text();
    console.error('Error:', errorMessage);
    
  }


 
  
  return <div>Home</div>;
}
