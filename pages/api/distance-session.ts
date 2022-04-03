// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addDistanceSession(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  try {
    const session = await prisma.distanceSession.create({
      data: {
        distance: body.distance,
      },
    });
    return res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Error adding session' });
  }
}

async function getDistanceSessions(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sessions = await prisma.distanceSession.findMany({
      orderBy: { id: 'desc' },
    });
    return res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Error getting sessions' });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await addDistanceSession(req, res);
  } else if (req.method === 'GET') {
    return await getDistanceSessions(req, res);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
