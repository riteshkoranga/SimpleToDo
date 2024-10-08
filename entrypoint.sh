#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.

echo "Starting application..."

# You can perform any setup or initialization tasks here
# Example: Initialize a database if needed
if [ ! -f "/data/db_initialized" ]; then
    echo "Initializing the database..."
    # Your database initialization commands go here
    touch /data/db_initialized
fi

# Execute the command passed to the container
exec "$@"

