import { useInfiniteQuery } from '@tanstack/react-query';
import { type PhotoData } from '../pages/PhotoPage';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from './Loading';
import Photo from './Photo';

const LIMIT = 12;

const fetchPhotos = async ({ pageParam }: { pageParam: number }) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${pageParam}&limit=${LIMIT}`
  );
  const data = (await response.json()) as PhotoData[];
  return data;
};

export default function Album() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['album'],
    queryFn: fetchPhotos,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('load data');
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === 'pending') {
    return <Loading />;
  }

  if (status === 'error') {
    return <div>something went wrong</div>;
  }

  const albumList = data.pages.map((album) =>
    album.map((photo, i) => (
      <div
        className="flex justify-center items-center w-full sm:w-1/2 md:w-1/3 p-4"
        key={photo.id}
      >
        <Photo
          innerRef={album.length === i + 1 ? ref : undefined} // final photo
          key={photo.id}
          src={photo.download_url}
          photoId={photo.id}
        />
      </div>
    ))
  );

  return (
    <div className="flex flex-wrap justify-around">
      {albumList}
      <div ref={ref} className="h-10">
        <Loading />
      </div>
    </div>
  );
}
