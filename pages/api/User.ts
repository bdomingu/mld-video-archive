import mongoose, { Document, Model } from 'mongoose';


interface IUser {
    name: string;
    email: string;
    password: string;
}


export interface IUserDocument extends IUser, Document {}
interface IUserModel extends Model<IUserDocument> {}


const userSchema = new mongoose.Schema<IUser>(
    {
        name: { 
            type: String, 
            required: true
        },
        email: { 
            type: String, 
            required: true, 
            unique: true},
        password: { 
                type: String, 
                required: true 
        },
    },
    { timestamps: true}

);

let User: mongoose.Model<IUserDocument>;

if (mongoose.models.User) {
     User = mongoose.model<IUserDocument, IUserModel>('User');
} else {
    User = mongoose.model<IUserDocument, IUserModel>( 'User', userSchema);
}


export default User;