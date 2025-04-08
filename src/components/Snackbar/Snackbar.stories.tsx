import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Snackbar } from "./Snackbar";
import { Button } from "../Button/Button";
import { useState } from "react";
import { SnackbarCords } from "@/components/Snackbar/Snackbar.types";

const meta: Meta<typeof Snackbar> = {
  title: "UI/Snackbar",
  component: Snackbar,
  argTypes: {
    message: { control: "text" },
    action: { control: "object" },
    open: { control: "boolean" },
    className: { control: "text" },
    duration: { control: "number" },
    onClose: { action: "clicked" },
    type: {
      control: "select",
      options: ["info", "success", "error", "warning"],
    },
    loading: { control: "boolean" },
    cords: { control: "object" },
  },
};

export default meta;

export const Info: StoryObj = {
  args: {
    message: "Info Snackbar",
    open: true,
    type: "info",
    cords: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const Success: StoryObj = {
  args: {
    message: "Success Snackbar",
    open: true,
    type: "success",
    cords: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const Error: StoryObj = {
  args: {
    message: "Error Snackbar",
    open: true,
    type: "error",
    cords: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const Warning: StoryObj = {
  args: {
    message: "Warning Snackbar",
    open: true,
    type: "warning",
    cords: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const Action: StoryObj = {
  args: {
    message: "Action Snackbar",
    open: true,
    type: "info",
    action: (
      <Button
        label={"action"}
        size={"s"}
        variant={"primary"}
        onClick={() => alert("Action")}
      />
    ),
    cords: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const WithTitle: StoryObj = {
  args: {
    title: "Title",
    message: "Snackbar message",
    open: true,
    type: "info",
    cords: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const WithLoading: StoryObj = {
  args: {
    message: "Loading Snackbar",
    open: true,
    type: "info",
    loading: true,
    duration: 2000,
    cords: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export const Position: StoryFn = () => {
  const buttons: SnackbarCords[] = [
    { vertical: "bottom", horizontal: "right" },
    { vertical: "bottom", horizontal: "left" },
    { vertical: "top", horizontal: "right" },
    { vertical: "top", horizontal: "left" },
  ];

  const [open, setOpen] = useState(false);
  const [position, setPositin] = useState<SnackbarCords>({
    vertical: "bottom",
    horizontal: "right",
  });

  const handleOpen = (pos: SnackbarCords) => {
    setOpen(false);
    setPositin(pos);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {buttons.map((val) => (
          <Button
            label={`${val.horizontal}-${val.vertical}`}
            size={"s"}
            variant={"primary"}
            onClick={() => handleOpen(val)}
          />
        ))}
      </div>
      <Snackbar
        message="message"
        open={open}
        onClose={handleClose}
        cords={position}
      />
    </>
  );
};

export const CloseDuration: StoryFn = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      message="message"
      open={open}
      duration={2000}
      onClose={handleClose}
      cords={{ vertical: "top", horizontal: "left" }}
    />
  );
};
