import { useEffect , useState } from 'react';
import CarouselSlider from './Components/CarouselSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainComponent.css';

const API_URL_SHOWS = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';

const API_URL_FILMS = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDEwN2U2ZWViOWU0NTc5OGQyMTliODgxOTYyN2U5ZSIsIm5iZiI6MTc1MjUwMTg5NS4wNTc5OTk4LCJzdWIiOiI2ODc1MGU4N2QwNjI4YzJjODkxMDY1OTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ebuixr7OFk26HlIgd7g4Wtu7PxzUVnOBwPI-LJV5E6I';

export interface TvShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  [key: string]: any;
}

const MainComponent = () => {
  const [shows, setShows] = useState<TvShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState<TvShow[]>([]);

  useEffect(() => {
    fetch(API_URL_SHOWS, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setShows(data.results); // Salviamo i risultati nello state
        setLoading(false);
        console.log('Dati ricevuti:', data);
      })
      .catch((error) => {
        console.error('Errore nella fetch:', error);
        setLoading(false);
      });
      fetch(API_URL_FILMS, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFilms(data.results); // Salviamo i risultati nello state
          setLoading(false);
          console.log('Dati ricevuti:', data);
        })
      .catch((error) => {
        console.error('Errore nella fetch:', error);
        setLoading(false);
      });

  }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }

  return (
    <>
    <h1 className='title'>SERIE TV</h1>
    <CarouselSlider carouselName='tv' items={shows.map((show) => ({id : show.id , name : show.name , image : show.poster_path}))} />
    <h1 className='title'>FILMS</h1>
    <CarouselSlider carouselName='film' items={films.map((film) => ({id : film.id , name : film.name , image : film.poster_path}))} />
    </>
  );
};

export default MainComponent;
