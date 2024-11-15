import './myButton.css';

// Мы забираем переданные данные в круглых скобках
// Обычно мы используем деструктуризацию для того, чтобы достать значения пропсов по ключам и положить их в соответстующие переменные
function MyButton({text, func}) {
  return <button onClick={func} className='myButton'>{text}</button>;
}

export default MyButton;
