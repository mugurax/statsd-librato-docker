FROM gliderlabs/alpine:3.1
RUN apk-install curl bash
ENV STATSD_LIBRATO_VERSION 1.0.0

ADD https://github.com/jcoene/statsd-librato/releases/download/$STATSD_LIBRATO_VERSION/statsd-$STATSD_LIBRATO_VERSION.linux-amd64.tar.gz /tmp/statsd-$STATSD_LIBRATO_VERSION.linux-amd64.tar.gz
RUN tar -zxf /tmp/statsd-$STATSD_LIBRATO_VERSION.linux-amd64.tar.gz

EXPOSE 8125

CMD /statsd-$STATSD_LIBRATO_VERSION.linux-amd64/bin/statsd \
    -address="0.0.0.0:8125" \
    -debug="$DEBUG" \
    -flush="$FLUSH_INTERVAL" \
    -percentiles="$PERCENTILES" \
    -source="$LIBRATO_SOURCE" \
    -token="$LIBRATO_TOKEN" \
    -user="$LIBRATO_USER"
