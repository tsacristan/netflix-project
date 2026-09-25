import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SearchBar from "./SearchBar";

type TestMovie = {
  id: number;
  title: string;
  description: string;
  poster: string;
  genre: string;
  year: number;
};

const movies: TestMovie[] = [
  {
    id: 1,
    title: "Inception",
    description: "A thief enters dreams.",
    poster: "/inception.jpg",
    genre: "Science-Fiction",
    year: 2010,
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman protects Gotham.",
    poster: "/dark-knight.jpg",
    genre: "Action",
    year: 2008,
  },
];

describe("SearchBar", () => {
  it("returns all movies before a search starts", () => {
    const onSearch = vi.fn();

    render(<SearchBar movies={movies} onSearch={onSearch} />);

    expect(onSearch).toHaveBeenLastCalledWith(movies);
  });

  it("shows matching suggestions after two characters", () => {
    const onSearch = vi.fn();

    render(<SearchBar movies={movies} onSearch={onSearch} />);
    fireEvent.change(screen.getByPlaceholderText("Rechercher un film..."), {
      target: { value: "dark" },
    });

    expect(screen.getByRole("button", { name: /The Dark Knight/ })).toBeInTheDocument();
    expect(screen.queryByText("Inception")).not.toBeInTheDocument();
    expect(onSearch).toHaveBeenLastCalledWith([movies[1]]);
  });

  it("selects a suggestion and searches only for that movie", () => {
    const onSearch = vi.fn();
    const onSelectMovie = vi.fn();

    render(
      <SearchBar
        movies={movies}
        onSearch={onSearch}
        onSelectMovie={onSelectMovie}
      />,
    );
    fireEvent.change(screen.getByPlaceholderText("Rechercher un film..."), {
      target: { value: "in" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Inception/ }));

    expect(onSelectMovie).toHaveBeenCalledWith(movies[0]);
    expect(onSearch).toHaveBeenLastCalledWith([movies[0]]);
    expect(screen.getByDisplayValue("Inception")).toBeInTheDocument();
  });
});
