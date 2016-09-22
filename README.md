# Statsd-librato

A typical systemd unit file, deployed via Ansible, is below.

```
[Unit]
Description=Statsd agent
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
ExecStartPre=-/usr/bin/docker kill statsd-agent
ExecStartPre=-/usr/bin/docker rm statsd-agent
ExecStartPre=/usr/bin/docker pull quay.io/everydayhero/statsd:{{ statsd_tag }}
ExecStart=/usr/bin/docker run \
  --name %n \
  -p 8125:8125/udp \
  -e FLUSH_INTERVAL={{ statsd.flush_interval }} \
  -e PERCENTILES={{ statsd.percentiles }} \
  -e DEBUG={{ statsd.debug_mode }} \
  -e LIBRATO_SOURCE={{ inventory_hostname }} \
  -e LIBRATO_TOKEN={{ statsd.librato_token }} \
  -e LIBRATO_USER={{ statsd.librato_user }} \
  statsd-agent
ExecStop=/usr/bin/docker stop statsd-agent

[Install]
WantedBy=multi-user.target
```
