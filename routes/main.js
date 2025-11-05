var express = require("express");
var router = express.Router();

// Define the data for the shop
var shopData = { shopName: "Get Your Drinks(GYD)" };
var shopData = {shopName: "Get Your Drinks(GYD)", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"]}

// Main page route
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

// About page route
router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});
router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
}); 
//search result page route
router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });
//register page route
router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!'+ 'we will contact you at '+ req.body.email);    
});
//survey page route
router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData); 
});
router.post("/survey", (req,res) => { 
  res.send(' Hello '+ req.body.firstName + ' '+ req.body.surname + ' '+req.body.age+''+'years old'+' you have completed the survey.'+' '+ 'We will contact you '+ req.body.email+ ' regarding your favourite drink category: '+ req.body.drinkCategory);    
});
module.exports = router;
