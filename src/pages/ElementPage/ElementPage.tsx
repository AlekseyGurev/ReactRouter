import { useLocation } from 'react-router';

export const ElementPage = () => {
  const { state } = useLocation();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        <h1>{state.name}</h1>
        {state.image && <img src={state.image} width="400" />}
      </div>
    </>
  );
};
