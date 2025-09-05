// Для Vercel/Netlify используется стандартный экспорт

export default async function handler(req, res) {
  // Разрешаем только POST-запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Данные могут приходить в разном формате, обычно JSON
    // Предполагаем, что тело запроса - это JSON
    const incomingData = req.body;

    // Теперь вы можете работать с данными.
    // Допустим, сервис присылает поле 'event' и 'data'
    const eventType = incomingData.event;
    const usefulData = incomingData.data;

    // Ваша логика обработки здесь!
    console.log('Тип события:', eventType);
    console.log('Данные:', usefulData);

    // Обязательно ответьте сервису, что все получилось (статус 200)
    res.status(200).json({ status: 'success', message: 'Webhook received!' });

  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}
