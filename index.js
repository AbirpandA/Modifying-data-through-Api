const express = require('express');
const { resolve } = require('path');
const MenuItem = require('./menuitem.js')

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('hellow the worldo');
});

app.post('/createitem',(req,res)=>{
  const {name , description , price} = req.body 

  if (! name || !price){
    res.json('name and price are required')
  }
  const newitem = new MenuItem({
    name,
    description,
    price
  })
  newitem.save()
  res.json("Created")
})

app.get('/items',(req,res)=>{
  try {
    const items = await MenuItem.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items', details: error.message });
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
