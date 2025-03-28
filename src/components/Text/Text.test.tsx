import { render, screen } from "@testing-library/react";
import { Text, TextProps } from "./Text";

// Обёртка для рендера текста с дефолтными пропсами
const renderText = (props: Partial<TextProps> = {}) => {
  const defaultProps: TextProps = {
    children: "Test Text",
    variant: "body-md",
    ...props,
  };
  return render(<Text {...defaultProps} />);
};

describe("Text component", () => {
  test("renders with provided children", () => {
    renderText({ children: "Hello World" });
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("applies correct variant class", () => {
    const { container } = renderText({ variant: "h1", children: "Heading 1" });
    expect(container.firstChild).toHaveClass("h1");
  });

  test("renders with custom component", () => {
    const { container } = renderText({
      variant: "body-md",
      component: "span",
      children: "Span Text",
    });
    expect(container.firstChild?.nodeName).toBe("SPAN");
  });

  test("applies custom color style", () => {
    const { container } = renderText({
      color: "#ff0000",
      children: "Red Text",
    });
    expect(container.firstChild).toHaveStyle({ color: "#ff0000" });
  });

  test("applies text alignment class", () => {
    const { container } = renderText({
      align: "center",
      children: "Centered Text",
    });
    expect(container.firstChild).toHaveClass("align-center");
  });

  test("applies font weight class", () => {
    const { container } = renderText({
      weight: "bold",
      children: "Bold Text",
    });
    expect(container.firstChild).toHaveClass("weight-bold");
  });

  test("applies truncate class when truncate is true", () => {
    const { container } = renderText({
      truncate: true,
      children: "Truncated Text",
    });
    expect(container.firstChild).toHaveClass("truncate");
  });

  test("applies gutterBottom class when gutterBottom is true", () => {
    const { container } = renderText({
      gutterBottom: true,
      children: "Text with bottom margin",
    });
    expect(container.firstChild).toHaveClass("gutterBottom");
  });

  test("applies noWrap class when noWrap is true", () => {
    const { container } = renderText({
      noWrap: true,
      children: "Text without wrapping",
    });
    expect(container.firstChild).toHaveClass("noWrap");
  });

  describe("default component selection", () => {
    test("uses h1-h6 tags for heading variants", () => {
      const { container } = renderText({
        variant: "h2",
        children: "Heading 2",
      });
      expect(container.firstChild?.nodeName).toBe("H2");
    });

    test("uses h1 tag for display variants", () => {
      const { container } = renderText({
        variant: "display-xl",
        children: "Display XL",
      });
      expect(container.firstChild?.nodeName).toBe("H1");
    });

    test("uses span tag for caption variant", () => {
      const { container } = renderText({
        variant: "caption",
        children: "Caption Text",
      });
      expect(container.firstChild?.nodeName).toBe("SPAN");
    });

    test("uses span tag for overline variant", () => {
      const { container } = renderText({
        variant: "overline",
        children: "OVERLINE TEXT",
      });
      expect(container.firstChild?.nodeName).toBe("SPAN");
    });

    test("uses p tag for body variants", () => {
      const { container } = renderText({
        variant: "body-md",
        children: "Body Text",
      });
      expect(container.firstChild?.nodeName).toBe("P");
    });
  });

  test("matches snapshot", () => {
    const { container } = renderText({ children: "Snapshot Text" });
    expect(container.firstChild).toMatchSnapshot();
  });
});
