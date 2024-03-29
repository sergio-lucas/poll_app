/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import renderer from "react-test-renderer";

import Logo from "./index";

describe("Snapshot::<Logo /> component", () => {
  it("should render the contents of the component", () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
