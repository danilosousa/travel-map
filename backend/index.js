const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();

const userRoute = require('./routes/users')
const pinRoute = require('./routes/pins')
dotenv.config();

app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  
}).then(() => {
  console.log('mongodb conected');
})
.catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800,() => {
  console.log('back end is running =D')
})
// mongodb+srv://danilosousa:<password>@cluster0.dcfdwl9.mongodb.net/?retryWrites=true&w=majority