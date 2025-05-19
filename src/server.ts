import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function service() {
  try {
    await mongoose.connect(config.database_Url as string);
    app.listen(config.port, () => {
      console.log(`setu-of-portfolio on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

service();
