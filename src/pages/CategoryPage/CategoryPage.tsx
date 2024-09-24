import { useParams } from 'react-router';
import { categoryDataMap } from '../../mocks/mocks';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CategoryPage = () => {
  const { category } = useParams();
  const categoryData = categoryDataMap[`${category}`];
  const [searchParams] = useSearchParams();
  const sortParams = searchParams.get('sort');
  const [data, setData] = useState([]);

  const sort = () => {
    const sortedData = [...categoryData].sort((a, b) => {
      switch (sortParams) {
        case 'asc':
          return new Date(a.created) - new Date(b.created);
        case 'desc':
          return new Date(b.created) - new Date(a.created);
      }
    });
    setData(sortedData);
  };

  useEffect(() => {
    sort();
  }, [category]);

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Category {category}</h1>
      </div>
      <div style={{ textAlign: 'center' }}></div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        {data.map((item) => (
          <li key={item.id}>
            <Link
              to={`/category/heroes/${item.id}`}
              style={{ textAlign: 'center', width: '200px' }}
              state={item}
            >
              <h2>{item.name}</h2>
              {item.image && <img src={item.image} width="200" />}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
