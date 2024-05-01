import { NavLink } from 'react-router-dom';
import { MyContact } from 'pages/MyContacts';

const Navigation = () => {
  return (
    <>
      <NavLink to="/home"></NavLink>
      {/* второй компонет будет рендериться от условия */}
      <NavLink to="/myContacts"></NavLink>
    </>
  );
};
