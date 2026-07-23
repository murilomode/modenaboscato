# GitHub Pages Deployment

This site is designed to be published directly from the repository root. No build command is required.

## 1. Create or Update the Repository

1. Put the contents of `portfolio-site` in the repository root.
2. Confirm that `index.html`, `CNAME` and `.nojekyll` are at the root level.
3. Commit the files to the `main` branch.

## 2. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save and wait for the first deployment to complete.

## 3. Connect the Custom Domain

The included `CNAME` file contains:

```text
modenaboscato.com
```

In **Settings > Pages**, enter `modenaboscato.com` as the custom domain.

Do not remove or replace existing MX and email-related TXT records. They may be required for `murilo@modenaboscato.com` to keep working.

Useful official GitHub references:

- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## 4. Enable HTTPS

After GitHub validates the DNS configuration and issues a certificate:

1. Return to **Settings > Pages**.
2. Enable **Enforce HTTPS**.
3. Confirm that the homepage, case study, samples and document downloads load over HTTPS.

## 5. Post-Deployment Checks

Verify:

- `https://modenaboscato.com/`
- `https://modenaboscato.com/work-sample.html`
- `https://modenaboscato.com/samples.html`
- resume download;
- email links;
- mobile navigation;
- print buttons;
- portrait image;
- `robots.txt`;
- `sitemap.xml`.
