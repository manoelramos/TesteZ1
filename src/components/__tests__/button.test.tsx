import { fireEvent, render } from "@testing-library/react-native";

import Button from "../button";

describe("<Button />", () => {
  test("should render correctly with the provided text", () => {
    const { getByText } = render(<Button onPressItem={() => {}} text="Ok" />);

    const textLabel = getByText("Ok");

    expect(textLabel).toBeTruthy();
  });

  test("should call onPressItem when the button is tapped", () => {
    const onPressItemMock = jest.fn();
    const { getByText } = render(
      <Button onPressItem={onPressItemMock} text="Ok" />,
    );

    fireEvent.press(getByText("Ok"));

    expect(onPressItemMock).toHaveBeenCalledTimes(1);
  });
});
