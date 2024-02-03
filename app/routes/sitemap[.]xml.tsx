import { client } from "~/sanity/client";
import { slugsQuery } from "~/sanity/queries";

export const getSlugs = async () => {
    const slugList = await client.fetch(slugsQuery);
    
    return slugList;
};

export const loader: LoaderFunction = async ({ request }) => {
    const urls = await getSlugs();
};
