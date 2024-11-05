import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connection Success!!!!");
    }
    catch (err) {
        console.log("error" + err);
    }
}

export default dbConnection;