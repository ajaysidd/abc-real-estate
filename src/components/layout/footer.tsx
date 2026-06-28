import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">

        <div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="HAYANAN Logo"
    width={60}
    height={60}
    className="rounded-full"
  />

  <div>
    <h2 className="text-2xl font-bold text-white">
      HAYANAN
    </h2>

    <p className="text-gray-400">
      Premium Real Estate
    </p>
  </div>
</div>

        <div>
          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Contact
          </h3>

          <p>Email: info@hayanan.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Hyderabad, Telangana</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} HAYANAN Real Estate. All Rights Reserved.
      </div>
    </footer>
  );
}