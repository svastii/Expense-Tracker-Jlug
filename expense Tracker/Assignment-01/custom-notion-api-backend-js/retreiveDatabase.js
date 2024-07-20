import express from "express";
import fetch from "node-fetch";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const blockID = process.env.Block_ID;
console.log(NOTION_API_KEY,blockID)
const router = express.Router();
const notion = new Client({ auth: NOTION_API_KEY });
async function insertPageContent(item, price, date) {
  const response = await notion.blocks.children.append({
    block_id: blockID,
    children: [
      {
        type: "table_row",
        table_row: {
          cells: [
            [
              {
                type: "text",
                text: {
                  content: item,
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "column 1 content",
                href: null,
              },
            ],
            [
              {
                type: "text",
                text: {
                  content: price,
                  link: null,
                },
              },
            ],
            [
              {
                type: "mention",
                mention: {
                  type: "date",
                  date: {
                    start: date,
                    end: null,
                  },
                },
              },
            ],
          ],
        },
      },
    ],
  });
}

async function getBlockContent() {
  const blockId = process.env.Block_ID;
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });
  return response;
}

router.post("/insert-data", async (req, res) => {
  const { item, price, date } = req.body;
  await insertPageContent(item, price, date);
  res.send(
    `Added successful entry\n${item} of rupees ${price} is added on ${date}`
  );
});

router.get("/get-data", async (req, res) => {
  const response = await getBlockContent();
  res.send(response);
});
export default router;
