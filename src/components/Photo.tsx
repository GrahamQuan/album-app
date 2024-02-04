import { useNavigate } from 'react-router-dom';

export default function Photo({
  src,
  photoId,
  innerRef,
}: {
  src: string;
  photoId: string;
  innerRef?: React.Ref<HTMLImageElement>;
}) {
  const navigate = useNavigate();

  return (
    <img
      ref={innerRef}
      className="rounded-xl hover:rounded-none transition-all duration-300 ease-in-out hover:cursor-pointer"
      src={src}
      alt="image"
      onClick={() => navigate(`/photos/${photoId}`)}
    />
  );
}
