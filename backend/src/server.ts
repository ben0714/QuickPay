// src/server.ts
import app from './app'
import { config } from './config/config'
import sequelize from './config/database'

const port = config.port || 3001

sequelize
  .sync()
  .then(() => {
    console.log('Database connected')
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
