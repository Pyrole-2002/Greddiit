import mongoose from "mongoose"

const SubGreddiitSchema = new mongoose.Schema(
    {
        sgId: {
            type: Number,
            required: true,
            unique: true,
        },
        sgName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 50,
        },
        description: {
            type: String,
            default: "",
        },
        tags: {
            type: [String],
            default: [],
        },
        bannedKeywords: {
            type: [String],
            default: [],
        },
        followers: {
            type: [String],     // userName
            default: [],
        },
        mods: {
            type: [String],     // userName
            default: [],
        },
        posts: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
)

const SubGreddiit = mongoose.model("SubGreddiit", SubGreddiitSchema);

export default SubGreddiit