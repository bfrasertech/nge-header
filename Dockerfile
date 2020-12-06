FROM node:10.23.0
LABEL maintainer bfraser@frasertechnicalsolutions.com

EXPOSE 5432 4321 35729

RUN npm i -g gulp@3 yo @microsoft/generator-sharepoint@1.11.0

VOLUME /usr/app/spfx
WORKDIR /usr/app/spfx

RUN useradd --create-home --shell /bin/bash spfx && \
    usermod -aG sudo spfx && \
    chown -R spfx:spfx /usr/app/spfx

USER spfx

CMD /bin/bash