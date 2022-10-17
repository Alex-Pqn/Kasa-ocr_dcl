import './Error404.scss';

import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="error404">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <span>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </span>
    </div>
  );
}

export default Error404;
