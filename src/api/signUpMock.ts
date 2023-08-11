import { sleep } from "../utils";

export const signUpMock = async () => {
  await sleep(2000);

  return new Response("OK", { status: 200 });
};
