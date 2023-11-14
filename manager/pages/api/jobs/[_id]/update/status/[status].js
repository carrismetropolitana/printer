/* * */

import delay from '@/services/delay';
import QUEUEDB from '@/services/QUEUEDB';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

/* * */

export default async function handler(req, res) {
  //
  await delay();

  // 1.
  // Refuse request if not GET

  if (req.method != 'GET') {
    await res.setHeader('Allow', ['GET']);
    return await res.status(405).json({ message: `Method ${req.method} Not Allowed.` });
  }

  // 1.
  // Check for correct Authentication and valid Permissions

  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) throw new Error('You must be logged in to access this feature.');
  } catch (err) {
    console.log(err);
    return await res.status(401).json({ message: err.message || 'Could not verify Authentication.' });
  }

  // 2.
  // Connect to MongoDB

  try {
    await QUEUEDB.connect();
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'MongoDB connection error.' });
  }

  // 3.
  // Validate request 'status' query

  if (req.query.status !== 'registered' && req.query.status !== 'paused') {
    return await res.status(400).json({ message: 'Unknown status.' });
  }

  // 4.
  // List all documents

  try {
    const result = await QUEUEDB.Job.updateOne({ _id: QUEUEDB.toObjectId(req.query._id) }, { $set: { status: req.query.status } });
    return await res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'Cannot delete Job.' });
  }

  //
}
