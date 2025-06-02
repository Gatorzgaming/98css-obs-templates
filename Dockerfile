FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html
COPY static /usr/share/nginx/html
RUN sed -i -e '/location.*\/.*{/a autoindex on\;' /etc/nginx/conf.d/default.conf
EXPOSE 80
