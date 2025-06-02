FROM nginx:alpine

COPY static /usr/share/nginx/html
RUN rm /usr/share/nginx/html/index.html
RUN sed -i -e '/location.*\/.*{/a autoindex on\;' /etc/nginx/conf.d/default.conf
EXPOSE 80
