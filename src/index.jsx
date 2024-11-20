import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homework04 from './homeworks/homework04/Homework04';
/* import Lesson01 from './lesson01/Lesson01'; */
//import Lesson02 from './lesson02/Lesson02';
/* import Lesson03 from './lesson03/Lesson03'; */
/* import Homework03 from './components/homework_03/Homework03'; */
/* import Lesson04 from './lessons/lesson04/Lesson04'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //мы оборачиваем дочерние теги в родитель по просьбе react
  // если нам не нужен явный контейнер мы можем воспользоваться
  // пустым тегом - react фрагмент
  <>
    {/* Вызов компонента происходит через обращение к нему в теге */}
    {/* <Lesson01 /> */}
    {/* <Lesson02 /> */}
    {/* <Lesson03 /> */}
    {/* <Homework03/> */}
    {/* <Lesson04/> */}
    <Homework04/>
  </>
);

