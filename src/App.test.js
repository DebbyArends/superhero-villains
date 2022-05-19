import { render, screen } from '@testing-library/react';
import App from './App';
import {useState} from "react";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const [isGreaterThan900px, setIsGreaterThan900px] = React.useState(false);
const [currentCharacterMarvel, setCurrentCharacterMarvel] = useState(7)
const [indexMarvel, setIndexMarvel] = useState(0)


React.useEffect(() => {
  function handleResize() {
    if (window.innerWidth > 992) {
      setCurrentCharacterMarvel(7);
    }
    else if (window.innerWidth > 768){
      setCurrentCharacterMarvel(5);
    }
    else {
      setCurrentCharacterMarvel(2);
    }
  }

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

return (
    <div className="App">
      <h1>is greater than 900 px: {isGreaterThan900px ? "true" : "false"}</h1>
    </div>
);