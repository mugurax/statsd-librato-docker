{
  librato: {
    email: process.env.LIBRATO_USER,
    token: process.env.LIBRATO_TOKEN,
    source: process.env.LIBRATO_SOURCE
  },

  backends: ["statsd-librato-backend"],

  flushInterval: (process.env.FLUSH_INTERVAL || 0) * 1000,
  percentThreshold: (process.env.PERCENTILES || "").split(",").map(function(s) { return parseFloat(s) }).filter(function(f) { return !isNaN(f) }),
  debug: process.env.DEBUG,

  address: "0.0.0.0",
  port: 8125
}
