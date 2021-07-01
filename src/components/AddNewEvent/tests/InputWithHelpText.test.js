import { render, screen } from '@testing-library/react';
import { InputWithHelpText } from '../InputWithHelpText';
import userEvent from '@testing-library/user-event';

test('show helptext when value is empty', () => {
    render(<InputWithHelpText helpText="test help text" />);
    const linkElement = screen.getByText(/test help text/i);
    expect(linkElement).toBeInTheDocument();
});

test('show helptext when value is empty', () => {
    render(<InputWithHelpText helpText="test help text" value="test val" />);
    const linkElement = screen.queryByText(/test help text/i);
    expect(linkElement).not.toBeInTheDocument();
});

test('show title', () => {
    render(<InputWithHelpText propName="propname for title" />);
    const linkElement = screen.getByText(/propname for title/i);
    expect(linkElement).toBeInTheDocument();
});

test('show input', () => {
    render(<InputWithHelpText />);
    const linkElement = screen.getByRole("textbox")
    expect(linkElement).toBeInTheDocument();
});

test('show input with passed value', () => {
    render(<InputWithHelpText value="test value" />);
    const linkElementByDisplay = screen.getByRole("textbox");
    expect(linkElementByDisplay).toHaveValue("test value");
});

test('show patternErrorMessage when value does not match with pattern', () => {
    render(<InputWithHelpText pattern="^[a-zA-Z1-9]*$"
        patternErrorMessage="error to show"
        value="th!!!s text contains special charachters"
    />);
    const linkElementByDisplay = screen.getByText("error to show");
    expect(linkElementByDisplay).toBeInTheDocument();
});

test('input should required when pass required true', () => {
    render(<InputWithHelpText required={true} />);
    const linkElementByDisplay = screen.getByRole("textbox");
    const starForRequired = screen.getByText("*");
    expect(starForRequired).toBeInTheDocument();
    expect(linkElementByDisplay).toBeRequired();
});

test('input should not required when pass required false', () => {
    render(<InputWithHelpText required={false} />);
    const linkElementByDisplay = screen.getByRole("textbox");
    expect(linkElementByDisplay).not.toBeRequired();
    const starForRequired = screen.queryByText("*");
    expect(starForRequired).not.toBeInTheDocument();
});

test('input should call onChange event for all text changes', () => {
    let obj = { val: "" };
    render(<InputWithHelpText
        propName="val"
        onChange={(propName, newVal) => obj[propName] = newVal}
    />);
    const linkElementByDisplay = screen.getByRole("textbox");
    userEvent.type(linkElementByDisplay, "new text");
    expect(obj.val).toBe("new text");
});