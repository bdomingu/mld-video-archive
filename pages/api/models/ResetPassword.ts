import mongoose, {Document, Model} from "mongoose";

interface IresetPassword {
    email: string,
    token: string,
    createdAt: Date,

}

export interface IresetPasswordDocument extends IresetPassword, Document {}
interface IresetPasswordModel extends Model<IresetPasswordDocument> {}

const resetPasswordSchema = new mongoose.Schema ({
        email: {
            type: String,
            required: true,
        },

        token: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
            expires: 3600,
        }

    });

let ResetPassword: mongoose.Model<IresetPasswordDocument>;

if (mongoose.models.ResetPassword) {
    ResetPassword = mongoose.model<IresetPasswordDocument, IresetPasswordModel>('ResetPassword');
} else {
    ResetPassword = mongoose.model<IresetPasswordDocument, IresetPasswordModel>('ResetPassword', resetPasswordSchema )};

export default ResetPassword;
