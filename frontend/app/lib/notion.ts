"use server";

import { BlockObjectResponse, Client } from "@notionhq/client";
import { NotionRenderer } from "@notion-render/client";

import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getPageBlocks = async () => {
  const pageId = process.env.NOTION_PAGE_ID as string;

  const { results } = await notion.blocks.children.list({ block_id: pageId });

  const renderer = new NotionRenderer({ client: notion });
  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  return await renderer.render(...(results as BlockObjectResponse[]));
};
