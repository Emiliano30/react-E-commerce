import { Link } from "react-router-dom";

function NotFound() {
  return (

    <div className="bg-base-300 min-h-screen flex flex-col items-center justify-center p-4 text-center">
      

      <h1 className="text-9xl font-extrabold text-primary mb-2">404</h1>
      <h2 className="text-2xl font-bold text-base-content mb-6">Página no encontrada</h2>
      <p className="text-base-content/60 max-w-md mb-8">
        El camino que buscas no existe o ha sido devorado por las sombras.
      </p>


      <Link to="/" className="btn btn-primary px-8 font-bold">
        Volver al inicio
      </Link>
      
    </div>
  );
}

export default NotFound;