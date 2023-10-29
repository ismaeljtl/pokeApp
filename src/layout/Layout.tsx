import React from "react";
import Header from "./Header";
import { PokemonContextProvider } from "@/state/pokemon/pokemonContextProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main-container">
      <Header />
      <PokemonContextProvider>
        <div className="container">{children}</div>
      </PokemonContextProvider>
    </main>
  );
};

export default Layout;
