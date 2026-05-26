# WVSU Tour CMS (Strapi v5)

This project has been migrated to **Strapi v5.46.1**.

## Requirements

- Node.js `>=20 <=24`
- npm `>=6`

## Scripts

- `npm run develop` - start in development mode
- `npm run build` - build admin panel
- `npm run start` - start production server
- `npm run upgrade` - run Strapi upgrade tool

## Configuration notes

- Database now uses Strapi v5 database clients (`sqlite` by default). MongoDB is no longer supported in Strapi v5.
- Set `DATABASE_CLIENT`, `DATABASE_*`, and `APP_KEYS` env values before production use.
- If Firestore sync is needed, place Firebase service account JSON at:
  `config/functions/serviceapp.json`

## Content types

All previous v3 APIs were migrated to Strapi v5 content-types under `src/api/*`.
