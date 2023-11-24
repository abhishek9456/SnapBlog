import mongoose from "mongoose";

const connect = async() => {
    await mongoose.connect('mongodb+srv://abhishekpratapsingh251:c8xwp5TIKd6qv2Va@cluster0.mcndazn.mongodb.net/?retryWrites=true&w=majority');
    console.log('server is connected to the database...');
}

export default connect;