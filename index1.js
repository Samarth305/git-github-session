const express = require("express"); const path = require("path");
 
const Joi = require("joi");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


// Serve HTML form 
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "views", "form.html"));
});


// Validation schema using Joi 
const facultySchema = Joi.object({
facultyId: Joi.number().integer().positive().min(10).max(9999).required(), facultyName: Joi.string().min(2).required(),
mobile: Joi.string().pattern(/^[0-9]+$/).min(9).required(), age: Joi.number().integer().min(18).max(100).required(),
birthYear: Joi.number().integer().min(1920).max(2022).required(), address: Joi.string().required(),
email: Joi.string()
.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|ai)$/)
.required()
});


// Handle form submission
app.post("/submit", (req, res) => {
const { error, value } = facultySchema.validate(req.body);


if (error) {
return res.status(400).send(`<h3>Validation Error:</h3> ${error.details[0].message} <br><a href="/">Go Back</a>`);
}
 
res.send(`<h2>Form submitted successfully!</h2>
<p>Faculty ID: ${value.facultyId}</p>
<p>Name: ${value.facultyName}</p>
<p>Mobile: ${value.mobile}</p>
<p>Age: ${value.age}</p>
<p>Birth Year: ${value.birthYear}</p>
<p>Address: ${value.address}</p>
<p>Email: ${value.email}</p>
`);
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
