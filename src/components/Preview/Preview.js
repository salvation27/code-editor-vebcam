import React, { useContext,useMemo } from "react";
import styles from "./Preview.module.css";

import { EditorContext } from "../../context/context";

const Preview = () => {
  const { html, css, js } = useContext(EditorContext);

  const document = useMemo (() => {
     if(!html && !css && !js) return
    return `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
     <style>
     ${css}
     </style>
  </head>
  <body>
   ${html}
    <script>
    ${js}
    </script>
  </body>
</html>
        `;
  },[html,css,js])

  return (
    <div className={styles.content}>
      {document ? (
        <iframe
          title="preview"
          className={styles.preview}
          srcDoc={document}
        ></iframe>
      ) : (
        <div className={styles.loading}>Тут отображается Ваш код</div>
      )}
    </div>
  );};

export default Preview;
