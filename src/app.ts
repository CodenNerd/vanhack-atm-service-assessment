import express from 'express';
import apiVersion1 from './routers/apiVersion1'
import { urlencoded, json } from 'body-parser';
import { WithdrawalController } from './v1/controllers/WithdrawalController';
import { WithdrawalValidation } from './v1/middleware/WithdrawalValidation';
import { statusCodes } from './utils/enums';

const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({
    limit: '50mb',
    extended: true,
  }));
app.use(json({ limit: '50mb' }));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


// app.use('/api/v1', apiVersion1);
app.use('', apiVersion1);

app.use((req, res) => {
  res.status(statusCodes.NOT_FOUND).send({
    status: 'error',
    message: 'page not found',
  });
});


export default app
