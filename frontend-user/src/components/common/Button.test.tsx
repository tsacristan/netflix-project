import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Louer</Button>);

    expect(screen.getByRole("button", { name: "Louer" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Louer</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Louer" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="outline" size="sm">
        Info
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Info" });
    expect(button).toHaveClass("border-2", "px-4", "text-sm");
    expect(button).toHaveAttribute("type", "button");
  });
});
