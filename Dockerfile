FROM node:6.4.0
MAINTAINER Markus Dethlefsen

RUN useradd --user-group --create-home --shell /bin/false app

ENV SHELL=/bin/sh
ENV HOME=/home/app

COPY . $HOME
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME

RUN npm i -s  && \
    npm test -- --reporter min && \
    npm run build
