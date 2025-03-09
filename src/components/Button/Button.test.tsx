import { render, screen, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";

// Обёртка для рендера кнопки с дефолтными пропсами
const renderButton = (props: Partial<ButtonProps> = {}) => {
  const defaultProps: ButtonProps = {
    label: "Test Button",
    size: "m",
    variant: "primary",
    ...props,
  };
  return render(<Button {...defaultProps} />);
};

describe("Button component", () => {
  test("renders with provided label", () => {
    renderButton({ label: "Submit" });
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const onClick = jest.fn();
    renderButton({ onClick });
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disabled prop is true", () => {
    renderButton({ disabled: true });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("is disabled when loading is true", () => {
    renderButton({ loading: true });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("displays loader and hides content when loading is true", () => {
    const { container } = renderButton({ label: "Submit", loading: true });
    const button = screen.getByRole("button");

    // Проверяем, что кнопка заблокирована
    expect(button).toBeDisabled();

    // Контейнер с контентом всегда рендерится, но при loading имеет стиль visibility: hidden
    const content = container.querySelector(`.${/content/.source}`);
    expect(content).toHaveStyle({ visibility: "hidden" });

    // Loader отображается (он имеет aria-label "Loading")
    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  describe("variants", () => {
    const variants: ButtonProps["variant"][] = [
      "primary",
      "outline",
      "text",
      "link",
    ];
    variants.forEach((variant) => {
      test(`renders ${variant} variant`, () => {
        renderButton({ variant, label: variant });
        // Так как label равен variant, проверяем его наличие
        expect(screen.getByText(variant)).toBeInTheDocument();
      });
    });
  });

  describe("sizes", () => {
    const sizes: ButtonProps["size"][] = ["xs", "s", "m", "l", "xl"];
    sizes.forEach((size) => {
      test(`renders ${size} size`, () => {
        renderButton({ size, label: size });
        // Проверяем, что кнопка рендерится с переданной меткой размера
        expect(screen.getByText(size)).toBeInTheDocument();
      });
    });
  });

  test("matches snapshot", () => {
    const { container } = renderButton({ label: "Snapshot Button" });
    expect(container.firstChild).toMatchSnapshot();
  });
});
