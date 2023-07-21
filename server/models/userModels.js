import mongoose from 'mongoose';
const myschema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const userModel = mongoose.model("user", myschema);
export default userModel;
