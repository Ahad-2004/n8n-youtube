# Your base image
FROM n8nio/n8n

# Copy keep-alive script
COPY keep-alive.js /keep-alive.js

# Install Node.js (already present in base image, but be sure it's ready)
# You might also add `curl`/`wget` if needed

# Start n8n and the keep-alive script in parallel
CMD ["sh", "-c", "node /keep-alive.js & n8n start"]
