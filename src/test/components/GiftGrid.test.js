import React from "react";
import { shallow } from "enzyme";
import { GiftGrid } from "../../components/GiftGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el <GiftGrid/>", () => {
  const category = "One Punch";

  test("Debe de mostrarse correectamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GiftGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostar items cuando se cargan imagenes useFetchGifts", () => {
    const gifs = [
      {
        id: "ABC",
        url: "http://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "http://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GiftGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
