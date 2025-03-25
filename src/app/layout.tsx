import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <hr />
      <div>{children}</div>
      <hr />
    </body>
  );
}
