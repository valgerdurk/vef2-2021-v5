import s from './Layout.module.scss';

export function Layout({ children }) {
  return (
    <div className={s.layout}>
      <div className={s.layout__header}>
        <h1>RÚV Fréttir</h1>
      </div>
      <main className={s.layout__main}>{children}</main>
      <div className={s.layout__footer}>
        <p><a className={s.layout__link} href="https://wwW.ruv.is/">Fréttir frá RÚV</a></p>
      </div>
    </div>
  );
}
