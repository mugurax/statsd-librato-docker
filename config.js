{
  librato: {
    email: process.env.LIBRATO_USER,
    token: process.env.LIBRATO_TOKEN,
    source: process.env.LIBRATO_SOURCE,
    postTimeoutSecs: +( process.env.LIBRATO_POST_TIMEOUT || "" ),
    retryDelaySecs: +( process.env.LIBRATO_RETRY_DELAY || "" ),
    batchSize: +( process.env.LIBRATO_BATCH_SIZE || "" )
  },

  backends: [ "statsd-librato-backend" ],

  deleteIdleStats: true,
  flushInterval: ( process.env.FLUSH_INTERVAL || 0 ) * 1000,
  percentThreshold: ( process.env.PERCENTILES || "" ).split( "," ).map( function( s ) {
    return parseFloat( s )
  } ).filter( function( f ) {
    return !isNaN( f )
  } ),
  debug: process.env.DEBUG,

  histogram: JSON.parse( process.env.HISTOGRAM ) || [],

  address: "0.0.0.0",
  port: 8125
}