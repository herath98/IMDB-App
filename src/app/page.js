import fetch from 'node-fetch'; // Make sure to import fetch

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

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const data = await res.json();
  const results = data.results;
  console.log(results);
  return <div>Home</div>;
}
