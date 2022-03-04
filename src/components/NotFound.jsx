import React, { useContext } from 'react';
import {
  Link,
} from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <main className="error-page">
      <h1 className="error-page__number">404</h1>
      <h2 className="error-page__text">Страница не найдена</h2>
      <Link className="error-page__link" to="/movies">Назад</Link>
    </main>
    </>
  );
}
