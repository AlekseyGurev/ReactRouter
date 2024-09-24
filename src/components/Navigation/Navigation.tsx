import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav
      style={{
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        listStyle: 'none',
        fontSize: '30px',
      }}
    >
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/category/heroes">Heroes</Link>
      </li>
      <li>
        <Link to="/category/locations">Location</Link>
      </li>
      <li>
        <Link to="/category/episodes">Episodes</Link>
      </li>
    </nav>
  );
};
