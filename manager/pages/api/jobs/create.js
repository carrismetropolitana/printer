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
    const newDoc = await QUEUEDB.Job.insertOne({
      owner_name: 'Teste',
      owner_email: 'test@email.com',
      owner_lang: 'pt',
      gdpr_consent: true,
      render_host: 'escolas.carrismetropolitana.pt',
      render_path: '803239/render',
      status: 'registered',
    });
    return await res.status(200).send(newDoc);
  } catch (err) {
    console.log(err);
    return await res.status(500).json({ message: 'Cannot list Jobs.' });
  }

  //
}
