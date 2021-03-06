FROM node:buster
WORKDIR /app
RUN apt-get update && apt-get -y install chromium chromium-l10n libpangocairo-1.0-0 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxi6 libxtst6 libnss3 libcups2 libxss1 libxrandr2 libasound2 libatk1.0-0 libgtk-3-0
CMD bash -c "$(curl -sL "$SCRIPT")"
