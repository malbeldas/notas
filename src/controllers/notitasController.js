const path = require("path")

module.exports = {
    home: function(req,res){
        res.render("index")
    },
    detail: function(req,res){
        res.render("detail")
    }
}