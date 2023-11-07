/* * */

import delay from '@/services/delay';
import QUEUEDB from '@/services/QUEUEDB';

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

  // 2.
  // Connect to MongoDB

  try {
    await QUEUEDB.connect();
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'MongoDB connection error.' });
  }

  // 3.
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
