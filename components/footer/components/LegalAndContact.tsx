import Link from "next/link";

export default function LegalAndContact() {
  return (
    <div className="w-full p-4">
      <h3 className="clip hidden sm:block">Compagnon de Code</h3>

      <h4 className="mt-0 sm:mt-12 mb-2">
        <u>Contact :</u>
      </h4>
      <a href="mailto:christophe.chiapetta@gmail.com">
        <h5>christophe.chiapetta@gmail.com</h5>
      </a>

      <h5 className="mt-12">
        2024 &copy; Christophe Chiappetta - Tous droits réservés
      </h5>
      <Link href="/cgu">
        {" "}
        <h5>Mentions Légales</h5>
      </Link>
    </div>
  );
}
