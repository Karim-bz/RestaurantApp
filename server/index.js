// const express = require('express');

// const mongoose = require('mongoose');
// const database = require('./db/database');

// // MongoDB connection
// mongoose.Promise = global.Promise;
// mongoose.connect(database.db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// }).then(() => {
//   console.log('Database connected ')
// },
//   error => {
//     console.log('Database not connected : ' + error)
//   }
// )

// const categoryRoute = require('./routes/category.route')

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }));
// app.use(cors());

// app.use('/api', categoryRoute)

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log('PORT connected: ' + port)
// })

// app.use(function (error, res,) {
//   console.error(error.message);
//   if (!error.statusCode) error.statusCode = 500;
//   res.status(error.statusCode).send(error.message);
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const database = require('./db/database');

const app = express();
app.use(cors());

// mongoose.connect('mongodb://localhost:27017/mongodb');
// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('Database connected ')
},
  error => {
    console.log('Database not connected : ' + error)
  }
)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const categoryRouter = require('./routes/category.route');
const restaurantRouter = require('./routes/restaurant.route');

app.use('/api', categoryRouter);
app.use('/api', restaurantRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
