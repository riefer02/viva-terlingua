# Original International Championship Chili Cook

Gatsby.js + Strapi CMS Static Site for the Tolbert's Chili Cook Off
## Gatsby

### Installation

In your coding directory run the following command:

```
git clone https://github.com/riefer02/viva-terlingua.git
```

When it completes

```
cd my-terlingua-clone
npm install
```

### Create Environmental Variables

You will need to create a `.env.development` file in the root directory.

Here are required variables:

* NODE_ENV=development
* DOMAIN_URL=http://your-local-host:6969
* STRAPI_URL=http://your-strapi-url.com
* STRIPE_API_KEY=your_strip_api_key
* STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
* TICKET_PRICE=your_ticket_price_id

### Strapi CMS

Please see `viva-terlingua-cms` repo for CMS mapped to this project and instructions on setup. After completing the setup and populating all fields run the following command:

```
npm run develop
```

# Have Fun :hot_pepper: