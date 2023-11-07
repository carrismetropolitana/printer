/* * */

import delay from '@/services/delay';
import QUEUEDB from '@/services/QUEUEDB';

/* * */

export default async function handler(req, res) {
  //
  await delay();

  // 0.
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
    const newDoc = await QUEUEDB.Job.insertOne({
      owner_name: 'Teste',
      owner_email: 'test@email.com',
      owner_lang: 'pt',
      gdpr_consent: true,
      print_host: 'escolas.carrismetropolitana.pt',
      print_path: '803239/render',
      status: 'registered',
    });
    return await res.status(200).send(newDoc);
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'Cannot list Jobs.' });
  }

  //
}
