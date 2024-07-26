import NavLink from './NavLink';

const Navigation = ({className}) => {
  return (
    <>
      <NavLink className={className} href='/movies'>Movies</NavLink>
      <NavLink className={className} href='/shows'>Shows</NavLink>
    </>
  );
};

export default Navigation;
