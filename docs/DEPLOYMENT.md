# GitHub Pages Deployment

This site is designed to be published directly from the repository root. No build command is required.

## 1. Create the Repository

1. Create a new GitHub repository.
2. Place the contents of `portfolio-site` in the repository root.
3. Confirm that `index.html`, `CNAME` and `.nojekyll` are at the root level.
4. Commit the files to the `main` branch.

## 2. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save and wait for the first deployment to complete.

GitHub will initially provide a `github.io` address for the site.

## 3. Connect the Custom Domain

The included `CNAME` file contains:

```text
modenaboscato.com
```

In **Settings > Pages**, enter `modenaboscato.com` as the custom domain.

Configure the domain using GitHub's current official instructions:

- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

Do not remove or replace existing MX and email-related TXT records. They may be required for `murilo@modenaboscato.com` to continue working.

## 4. Enable HTTPS

After GitHub validates the DNS configuration and issues a certificate:

1. Return to **Settings > Pages**.
2. Enable **Enforce HTTPS**.
3. Confirm that both the homepage and management case load over HTTPS.

## 5. Post-Deployment Checks

Verify the following pages and actions:

- `https://modenaboscato.com/`
- `https://modenaboscato.com/work-sample.html`
- `https://modenaboscato.com/samples.html`
- CV download
- Email links
- Mobile navigation
- Print case button
- Expandable management samples and Print / PDF button
- Portrait and hero image
- `robots.txt`
- `sitemap.xml`

## Updating the Site

Edit the files locally, commit the changes and push to `main`. GitHub Pages will publish the new version automatically.

If a change introduces a problem, revert the relevant commit and push the correction. Avoid deleting the repository or changing DNS as a first response.
