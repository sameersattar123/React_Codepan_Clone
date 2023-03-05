import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvider";

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const { html, css, js } = useContext(DataContext);
  const [src, setSrc] = useState("");
  const SourceCode = `
    <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>
            `;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(SourceCode);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);
  return (
    <Container>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
