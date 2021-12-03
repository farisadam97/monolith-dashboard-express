exports.home = (req,res) => res.render('pages/default/home')
exports.notFound = (req,res) => res.render('pages/default/not-found')
exports.exception = (req,res) => res.render('pages/default/exception')
exports.dashboard = require('./dashboard')
