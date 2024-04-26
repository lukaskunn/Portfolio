// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {list} from "@vercel/blob"

//TODO: Fix any type
export default async function handler(req: any, res: any) {
  //TODO: REMOVE THIS TOKENS
  await list({prefix: "LP_GIF", token: "vercel_blob_rw_QSK9cTpy0WJEz7Yo_5GtrtpH85Tfj659RhNTa2AbVzxkIts"}).then((response: any) => {
    const {blobs} = response
    // const images = response.blobs.filter(image => image.size > 0)
    res.status(200).json({ blobs })
  })

  res.status(200).json({message: "daora"})
}
