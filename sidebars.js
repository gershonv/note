module.exports = {
  someSidebar: {
    技术漫谈: [
      'main',
      'markdown',
      {
        机器学习: ['ramble/machine-learning/overview', 'ramble/machine-learning/decision-tree-id3']
      }
    ],
    'HTML & CSS': [
      'html/semantic',
      'html/defer-async',
      'html/meta',
      'html/src-href',
      'html/link-meta-script'
    ],
    JavaScript: [
      'javascript/data-types',
      'javascript/prototype',
      'javascript/this',
      'javascript/closure',
      'javascript/extends',
      'javascript/set-map',
      'javascript/generator',
      'javascript/async',
      'javascript/web-worker',
      {
        二进制数据: [
          'javascript/binary/blob',
          'javascript/binary/file-upload',
          'javascript/binary/large-file-upload',
          'javascript/binary/arraybuffer'
        ]
      },
      {
        设计模式: [
          'javascript/design-patterns/event-emitter',
          'javascript/design-patterns/proxy',
          'javascript/design-patterns/strategy'
        ]
      }
    ],
    React: [
      'react/uncontrolled-components',
      'react/context',
      'react/compound-component',
      'react/setState',
      'react/immutable',
      'react/render',
      { redux: ['react/redux/achieve', 'react/redux/redux-dynamic-injection'] },
      { 'react-router': ['react/router/history-location', 'react/router/hash-router'] }
    ],
    'React 原理解析': ['react/code/way'],

    webpack: [
      {
        构建优化: ['webpack/optimization/overview', 'webpack/optimization/spritesmith']
      },
      {
        概念: [
          'webpack/concept/engineering',
          'webpack/concept/webpack-module',
          'webpack/concept/commonjs',
          'webpack/concept/babel',
          'webpack/concept/babel-ast',
          'webpack/concept/tree-shaking',
          'webpack/concept/loader'
        ]
      },
      {
        原理: ['webpack/principle/overview', 'webpack/principle/self-loader']
      }
    ],
    // HTTP: [
    //   'http/what-is-http',
    //   'http/network-model',
    //   'http/dns',
    //   {
    //     TCP: [
    //       'http/tcp/connection',
    //       'http/tcp/wave',
    //       'http/tcp/syn',
    //       'http/tcp/udp',
    //       'http/tcp/keep-alive'
    //     ]
    //   },
    //   {
    //     'HTTP 报文': [
    //       'http/structure/overview',
    //       'http/structure/method',
    //       'http/structure/status-code',
    //       'http/structure/body'
    //     ]
    //   },
    //   {
    //     缓存: ['http/cache/index', 'http/cache/proxy']
    //   },
    //   {
    //     cookie: ['http/cookie/index', 'http/cookie/samesite']
    //   },
    //   'http/cross-domain',
    //   {
    //     HTTPS: [
    //       'http/https/https',
    //       'http/https/certificate',
    //       'http/https/tsl',
    //       'http/https/tsl13',
    //       'http/https/https-perf'
    //     ]
    //   },
    //   {
    //     HTTP2: ['http/http2/http2', 'http/http2/http2-deep', 'http/http2/http3']
    //   }
    // ],
    浏览器: [
      {
        宏观下的浏览器: [
          'browser/macro/process-thread',
          'browser/macro/browser-process',
          'browser/macro/url-to-display',
          'browser/macro/rendering1',
          'browser/macro/rendering2',
          'browser/macro/repaint-reflow'
        ]
      },
      {
        'Javascript 执行机制': [
          'browser/js/variable-promotion',
          'browser/js/context-stack',
          'browser/js/scope',
          'browser/js/scope-chain',
          'browser/js/this'
        ]
      },
      {
        'v8 工作原理': ['browser/v8/ram', 'browser/v8/gc', 'browser/v8/run-the-code']
      },
      {
        EventLoop: [
          'browser/event-loop/thread-queue',
          'browser/event-loop/macrotask-microtask',
          'browser/event-loop/browser-event-loop',
          'browser/event-loop/promise',
          'browser/event-loop/node'
        ]
      },
      {
        'web 安全': [
          //
          'browser/security/overview',
          'browser/security/xss',
          'browser/security/csrf',
          'browser/security/ssrf',
          'browser/security/clickjacking',
          'browser/security/url-phishing',
          'browser/security/sql',
          'browser/security/file',
          'browser/security/ddos'
        ]
      },
      {
        'DOM 操作': ['browser/dom/overview', 'browser/dom/capture-bubble']
      },
      {
        其他: ['browser/others/css-block', 'browser/others/network', 'browser/others/performance']
      }
    ],

    算法与数据结构: [
      {
        math: ['algorithm/math/bit-operation', 'algorithm/math/log', 'algorithm/math/magnitude']
      },
      {
        数据结构: [
          'algorithm/data-structure/stack',
          'algorithm/data-structure/queue',
          'algorithm/data-structure/linkedList',
          'algorithm/data-structure/set',
          'algorithm/data-structure/dict-hashtable',
          'algorithm/data-structure/tree',
          'algorithm/data-structure/avl',
          'algorithm/data-structure/graph',
          'algorithm/data-structure/graph-traverse'
        ]
      },
      {
        排序算法: [
          'algorithm/sort/overview',
          'algorithm/sort/bubbleSort',
          'algorithm/sort/selectionSort',
          'algorithm/sort/insertSort',
          'algorithm/sort/mergeSort',
          'algorithm/sort/quickSort',
          'algorithm/sort/shellSort',
          'algorithm/sort/heapSort'
        ]
      },
      {
        树: [
          'algorithm/tree/overview',
          'algorithm/tree/traverse',
          'algorithm/tree/symmetric',
          'algorithm/tree/search',
          'algorithm/tree/depth',
          'algorithm/tree/pathSum',
          'algorithm/tree/treeToDoublyList',
          'algorithm/tree/serialize',
          'algorithm/tree/isSubStructure',
          'algorithm/tree/bfs-dfs'
        ]
      },
      {
        链表: [
          'algorithm/linkList/overview',
          'algorithm/linkList/base-use',
          'algorithm/linkList/reverseList',
          'algorithm/linkList/copyRandomList',
          'algorithm/linkList/2',
          'algorithm/linkList/141',
          'algorithm/linkList/summary'
        ]
      },
      {
        动态规划: [
          'algorithm/dynamic-programming/overview',
          'algorithm/dynamic-programming/method',
          'algorithm/dynamic-programming/climbStairs',
          'algorithm/dynamic-programming/house-robber',
          'algorithm/dynamic-programming/coinChange',
          'algorithm/dynamic-programming/minPathSum',
          'algorithm/dynamic-programming/uniquePaths'
        ]
      },
      {
        一些算法思想: [
          'algorithm/others/complexity',
          'algorithm/others/sliding-window',
          'algorithm/others/binarySearch',
          'algorithm/others/divide',
          'algorithm/others/shuffle'
        ]
      }
    ],
    模拟实现系列: [
      'achieve/call-apply',
      'achieve/new',
      'achieve/bind',
      'achieve/debounce',
      'achieve/throttle',
      'achieve/promise',
      'achieve/curry',
      'achieve/instanceof',
      'achieve/deepClone'
    ]
  }
}
