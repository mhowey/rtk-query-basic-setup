import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
describe("App", () => {
  test("should render successfully", () => {
    const { baseElement } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
