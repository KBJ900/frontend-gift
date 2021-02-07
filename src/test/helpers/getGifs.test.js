import { getGifts } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifts("One punch");
    expect(gifs.length).toBe(10);
  });
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifts("");
    expect(gifs.length).toBe(0);
  });
});
