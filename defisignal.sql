\echo 'Delete and recreate defi-signal db?'
\prompt 'Return for yes or control-C to cancel > ' foo

\connect defisignal

\i defisignal-schema.sql

\echo 'Delete and recreate defisignaltest db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE defisignaltest;
CREATE DATABASE defisignaltest;
\connect defisignaltest

\i defisignal-schema.sql