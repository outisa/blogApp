const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const path = require('path')
const mongoUrl = config.MONGODB_URI

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/routerTest')
  app.use('/api/testing', testingRouter)
}
app.use(express.static('backend/build'))


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'backend', 'build', 'index.html'))
})
app.use(middleware.errorHandler)

module.exports = app
