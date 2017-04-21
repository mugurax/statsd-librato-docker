{
  librato: {
    email: process.env.LIBRATO_USER,
    token: process.env.LIBRATO_TOKEN,
    source: process.env.LIBRATO_SOURCE,
    sourceRegex: process.env.LIBRATO_SOURCE_REGEX,
    postTimeoutSecs: +( process.env.LIBRATO_POST_TIMEOUT || "" ),
    retryDelaySecs: +( process.env.LIBRATO_RETRY_DELAY || "" ),
    batchSize: +( process.env.LIBRATO_BATCH_SIZE || "" )
  },

  backends: JSON.parse(process.env.BACKENDS || '["statsd-librato-backend"]'),

  keyNameSanitize: false,
  deleteIdleStats: true,
  flushInterval: ( process.env.FLUSH_INTERVAL || 0 ) * 1000,
  percentThreshold: ( process.env.PERCENTILES || "" ).split( "," ).map( function( s ) {
    return parseFloat( s )
  } ).filter( function( f ) {
    return !isNaN( f )
  } ),
  
  debug: JSON.parse(process.env.DEBUG),

  histogram: JSON.parse( process.env.HISTOGRAM || '[]' ),

  address: "0.0.0.0",
  port: 8125
}