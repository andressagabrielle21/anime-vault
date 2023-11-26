import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        @2023 EpicAnimeVault Andressa Souza
      </p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Link href="https://www.linkedin.com/in/andressa-gabrielle-souza-611857138/">
          <Image
            src="/linkedin.png"
            alt="logo"
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
