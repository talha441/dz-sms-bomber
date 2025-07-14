export default function handler(req, res) {
  if (req.method === 'POST') {
    const { phone } = req.body;

    return res.status(200).json({ message: `SMS attack launched on ${phone}` });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
