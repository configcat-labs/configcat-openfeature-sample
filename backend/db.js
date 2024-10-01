import { saltandHash } from "./hashPassword.js";

// mock database

const users = [
    {
        id: Date.now(),
        email: "test@gmail.com",
        password: saltandHash("test")
    },
    {
        id: Date.now() + 1,
        email: "person@email.com",
        password: saltandHash("password")
    }
];

const models = [
    {
        name: 'GPT 3.5 Turbo',
        type: 'standard'
    },
    {
        name: 'Claude Haiku',
        type: 'standard'
    },
    {
        name: 'Llama 2 7B',
        type: 'standard'
    },
    {
        name: 'GPT-4o',
        type: 'pro'
    },
    {
        name: 'Claude Sonnet 3.5',
        type: 'pro'
    },
    {
        name: 'Llama 3.1 405B',
        type: 'pro'
    },
];

const db = {
    addUser({ id, email, password }) {
        users.push({ id, email, password });
    },
    getUsers() {
        return users;
    },
    getUser(id) {
        return this.getUsers().find(user => user.id === id);
    },
    getModels(modelType) {
        let results = [];
        models.forEach(model => {
            if(model.type === modelType) {
                results.push(model);
            }
        });
        return results;
    }

}

export default db;
