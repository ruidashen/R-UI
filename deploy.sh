rm -rf dist &&
npm run build &&
cd dist &&
git init  &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin https://github.com/ruidashen/R-UI-SITE.git &&
git push -f -u origin master &&
cd -
echo https://r-ui-site.vercel.app/#/
