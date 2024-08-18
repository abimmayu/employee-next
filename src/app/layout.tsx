const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </body>
  </html>
);

export default RootLayout;
