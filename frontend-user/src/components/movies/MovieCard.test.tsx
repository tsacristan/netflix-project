import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MovieCard from "./MovieCard";

const movie = {
  id: 1,
  title: "Inception",
  description: "A thief enters dreams.",
  poster: "/inception.jpg",
  genre: "Science-Fiction",
  year: 2010,
  rating: 8.8,
  duration: 148,
  price: 3.99,
  likes: 10,
};

describe("MovieCard", () => {
  it("displays the movie information", () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByRole("heading", { name: "Inception" })).toBeInTheDocument();
    expect(screen.getByAltText("Inception")).toHaveAttribute("src", "/inception.jpg");
    expect(screen.getByText("148min")).toBeInTheDocument();
  });

  it("toggles the like on successive clicks", () => {
    render(<MovieCard movie={movie} />);

    fireEvent.click(screen.getByRole("button", { name: /10 likes/ }));
    expect(screen.getByRole("button", { name: /11 likes/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /11 likes/ }));
    expect(screen.getByRole("button", { name: /10 likes/ })).toBeInTheDocument();
  });

  it("calls onAddToCart with the movie when renting", () => {
    const onAddToCart = vi.fn();

    render(<MovieCard movie={movie} onAddToCart={onAddToCart} />);
    fireEvent.click(screen.getByRole("button", { name: /Louer/ }));

    expect(onAddToCart).toHaveBeenCalledWith(movie);
  });
});
