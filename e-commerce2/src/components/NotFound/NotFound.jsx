import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (

    <div className="bg-base-300 min-h-screen flex flex-col items-center justify-center p-4 text-center">
      

      <h1 className="text-9xl font-extrabold text-primary mb-2">404</h1>
      <h2 className="text-2xl font-bold text-base-content mb-6">Página no encontrada</h2>
      <p className="text-base-content/60 max-w-md mb-8">
        El camino que buscas no existe o ha sido devorado por las sombras.
      </p>


      <div className="flex flex-wrap justify-center gap-4">
        <button onClick={() => navigate('/')} className="btn btn-primary px-8 font-bold">
          Ir al inicio
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-outline btn-primary px-8 font-bold">
          Volver atrás
        </button>
      </div>
      
    </div>
  );
}

export default NotFound;