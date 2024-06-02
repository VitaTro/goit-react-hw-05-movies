import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo } from './HeaderContainer.styled';

const HeaderContainer = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">
          <img
            src={require('./icons8-movie-48.png')}
            alt="Movie Icon"
            width={50}
            height={50}
          />
        </Logo>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/movies">MOVIES</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default HeaderContainer;
