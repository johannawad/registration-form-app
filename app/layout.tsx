import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body>
            <section className={styles.container}>
              <main>{children}</main>
            </section>
          </body>
        </html>
      </ThemeProvider>
    </StoreProvider>
  );
}
