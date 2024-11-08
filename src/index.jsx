import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //мы оборачиваем дочерние теги в родитель по просьбе react
   // если нам не нужен явный контейнер мы можем воспользоваться
   // пустым тегом - react фрагмент
   <>
      <App />
   </>
);
