FROM prom/prometheus:latest

VOLUME /etc/prometheus
VOLUME /var/lib/prometheus
COPY prometheus.yml /etc/prometheus/
COPY rules.yml /etc/prometheus/

EXPOSE 9090