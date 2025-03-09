import { render, screen } from "@testing-library/react";
import { Loader, LoaderProps } from "./Loader";

describe("Loader component", () => {
  const renderLoader = (props: Partial<LoaderProps> = {}) => {
    return render(<Loader {...props} />);
  };

  test("renders with default props", () => {
    renderLoader();
    const loader = screen.getByLabelText("Loading");
    expect(loader).toBeInTheDocument();
    // Проверяем, что внутри рендерятся ровно 3 точки
    expect(loader.querySelectorAll("span")).toHaveLength(3);
  });

  test("applies custom color via inline style", () => {
    const testColor = "#ff4500";
    renderLoader({ color: testColor });
    const loader = screen.getByLabelText("Loading");
    expect(loader).toHaveStyle({ "--loader-color": testColor });
  });

  test("renders with different sizes", () => {
    const sizes: LoaderProps["size"][] = ["xs", "s", "m", "l", "xl"];
    sizes.forEach((size) => {
      const { container, unmount } = renderLoader({ size });
      const loader = container.querySelector('[aria-label="Loading"]');
      expect(loader).toBeInTheDocument();
      // Всегда должно быть 3 точки внутри
      expect(loader?.querySelectorAll("span")).toHaveLength(3);
      unmount();
    });
  });

  test("merges additional className", () => {
    const customClass = "custom-class";
    renderLoader({ className: customClass });
    const loader = screen.getByLabelText("Loading");
    expect(loader).toHaveClass(customClass);
  });
});
