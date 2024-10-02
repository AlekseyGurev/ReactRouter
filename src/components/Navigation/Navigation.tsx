import { Link } from 'react-router-dom';
import { AuthStatus } from '../AuthStatus/AuthStatus';

export const Navigation = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        paddingTop: '20px',
      }}
    >
      <nav
        style={{
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
      <AuthStatus />
    </div>
  );
};
