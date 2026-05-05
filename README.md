# ConfigCat OpenFeature Sample App

A simple Express API for demonstrating how [ConfigCat](https://configcat.com) and OpenFeature can be used together. When the feature flag evaluates to true, a list of pro-AI models is returned, and a standard list of AI models otherwise.

```bash
cURL http://localhost:3000/models -H "x-user-email: tom@whisker.co" | jq

[
  {
    "name": "GPT 3.5 Turbo",
    "type": "standard"
  },
  {
    "name": "Claude Haiku",
    "type": "standard"
  },
  {
    "name": "Llama 2 7B",
    "type": "standard"
  },
  {
    "name": "GPT-4o",
    "type": "pro"
  },
  {
    "name": "Claude Sonnet 3.5",
    "type": "pro"
  },
  {
    "name": "Llama 3.1 405B",
    "type": "pro"
  }
]
```

## Build & Run

### Prerequisites

- Node v18+
- Basic understanding of Node.js and Express

1. Clone this repository and install the dependencies:

```bash
npm install
```

2. Run the app:

```bash
npm run dev
```

3. Add your [ConfigCat SDK Key](https://app.configcat/sdkkey) to `index.js`;

4. Make a get request with the user email you're targeting to see a list of pro-AI models:

```bash
cURL http://localhost:3000/models -H "x-user-email: tom@whisker.co" | jq

[
  {
    "name": "GPT-4o",
    "type": "pro"
  },
  {
    "name": "Claude Sonnet 3.5",
    "type": "pro"
  },
  {
    "name": "Llama 3.1 405B",
    "type": "pro"
  }
]
```

## Learn more

- [ConfigCat OpenFeature Provider for Node.js](https://configcat.com/docs/sdk-reference/openfeature/node/) - Read the provider's documentation
- [ConfigCat OpenFeature Providers](https://configcat.com/docs/sdk-reference/openfeature/overview/) - Check out the available OpenFeature providers.
- [OpenFeature Server SDK](https://openfeature.dev/docs/reference/technologies/server/javascript/) - Learn more about OpenFeature's Server SDK (Node.js)
- [OpenFeature](https://openfeature.dev/) - Learn more about OpenFeature

[**ConfigCat**](https://configcat.com) supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics in [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [X](https://x.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Authors

[Zayyad Muhammad Sani](https://github.com/Z-MS)   
[Chavez Harris](https://github.com/codedbychavez)

## Contributions

Contributions are welcome!
