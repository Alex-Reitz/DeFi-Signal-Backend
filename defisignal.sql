\echo 'Delete and recreate defi-signal db?'
\prompt 'Return for yes or control-C to cancel > ' foo

\connect process.env.DATABASE_URL
console.log(process.env.DATABASE_URL);
\i defisignal-schema.sql

