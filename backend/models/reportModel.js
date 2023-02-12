import mongoose from "mongoose"

const ReportSchema = new mongoose.Schema(
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
            type: Number,       // postId
            required: true,
        },
        reportBy: {
            required: true,
        },
        reportedUser: {
            type: String,       // userName
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Report = mongoose.model("Report", ReportSchema);

export default Report