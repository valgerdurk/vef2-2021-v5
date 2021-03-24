
// TODO sækja Sass
// TODO link á rúv - ATH á þessi texti að vera í þessari skrá - hvað gerir þá index

import { NewsList } from "../news-list/NewsList";

export function Layout({ /* todo senda inn efni */ }) {
  // TODO setja upp layout fyrir vef
return (
  <div>
    <div className="header">
      <h1>RÚV Fréttir</h1>
    </div>
    <NewsList></NewsList>
    <div className="footer">
      <p>Fréttir frá RÚV</p>
    </div>
  </div>
);
}
