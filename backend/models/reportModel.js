import mongoose from "mongoose"
import { UserSchema } from "./userModel.js"
import { PostSchema } from "./postModel.js"

export const ReportSchema = new mongoose.Schema(
    {
        reportId: {
            type: Number,
            unique: true,
            required: true,
        },
        content: {
            type: String,
            default: "",
        },
        postAssociated: {
            type: PostSchema,
            required: true,
        },
        reportBy: {
            type: UserSchema,
            required: true,
        },
        reportedUser: {
            type: UserSchema,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Report = mongoose.model("Report", ReportSchema);

export default Report