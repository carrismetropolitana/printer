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
    const newUser = await QUEUEDB.User.insertOne({ name: 'Joao', email: 'joao.vasconcelos@tmlmobilidade.pt' });
    return await res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'Cannot list Users.' });
  }

  //
}
