const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const users = require('../Model/user-model')
const option = {
  secretOrKey: process.env.SECRET_KEY
}
option.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()

module.exports = passport => {
  passport.use(
    new JwtStrategy(option, (object_payload, done) => {
      users
        .findOne({ _id: object_payload._id })
        .then(user => {
          if (user) done(null, user)
          done(null, false)
        })
        .catch(err => done(err, false))
    })
  )
}
