FROM node:6.3.1
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
COPY . $HOME
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME

RUN npm install -s
RUN npm test -- --reporter spec

ENV SHELL=/bin/sh
