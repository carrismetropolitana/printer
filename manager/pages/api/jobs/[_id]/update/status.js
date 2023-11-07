/* * */

import delay from '@/services/delay';
import QUEUEDB from '@/services/QUEUEDB';

/* * */

export default async function handler(req, res) {
  //
  await delay();

  // 0.
  // Refuse request if not POST

  if (req.method != 'POST') {
    await res.setHeader('Allow', ['POST']);
    return await res.status(405).json({ message: `Method ${req.method} Not Allowed.` });
  }

  // 1.
  // Parse req.body

  try {
    req.body = JSON.parse(req.body);
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'Cannot parse req.body.' });
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
    const result = await QUEUEDB.Job.updateOne({ _id: QUEUEDB.toObjectId(req.query._id) }, { $set: { status: req.body.status } });
    return await res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'Cannot delete Job.' });
  }

  //
}
