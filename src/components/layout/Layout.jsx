
// TODO sækja Sass

export function Layout({ children }) {
  return (
    <div>
      <div className="header">
        <h1>RÚV Fréttir</h1>
      </div>
      <main>{children}</main>
      <div className="footer">
        <p><a href="https://wwW.ruv.is/">Fréttir frá RÚV</a></p>
      </div>
    </div>
  );
}
