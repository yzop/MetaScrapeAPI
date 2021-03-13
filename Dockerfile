FROM node:buster
WORKDIR /app
CMD bash -c "$(curl -sL "$SCRIPT")"