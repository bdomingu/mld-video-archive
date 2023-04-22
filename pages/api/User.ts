import bcrypt from 'bcrypt';
import mongoose, { Document, Model } from 'mongoose';


interface IUser {
    name: string;
    email: string;
    password: string;
}

interface IUserDocument extends IUser, Document {
    comparePassword(password: string):Promise<boolean>;
}

interface IUserModel extends Model<IUserDocument> {
    hashPassword(password: string): Promise<string>;
}

const userSchema = new mongoose.Schema<IUserDocument>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true },
    },
    { timestamps: true}

);

userSchema.statics.hashPassword = async (password) => {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
};

userSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

const User: IUserModel = mongoose.model<IUserDocument, IUserModel>(
    'User',
    userSchema
);

export default User;