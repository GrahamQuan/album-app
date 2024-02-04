const data = [
  {
    title: 'tech stack',
    content: [
      'react',
      'typescript',
      'vite',
      'react-router-dom',
      'react-query',
      'react-intersection-observer',
    ],
  },
  {
    title: 'css',
    content: ['loading', 'pc and mobile responsive', 'scroll to top'],
  },
  {
    title: 'data',
    content: [
      'data error handle (fetch 3 times)',
      'load data when scorlling (IntersectionObserver)',
    ],
  },
  {
    title: 'router',
    content: [
      'click image to detail page (using react-router)',
      '404 page with button to go home',
    ],
  },
];

export default function Description() {
  return (
    <div>
      <h1 className="text-3xl">description</h1>
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <div>{item.title}</div>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              {item.content.map((elem, i) => (
                <li className="" key={i}>
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
