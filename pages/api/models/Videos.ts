import mongoose, {Document, Model} from "mongoose";

interface IVideo {
    userId: string,
    id: string,
    watched: boolean,
    completed: boolean,

}

export interface IVideoDocument extends IVideo {}
interface IVideoModel extends Model<IVideoDocument> {}


const videoSchema = new mongoose.Schema ({
        userId: {
            type: String,
            ref: 'Users',
        },
        id: {
            type: String,
            required: true,
        },
        watched: {
            type: Boolean,
            required: true,
            
        },
        completed: {
            type: Boolean,
            required: true,
            
        }

    });

let Video: mongoose.Model<IVideoDocument>;

if (mongoose.modelNames().includes('Videos')) {
    Video = mongoose.model<IVideoDocument, IVideoModel>('Videos');
} else {
    Video = mongoose.model<IVideoDocument, IVideoModel>('Videos', videoSchema )};

export default Video;
