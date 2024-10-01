import db from './db.js'
import { saltandHash } from './hashPassword.js';

// mock authentication - not secure

async function registerUser (req, res) {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400).json({ message: "Please enter your username and password" });
    }

    const userExists = db.getUsers().find(user => user.email === email);
    if(userExists) {
        res.status(409).json({ message: "User already exists" });
    }

    try {
        // hash the password
        const hashedPassword = saltandHash(password);
        const newUser = {
            id: Date.now(),
            email,
            password: hashedPassword
        };

        db.addUser(newUser);
        res.status(201).json({ message: "User created succesfully" });
        
        console.log(db.getUsers());
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

async function loginUser(req, res) {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400).json({ message: "Please enter your username and password" });
    }
    const user = db.getUsers().find(user => user.email === email);

    if(!user) {
        res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const hashedPassword = saltandHash(password);
        const isPasswordCorrect = hashedPassword === user.password;

       if(isPasswordCorrect) {
           res.json(user.id);
        }
     } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

export { registerUser, loginUser };