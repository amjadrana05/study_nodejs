const express = require('express');
const app = express();
const hbs = require('express-handlebars');


//body parser
app.use(express.urlencoded({extended: true}))

//template engine
app.engine('.hbs', hbs({ extname: '.hbs', defaultLayout: 'main'}))
app.set('view engine', '.hbs')


//static file
app.use(express.static(__dirname + '/public'))


//Get
app.get('/', (req, res) => {
  res.send("Welcome to express!")
})

app.get('/:name', (req, res) => {
  // const student = {
  //   "name":"Amjad",
  //   "roll": "16",
  //   "dept": "CSE"
  // }
  // res.json(student)
  // res.send(`Student of ${req.params.dept}`)
  // res.send(req.query)
  // res.send(`
  // <form action="/" method="post">
  //   <input name="name" placeholder="user name">
  //   <input name="email" placeholder="email">
  //   <button>Submit</button>
  // </form>
  // `)

  res.render('student', {
    name: req.params.name,
    roll: 16,
    dept: "CSE"
  })
})


//post
app.post('/', (req, res) => {
  res.send(`You are ${req.body.name} and mail is ${req.body.email}`)
})


//Server listen
app.listen('8000', ()=> {
  console.log('Server runing at http://localhost:8000')
})

