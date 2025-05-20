export default async function handler(req, res) {
    // adding Post API
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, item, price } = req.body;

  if (!name || !item || !price) {
    return res.status(400).json({ error: 'Missing name, item, or price in request body' });
  }

  const orderId = `ORD-${Date.now()}`;

  return res.status(200).json({
    orderId,
    message: 'Order placed successfully'
  });
}
