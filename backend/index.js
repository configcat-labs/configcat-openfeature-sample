import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { registerUser, loginUser } from './auth.js';
import db from './db.js';
import { ConfigCatProvider } from '@openfeature/config-cat-provider';
import { OpenFeature } from '@openfeature/server-sdk';

const app = express();
app.use(cors())
app.use(express.json());

// create a provider with your SDK key
const provider = ConfigCatProvider.create(process.env.CONFIGCAT_SDK_KEY);

// initialize the provider
OpenFeature.setProviderAndWait(provider);
 
// Create a client.
const client = OpenFeature.getClient();

app.get('/', (_, res) => {
    res.send("PDF document API");
});

app.post('/register', async(req, res) => {
    await registerUser(req, res);  
})

app.post('/login', async(req, res) => {
    await loginUser(req, res);
})

app.post('/models', async(req, res) => { 
    const user = db.getUser(req.body.userId);
    const proModels = db.getModels('pro');
    const standardModels = db.getModels('standard');

    const context = {
        targetingKey: user.id,
        email: user.email
    }
    let modelsListEnabled = await client.getBooleanValue("enable_pro_models", false, context);

    if(modelsListEnabled) {
        res.json(proModels)
    } else {
        res.json(standardModels)
    }
});

app.listen(3000, () => console.log('Server is running...'));