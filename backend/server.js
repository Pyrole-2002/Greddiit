import express from "express"
import colors from "colors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import { register } from "./controllers/authController.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"



// CONFIGURATIONS
dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const port = process.env.PORT || 6001

const app = express()

app.use(express.json())

app.use(helmet.crossOriginResourcePolicy({
	policy: "cross-origin"
}))

app.use(morgan("common"))

app.use(bodyParser.json({
	limit: "30mb",
	extended: true
}))

app.use(bodyParser.urlencoded({
	limit: "30mb",
	extended: true
}))

app.use(cors())

app.use("/assets", express.static(path.join(__dirname, "public/assets")))



// FILE STORAGE
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/assets")
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
})

const upload = multer({ storage })


// ROUTES WITH FILES
app.post("/auth/register", register)

// ROUTES
app.use("/auth", authRoutes)
app.use("/users", userRoutes)



// MONGOOSE
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port, () =>
			console.log(`Server Started on Port ${port}`.cyan)
		)
	})
	.catch((error) => console.log(`${error} did not connect`.red));

mongoose.set("strictQuery", false);