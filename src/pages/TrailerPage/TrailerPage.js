import { useParams } from 'react-router-dom';

export default function TrailerPage() {
  const { trailerId } = useParams();

  return (
    <div>
      <h1>Watch Trailer</h1>
      <div className="trailer-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerId}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
