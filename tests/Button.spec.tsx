import { expect, test } from './baseFixtures';
import { Button } from '../src/components/button/Button';

const btnLabel = 'Click me';

test('event should work', async ({ mount }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Button
      label={btnLabel}
      onClick={() => {
        clicked = true;
      }}
    />,
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText(btnLabel);

  // Perform locator click. This will trigger the event.
  await component.click();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});

test('takes the screenshot at default state', async ({ mount, page }) => {
  await mount(<Button label={btnLabel} />);
  await expect(page).toHaveScreenshot();
});
