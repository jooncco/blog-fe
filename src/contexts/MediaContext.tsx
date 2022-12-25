import { createContext, FC, ReactNode, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

type MediaSize = "xs" | "sm" | "md" | "lg" | null;

const MediaContext = createContext<MediaSize>("lg");

interface Props {
  children: ReactNode;
}

const MediaContextProvider: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const [mediaSize] = useState<MediaSize>(
    xs ? "xs" : sm ? "sm" : md ? "md" : "lg"
  );

  return (
    <MediaContext.Provider value={mediaSize}>{children}</MediaContext.Provider>
  );
};

export { MediaContext, MediaContextProvider };
