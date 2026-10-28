git add .
git commit -m "Initial commit"
git push -u origin main

RECYCOIN


1. add the ajax in index.php for redemptions of poiints by barangay personnel


## Styles (Tailwind)

The pages load a prebuilt stylesheet, `functions/tailwind.css`, generated from the Tailwind classes used in the `.php` files. After adding or changing Tailwind classes, rebuild it (needs Node.js):

```
npx tailwindcss@3.4.17 -i functions/tailwind.input.css -o functions/tailwind.css --minify
```

A new class has no effect until you rebuild. Without Node.js, Tailwind's standalone CLI (v3.4.17) takes the same arguments.
