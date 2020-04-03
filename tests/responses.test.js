const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

describe('getroot', () => {
  test('should give 200 if API gives good respose', async () => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe(JSON.stringify({message: 'It Works!',}))
  })
})
