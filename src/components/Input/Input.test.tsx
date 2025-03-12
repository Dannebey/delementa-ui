import { fireEvent, render, screen } from "@testing-library/react";
import { Input, InputProps } from "./Input";
import { ButtonProps } from "@/components/Button/Button";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";

const renderInput = (props: Partial<InputProps> = {}) => {
  const defaultProps: InputProps = {
    placeholder: "Enter text",
    type: "text",
    value: "",
    onChange: jest.fn(),
    ...props,
  };
  return render(<Input {...defaultProps} />);
};

describe("Input component", () => {
  test("renders with provided label", () => {
    renderInput({ label: "Submit" });
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("renders with provided value", () => {
    renderInput({ value: "Test Value" });
    expect(screen.getByDisplayValue("Test Value")).toBeInTheDocument();
  });

  test("should update input value on change", async () => {
    const TestComponent = () => {
      const [value, setValue] = useState("start");
      return (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={"text"}
        />
      );
    };

    render(<TestComponent />);
    const input = screen.getByRole("textbox");

    await userEvent.type(input, " change");

    expect(input).toHaveValue("start change");
  });

  test("hides number input spin buttons when hiddenCounter is true", () => {
    renderInput({ type: "number", hiddenCounter: true });
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveClass("hiddenCounter");
  });

  test("shows number input spin buttons when hiddenCounter is false", () => {
    renderInput({ type: "number", hiddenCounter: false });
    const input = screen.getByRole("spinbutton");
    expect(input).not.toHaveClass("hiddenCounter");
  });

  test("is disabled when disabled prop is true", () => {
    renderInput({ disabled: true });
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  test("toggles password visibility", () => {
    renderInput({ type: "password", placeholder: "password" });
    const input = screen.getByPlaceholderText("password");
    expect(input).toHaveAttribute("type", "password");
    const toggleButton = screen.getByLabelText("Показать пароль");
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  test("shows error message when error prop is true", () => {
    renderInput({ error: true, errorMessage: "error message" });
    expect(screen.getByText("error message")).toBeInTheDocument();
  });

  test("does not shows error message when error prop is true", () => {
    renderInput({ error: false, errorMessage: "error message" });
    expect(screen.queryByText("error message")).not.toBeInTheDocument();
  });

  describe("sizes", () => {
    const sizes: ButtonProps["size"][] = ["xs", "s", "m", "l", "xl"];
    sizes.forEach((size) => {
      test(`renders ${size} size`, () => {
        renderInput({ size, label: size });
        // Проверяем, что инпут рендерится с переданной меткой размера
        expect(screen.getByText(size)).toBeInTheDocument();
      });
    });
  });

  describe("types", () => {
    const types: InputProps["type"][] = ["text", "password", "number"];
    types.forEach((type) => {
      test(`renders ${type} type`, () => {
        renderInput({ type, placeholder: type });
        // Проверяем, что инпут рендерится с переданной меткой типа
        expect(screen.getByPlaceholderText(type)).toBeInTheDocument();
      });
    });
  });
});
