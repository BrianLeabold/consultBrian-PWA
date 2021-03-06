const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const Contact = require('../models/contact')
const mongoose = require('mongoose')

// const userDb = 'mongodb://Admin:consult9Brian@ds127015.mlab.com:27015/eventsdb'
const contactDb = 'mongodb://admin:bigbri69@ds141320.mlab.com:41320/contactdb'

mongoose.connect(contactDb, err => {
        if (err) {
             console.error('Error' + err)
             } else { console.log ('Connected to MongoDB')
             }
     })
     mongoose.connect(contactDb, err => {
        if (err) {
             console.error('Error' + err)
             } else { console.log ('Connected to MongoDB')
             }
     })

     function verifyToken(req, res, next) {
      if (!req.headers.authorization) {
         return (res.status(401).send('Unauthorized Request'))
      }
      let token = req.headers.authorization.split(' ')[1]
      if (token === 'null') {
         return (res.status(401).send('Unauthorized Request'))
      }
      let payload = jwt.verify(token, 'secretKey')
      if(!payload) {
         return (res.status(401).send('Unauthorized Request'))
      }
      req.userId = payload.subject
      next()
   }

router.get('/', (req, res) => {
        res.send('From Consult Brian API route')
     })

     router.post('/register', (req, res) => {
      let userData = req.body
      let user = new User(userData)
      user.save((error, registeredUser) => {
           if(error) {
                   console.log(error)
           } else {
              let payload = { subject: registeredUser.id}
              let token = jwt.sign(payload, 'secretKey')
              res.status(200).send({token})
           }
      })
   })

   router.post('/login', (req, res) => {
      let userData = req.body
      User.findOne({email: userData.email}, (err, user) => {
        if (err) {
          console.log(err)
        } else {
          if (!user) {
            res.status(401).send('Invalid Email')
          } else
          if ( user.password !== userData.password) {
            res.status(401).send('Invalid Password')
          } else {
            let payload = {subject: user.id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
          }
        }
      })
    })

router.post('/contact', (req, res) => {
   let contactModel = req.body
   let contact = new Contact(contactModel)
   contact.save((error, contactUser) => {
        if (error) {
        console.log(error)
        } else {
        res.status(200).send(contactUser)
        }
  })
})

module.exports = router
