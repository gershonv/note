module.exports = {
  http: [
    'what-is-http',
    'network-model',
    'dns',
    {
      TCP: ['tcp/connection', 'tcp/wave', 'tcp/syn', 'tcp/udp', 'tcp/keep-alive']
    },
    {
      'HTTP 报文': [
        'structure/overview',
        'structure/method',
        'structure/status-code',
        'structure/body'
      ]
    },
    {
      缓存: ['cache/index', 'cache/proxy']
    },
    {
      cookie: ['cookie/index', 'cookie/samesite']
    },
    'cross-domain',
    {
      HTTPS: ['https/https', 'https/certificate', 'https/tsl', 'https/tsl13', 'https/https-perf']
    },
    {
      HTTP2: ['http2/http2', 'http2/http2-deep', 'http2/http3']
    }
  ]
}
