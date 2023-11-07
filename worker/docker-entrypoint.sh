#!/bin/bash

# Ensure the jobsdata directory exists
mkdir -p /home/pptruser/jobsdata/pdfs

# Set correct ownership and permissions
chown -R pptruser:pptruser /home/pptruser/jobsdata
chmod -R 755 /home/pptruser/jobsdata

# Start the NodeJS application
exec gosu pptruser node index.js
