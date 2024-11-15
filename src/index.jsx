import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import Lesson01 from './lesson01/Lesson01'; */
//import Lesson02 from './lesson02/Lesson02';
import Lesson03 from './lesson03/Lesson03';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //мы оборачиваем дочерние теги в родитель по просьбе react
  // если нам не нужен явный контейнер мы можем воспользоваться
  // пустым тегом - react фрагмент
  <>
    {/* Вызов компонента происходит через обращение к нему в теге */}
    {/* <Lesson01 /> */}
    {/* <Lesson02 /> */}
    <Lesson03 />
  </>
);

