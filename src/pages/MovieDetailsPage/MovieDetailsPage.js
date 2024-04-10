import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getDetailsMovies } from 'services/api';

import { TiArrowBack } from 'react-icons/ti';

import { Loader } from 'components/Loader/Loader';
import {
  DetailsContainer,
  MovieImage,
  Overview,
  AdditionalInfo,
  MovieInfo,
  AddList,
  StyledNavLink,
  StyledBackLink,
} from './MovieDetailsPage.styled.js';

import { ErrorMessage } from '../Homepage/HomePage.styled';
import mainplaceholder from 'services/mainplaceholder.png';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location);

  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);
        const fetchedDetails = await getDetailsMovies(params.movieId);
        setMovie(fetchedDetails);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [params.movieId]);

  // Визначення getUserScore всередині області відображення компонентів
  const getUserScore =
    movie && movie.vote_average ? Math.round(movie.vote_average * 10) : 0;

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! Something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      <Loader isLoading={isLoading} />

      <StyledBackLink to={backLinkRef.current.state?.from ?? '/'}>
        <TiArrowBack style={{ verticalAlign: 'bottom' }} />
        Go back
      </StyledBackLink>

      {movie && (
        <DetailsContainer>
          <MovieImage
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : mainplaceholder
            }
            alt={movie.title}
          />
          <MovieInfo>
            <h1>{movie.title}</h1>
            <a
              href={`https://www.youtube.com/watch?v=${movie.title}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Watch Trailer
            </a>

            <p>User score: {getUserScore}%</p>
            <h2>Overview</h2>
            <Overview>{movie.overview}</Overview>
            <h2>Genres</h2>
            {movie.genres.map(({ name }, index) => (
              <span key={index}>{name} </span>
            ))}
          </MovieInfo>
        </DetailsContainer>
      )}
      <AdditionalInfo>
        <h3>Additional information</h3>
        <ul>
          <AddList>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </AddList>
          <AddList>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </AddList>
        </ul>
      </AdditionalInfo>

      <Outlet />
    </>
  );
}
