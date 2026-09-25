import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MovieFilter from "./MovieFilter";

type TestMovie = {
  title: string;
  genre: string;
};

const movies: TestMovie[] = [
  { title: "Inception", genre: "Science-Fiction" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "Interstellar", genre: "Science-Fiction" },
];

describe("MovieFilter", () => {
  it("returns all movies when Tous is clicked", () => {
    const onFilter = vi.fn();

    render(<MovieFilter movies={movies} onFilter={onFilter} />);
    fireEvent.click(screen.getByRole("button", { name: "Tous" }));

    expect(onFilter).toHaveBeenCalledWith(movies);
  });

  it("returns only movies from the selected genre", () => {
    const onFilter = vi.fn();

    render(<MovieFilter movies={movies} onFilter={onFilter} />);
    fireEvent.click(
      screen.getByRole("button", { name: "Science-Fiction" }),
    );

    expect(onFilter).toHaveBeenCalledWith([
      movies[0],
      movies[2],
    ]);
  });
});
