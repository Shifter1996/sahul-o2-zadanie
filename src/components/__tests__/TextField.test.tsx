import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { TextField } from "../TextField";

describe("TextField", () => {

  test('renders without crashing', () => {
    render(<TextField />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders with all props', () => {
    render(<TextField label="Test Label" description="Test Description" isRequired isInvalid errorMessage="Test Error" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  test('displays the label text correctly', () => {
    render(<TextField label="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  test('displays the description text correctly', () => {
    render(<TextField description="Enter your username." />);
    expect(screen.getByText('Enter your username.')).toBeInTheDocument();
  });

  test('does not render label if not provided', () => {
    render(<TextField />);
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  test('does not render description if not provided', () => {
    render(<TextField />);
    expect(screen.queryByText('Description')).not.toBeInTheDocument();
  });

  test('renders the input component correctly', () => {
    render(<TextField />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('passes props to the input correctly', () => {
    render(<TextField placeholder="Type here..." />);
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });

  test('displays the error message correctly', () => {
    render(<TextField isInvalid errorMessage="This field is required." />);
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });

  test('hides FieldError if errorMessage is not provided', () => {
    render(<TextField />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

})

