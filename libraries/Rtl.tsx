"use client";
import { ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { theme } from "@/theme/theme";
import { prefixer } from "stylis";

const Rtl = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default Rtl;
