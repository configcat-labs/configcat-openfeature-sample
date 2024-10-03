# PDF Extractor

This repository contains a PDF extractor app for demonstrating how [ConfigCat](https://configcat.com) and OpenFeature can be used together. In the article, the fictional company, PD-EF Corp, uses feature flags to test newer AI models by releasing them for employees only.

![standard-ai-models](https://github.com/user-attachments/assets/60961326-b271-4da5-bb63-60184b72533b)

## Build & Run

### Prerequisites
- Node v18+
- Basic understanding of Node.js and Express

1. Clone the repository:
    - Click the green "Code" button on the repository's page and copy the URL in the text field.
    - Paste and run the following in your terminal: `git clone https://github.com/configcat-labs/configcat-openfeature-sample.git`.
2. Install the dependencies for the backend and frontend:
```
cd configcat-openfeature-sample/backend
npm install

cd configcat-openfeature-sample/frontend
npm install
```
3. Open `/backend/index.js` and enter your ConfigCat SDK key in the `/models` route callback function.

4. Run the backend:
```
cd backend
npm start
```

5. Run the frontend:
```
cd frontend
npm run dev
```

6. Sign up with an email ending in `@pf-efcorp.com`, then sign in.

![pro-models](https://github.com/user-attachments/assets/b25593b9-0749-4583-a969-a29a7749a766)

7. Sign up with an email that doesn't end in `@pd-efcorp.com`, then sign in.

![standard-models](https://github.com/user-attachments/assets/dad835dc-5f94-4542-af9b-412f18063f1c)

## Learn more

- [ConfigCat OpenFeature Provider for Node.js](https://configcat.com/docs/sdk-reference/openfeature/node/) - Read the provider's documentation
- [ConfigCat OpenFeature Providers](https://configcat.com/docs/sdk-reference/openfeature/overview/) - Check out the available OpenFeature providers.
- [OpenFeature Server SDK](https://openfeature.dev/docs/reference/technologies/server/javascript/) - Learn more about OpenFeature's Server SDK (Node.js)
- [OpenFeature](https://openfeature.dev/) - Learn more about OpenFeature

[**ConfigCat**](https://configcat.com) supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics in [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [X](https://x.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author

[Zayyad Muhammad Sani](https://github.com/Z-MS)

## Contributions

Contributions are welcome!
