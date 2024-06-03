import Link from "next/link";

export default function LegalAndContact() {
  return (
    <div className="w-full p-4">
      <div className="flex">
        <h3 className="text-clip  hidden sm:block">Compagnon de Code</h3>
       
      </div>
      <h4 className="mt-0 sm:mt-12 mb-2">
        <u>Contact :</u>
      </h4>
      <a href="mailto:contact@ducompagnon.fr">
        <h5>contact@ducompagnon.fr</h5>
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
