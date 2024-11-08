// импорт css из отдельного файла
import './App.css';

// функция App является React компонентом
// в return такая функция возвращает шаблон верстки с данными
// React компоненты называются с большой буквы (функции)
function App() {
   return (
      //такой синтаксис: верстка с логикой JS называется JSX
      <div className="App">
         <h1>Hello, React!</h1>
      </div>
   );
}

// чтобы использовать компонент в другом файле мы используем экспорт
export default App;
