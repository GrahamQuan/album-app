import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loading from '../components/Loading';

export type PhotoData = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export default function Photo() {
  const { photoId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PhotoData>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(`https://picsum.photos/id/${photoId}/info`);
      const resData = (await res.json()) as PhotoData;
      console.log({ resData });
      setData(resData);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return (
    <div>
      <div className="w-96 p-2">
        <img className="rounded-xl" src={data.download_url} />
      </div>
      <p>photo author: {data.author}</p>
    </div>
  );
}
