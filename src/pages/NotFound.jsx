import React from 'react';

import s from './NotFound.module.scss';

export function NotFound() {
  return (
    <div className={s.notfound}>
      <h1 className={s.notfound__title}>404: Síða fannst ekki</h1>
      <h2 className={s.notfound__text}>Ónei.. hér er ekkert að sjá</h2>
      <button className={s.notfound__button}><a className={s.notfound__link} href="/">Til baka á forsíðu</a></button>
    </div>
  );
}
