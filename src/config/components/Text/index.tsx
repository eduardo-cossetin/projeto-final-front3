import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";

interface TextProps {
  variant:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | string;
  component?: string;
  sx?: SxProps<Theme> | undefined;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant, component, sx, children }) => {
  return (
    <Typography variant={variant} component={component} sx={sx}>
      {children}
    </Typography>
  );
};

export default Text;
