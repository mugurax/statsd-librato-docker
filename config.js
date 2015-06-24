{
  librato: {
    email: process.env.LIBRATO_USER,
    token: process.env.LIBRATO_TOKEN,
    source: process.env.LIBRATO_SOURCE
  },

  backends: ["statsd-librato-backend"],

  flushInterval: process.env.FLUSH_INTERVAL,
  percentThreshold: process.env.PERCENTILES,
  debug: process.env.DEBUG,

  address: "0.0.0.0",
  port: 8125
}
