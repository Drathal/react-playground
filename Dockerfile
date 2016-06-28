FROM node:6.2.2
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
COPY . $HOME
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME

RUN npm install
RUN npm test -- --reporter spec
RUN npm build
