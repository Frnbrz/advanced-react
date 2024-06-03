import { Hono } from 'hono'

export const chatbotRoute = new Hono().get('/', async c => {
  const message = c.req.query('message')

  const responses: { [key: string]: string } = {
    hello: 'Hola, ¿en qué puedo ayudarte?',
    start:
      'Bienvenido a la entrevista de trabajo de DevCode. ¿Qué te motiva a optar por esta oferta?',
    second:
      '¿Qué es lo que te gusta de esta empresa y qué no te gusta de otras?',
    third:
      ' ¿Cuál ha sido el desafío más complejo que has experimentado y cómo lo solventaste?',
    bye: 'Adiós, ¡que tengas un buen día!',
    default: 'Lo siento, no entiendo lo que estás diciendo.',
  }

  return c.json({
    response: responses[message as keyof typeof responses] || responses.default,
  })
})
