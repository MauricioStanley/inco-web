import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <p className="text-ink-soft">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="font-semibold text-primary hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
