import React from "react";
import { TextEncoder } from "node:util";
global.TextEncoder = TextEncoder;

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { afterAll, afterEach, beforeAll, describe } from "@jest/globals";
import { Home } from ".";

const postHandlers = [
  http.get("*jsonplaceholder.typicode.com*", () => {
    console.log("mocked is Active!");
    return HttpResponse.json([
      {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body1",
        url: "img1.jpg",
      },
      {
        userId: 1,
        id: 2,
        title: "title2",
        body: "body2",
        url: "img2.jpg",
      },
      {
        userId: 1,
        id: 3,
        title: "title3",
        body: "body3",
        url: "img3.jpg",
      },
    ]);
  }),
];

const server = setupServer(...postHandlers);

describe("<Home />", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.restoreHandlers());

  afterAll(() => {
    server.close();
  });
});
