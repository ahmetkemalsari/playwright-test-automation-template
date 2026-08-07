FROM mcr.microsoft.com/playwright:v1.62.1-noble
WORKDIR /workspace
COPY package*.json ./
RUN npm ci
COPY --chown=pwuser:pwuser . .
RUN chown -R pwuser:pwuser /workspace
ENV CI=true
USER pwuser
CMD ["npm", "test"]
