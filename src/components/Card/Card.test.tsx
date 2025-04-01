import { Card } from "./Card";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Card Component", () => {
  // Тест рендеринга основного компонента
  test("renders Card component", () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  // Тест различных вариантов карточки
  test("renders with different variants", () => {
    const { rerender } = render(<Card variant="elevated">Card Content</Card>);
    expect(screen.getByText("Card Content").parentElement).toHaveClass("variant-elevated");

    rerender(<Card variant="outlined">Card Content</Card>);
    expect(screen.getByText("Card Content").parentElement).toHaveClass("variant-outlined");

    rerender(<Card variant="flat">Card Content</Card>);
    expect(screen.getByText("Card Content").parentElement).toHaveClass("variant-flat");
  });

  // Тест интерактивности
  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Clickable Card</Card>);

    fireEvent.click(screen.getByText("Clickable Card"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Тест подкомпонента CardHeader
  test("renders CardHeader with title and subtitle", () => {
    render(
      <Card>
        <Card.Header title="Card Title" subtitle="Card Subtitle" />
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Subtitle")).toBeInTheDocument();
  });

  // Тест подкомпонента CardMedia
  test("renders CardMedia with image", () => {
    render(
      <Card>
        <Card.Media image="test-image.jpg" alt="Test Image" />
      </Card>
    );

    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  // Тест подкомпонента CardContent
  test("renders CardContent with content", () => {
    render(
      <Card>
        <Card.Content>Content Text</Card.Content>
      </Card>
    );

    expect(screen.getByText("Content Text")).toBeInTheDocument();
  });

  // Тест подкомпонента CardActions
  test("renders CardActions with buttons", () => {
    render(
      <Card>
        <Card.Actions>
          <button>Action 1</button>
          <button>Action 2</button>
        </Card.Actions>
      </Card>
    );

    expect(screen.getByText("Action 1")).toBeInTheDocument();
    expect(screen.getByText("Action 2")).toBeInTheDocument();
  });

  // Тест подкомпонента CardFooter
  test("renders CardFooter with content", () => {
    render(
      <Card>
        <Card.Footer>Footer Content</Card.Footer>
      </Card>
    );

    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });

  // Тест доступности
  test("has correct accessibility attributes when clickable", () => {
    render(<Card onClick={() => {}}>Accessible Card</Card>);

    const card = screen.getByText("Accessible Card").parentElement;
    expect(card).toHaveAttribute("role", "button");
    expect(card).toHaveAttribute("tabIndex", "0");
  });
});
