const express = require("express")

const app = express();


app.get("/books", allBooks(), (req, res) => {
    return res.send({bookName: req.name})
});

// {bookName: req.name}

app.get("/book/:name",singleBook(), (req, res) => {
    return res.send({bookName: req.name})
})


function allBooks() {
    return function (req,res,next){
     console.log("Fetching all books")
     next();
    }   
}

function singleBook(){
    return function (req,res,next){
        req.name = req.params.name
        next();
    }
}


app.listen(4321, () => {
    console.log("listning on port 4321");
});
