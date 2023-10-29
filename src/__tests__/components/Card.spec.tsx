import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../../components/card/Card";
import { pokemon } from "../../__mocks__/pokemon";

describe("Card Component", () => {
  beforeEach(() => {
    render(<Card pokemon={pokemon} isFavourite={pokemon.isFavourite} />);
  });

  it("renders the heading of the card", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("ditto");
  });

  it("renders the image of the card", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
