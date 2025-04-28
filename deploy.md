# Deploying PDFwoow

# To deploy the PDFwoow project, you can use GitHub Pages. Here are the steps to do so:
# 1. **Build the project**: First, you need to build the project using the following command:

```bash
  git add -A
  git commit -m "Deploy to gh-pages"

  git push origin main
```
# 2. **Build the project**: First, you need to build the project using the following command:

```bash
  npm run build 

  git add dist -f

  git commit -m "Deploy to gh-pages"

  git subtree push --prefix dist origin gh-pages
```