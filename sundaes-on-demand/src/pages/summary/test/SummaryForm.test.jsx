import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummeryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

it('Intial conditions', () => {
  render(<SummeryForm/>);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
expect(checkbox).not.toBeChecked();

const confirmButton = screen.getByRole('button', { name: /confirm order/i });
expect(confirmButton).toBeDisabled();
});

it('Checkbox disabled button on first click and enableson second click', () => {
  render(<SummeryForm/>);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
  
  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

it('popover responds to hover', async () => {
  render(<SummeryForm/>);
  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => 
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});