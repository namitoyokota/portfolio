import type { NextApiRequest, NextApiResponse } from 'next';
import Unsplash, { toJson } from 'unsplash-js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const unsplash = new Unsplash({
    accessKey: process.env.UNSPLASH_ACCESS_TOKEN || '',
  });

  const userStats = await unsplash.users.statistics('namitoyokota');
  const { downloads, views } = await toJson(userStats);

  // TODO: unsplash.users.photos

  return res.status(200).json({
    downloads: downloads.total,
    views: views.total,
  });
}
