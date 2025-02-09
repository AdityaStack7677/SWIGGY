import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_RES_DATA from "../mocks/mockResListData.json";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_DATA);
    },
  });
});

it("Should Search Res List for pizza text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  const searchButton = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchButton);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);
  const filterButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(filterButton);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(14);
});
