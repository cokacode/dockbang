FROM node
LABEL maintainer="ynx@cokacode.in"
RUN git clone https://github.com/cokacode/dockbang.git
WORKDIR dockbang
RUN npm install > /dev/null
EXPOSE 8000
CMD [ "npm", "start" ]