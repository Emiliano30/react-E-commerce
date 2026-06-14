function Spinner() {
  return (
    <div className="flex h-full min-h-320px w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-base-300 bg-base-100/90 p-6 shadow-xl shadow-black/10 backdrop-blur-sm">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <div className="text-center">
          <p className="text-lg font-semibold text-base-content">Cargando productos</p>
          <p className="text-sm text-base-content/70">Por favor espera un momento...</p>
        </div>
      </div>
    </div>
  );
}

export default Spinner;