import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App Components', () => {

  let displayField;
  let buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine, buttonZero, buttonDecimal;
  let buttonPlus, buttonMinus, buttonTimes, buttonDivide, buttonExponent, buttonCalculate, buttonClear;

  beforeEach(() => {
  render(<App />);
  displayField = screen.getByRole('textbox');
  buttonOne = screen.getByRole('button', {name:/1/i});
  buttonTwo = screen.getByRole('button', {name:/2/i});
  buttonThree = screen.getByRole('button', {name:/3/i});
  buttonFour = screen.getByRole('button', {name:/4/i});
  buttonFive = screen.getByRole('button', {name:/5/i});
  buttonSix = screen.getByRole('button', {name:/6/i});
  buttonSeven = screen.getByRole('button', {name:/7/i});
  buttonEight = screen.getByRole('button', {name:/8/i});
  buttonNine = screen.getByRole('button', {name:/9/i});
  buttonZero = screen.getByRole('button', {name:/0/i});
  buttonDecimal = screen.getByRole('button', {name:/\./i});
  buttonPlus = screen.getByRole('button', {name:/\+/});
  buttonMinus = screen.getByRole('button', {name:/-/});
  buttonTimes = screen.getByRole('button', {name:/\*/});
  buttonDivide = screen.getByRole('button', {name:/\//});
  buttonExponent = screen.getByRole('button', {name:/\^/});
  buttonCalculate = screen.getByRole('button', {name:/Calculate/});
  buttonClear = screen.getByRole('button', {name:/Clear/});
  });

  test('Initial display value is 0', () => {
    expect(displayField).toHaveValue('0');
  });

  test('All expected buttons exist', () => {
    expect(buttonOne).toBeInTheDocument();
    expect(buttonTwo).toBeInTheDocument();
    expect(buttonThree).toBeInTheDocument();
    expect(buttonFour).toBeInTheDocument();
    expect(buttonFive).toBeInTheDocument();
    expect(buttonSix).toBeInTheDocument();
    expect(buttonSeven).toBeInTheDocument();
    expect(buttonEight).toBeInTheDocument();
    expect(buttonNine).toBeInTheDocument();
    expect(buttonZero).toBeInTheDocument();
    expect(buttonDecimal).toBeInTheDocument();
    expect(buttonPlus).toBeInTheDocument();
    expect(buttonMinus).toBeInTheDocument();
    expect(buttonTimes).toBeInTheDocument();
    expect(buttonDivide).toBeInTheDocument();
    expect(buttonExponent).toBeInTheDocument();
    expect(buttonCalculate).toBeInTheDocument();
    expect(buttonClear).toBeInTheDocument();
  });

  test('Display a single-digit number', () => {
    fireEvent.click(buttonNine);
    expect(displayField).toHaveValue('9');
  });

  test('Display a multi-digit number', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonSix);
    fireEvent.click(buttonFive);
    fireEvent.click(buttonFour);
    fireEvent.click(buttonThree);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonOne);
    fireEvent.click(buttonZero);
    expect(displayField).toHaveValue('9876543210');
  });

  test('Display a decimal number starting with a non-zero digit', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonDecimal);
    fireEvent.click(buttonSeven);
    expect(displayField).toHaveValue('98.7');
  });

  test('Display a decimal number starting with zero', () => {
    fireEvent.click(buttonDecimal);
    fireEvent.click(buttonNine);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonSeven);
    expect(displayField).toHaveValue('0.987');
  });

  test('Ensure that a number equals itself', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('9');
  });

  test('Ensure that all operations produce accurate intermediate/final results', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    expect(displayField).toHaveValue('9');
    fireEvent.click(buttonEight);
    fireEvent.click(buttonMinus);
    expect(displayField).toHaveValue('17');
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonTimes);
    expect(displayField).toHaveValue('10');
    fireEvent.click(buttonSix);
    fireEvent.click(buttonDivide);
    expect(displayField).toHaveValue('60');
    fireEvent.click(buttonEight);
    fireEvent.click(buttonExponent);
    expect(displayField).toHaveValue('7.5');
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('56.25');
  });

  test('Display a negative number', () => {
    fireEvent.click(buttonOne);
    fireEvent.click(buttonMinus);
    fireEvent.click(buttonThree);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('-2');
  });

  test('Clicking a digit after final calculation resets the display and the result', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('17');
    fireEvent.click(buttonSeven);
    expect(displayField).toHaveValue('7');
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSix);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('13');
  });

  test('Clicking a decimal place after final calculation resets the display and the result', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('17');
    fireEvent.click(buttonDecimal);
    expect(displayField).toHaveValue('0.');
    fireEvent.click(buttonSix);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonOne);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('1.6');
  });

  test('Clicking an operation after final calculation continues the calculation', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('17');
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSix);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('30');
  });

  test('Clicking clear after final calculation resets the display and the result', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('17');
    fireEvent.click(buttonClear);
    expect(displayField).toHaveValue('0');
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSix);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('13');
  });

  test('Clicking calculate again after final calculation resets the display and the result', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('17');
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('0');
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSix);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('13');
  });

  test('Clicking clear once resets the display but not the equation', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonClear);
    expect(displayField).toHaveValue('0');
    fireEvent.click(buttonSix);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('23');
  });

  test('Clicking clear twice non-consecutively resets the display each time but never the equation', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonClear);
    expect(displayField).toHaveValue('0');
    fireEvent.click(buttonSix);
    fireEvent.click(buttonClear);
    expect(displayField).toHaveValue('0');
    fireEvent.click(buttonFive);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('22');
  });

  test('Clicking clear twice consecutively resets the display and the equation', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonSix);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonFive);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('11');
  });

  test('Arithmetic error displays ERROR', () => {
    fireEvent.click(buttonNine);
    fireEvent.click(buttonExponent);
    // Attempting to raise to the power of a decimal number will result in an error
    fireEvent.click(buttonDecimal);
    fireEvent.click(buttonSeven);
    fireEvent.click(buttonCalculate);
    expect(displayField).toHaveValue('ERROR');
  });

});