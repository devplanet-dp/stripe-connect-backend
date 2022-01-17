

## Flutter Stripe Backend

The repository has an `.env.local` file and  fill the values accordingly based on your business requirements. Here is an example configuration:

```
STRIPE_API_SECRET=sk_test_asdkjqwklejqwklejkasljdkljasdklj
NEXT_PUBLIC_STRIPE_API_PUBLIC=pk_test_asldksalaksdjjkasdhjaksdhjkhasd
NEXT_PUBLIC_APP_SCHEME=pandagums
NEXT_PUBLIC_HOST=http://localhost:3000
STRIPE_APP_FEE=1.23
```

The `NEXT_PUBLIC_APP_SCHEME` is used for deeplinks and the `STRIPE_APP_FEE` is what is deducted as a fee for your brand on each transaction.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
