\echo 'Delete and recreate defi-signal db?'
\prompt 'Return for yes or control-C to cancel > ' foo

\connect postgresql-crystalline-50975

\i defisignal-schema.sql

