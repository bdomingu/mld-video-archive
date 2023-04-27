import mongoose from "mongoose";

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

const Reset = mongoose.model('ResetPassword', resetPasswordSchema);

export default Reset;
