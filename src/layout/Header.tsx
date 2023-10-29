import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand row g-2" href="/">
          <Image
            src="https://mobilemarketingwatch.com/wp-content/uploads/2023/10/Pokemon-logo-1.png"
            alt="Pokeball image"
            width={32}
            height={32}
            className="col"
          />
          <p className="col mb-0">Pokemon App</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
