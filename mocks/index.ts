import { rest  } from "msw"

export const handlers = [
  rest.get(`/hello`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "hello" }))
  })
]
