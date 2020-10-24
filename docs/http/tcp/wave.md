---
title: 四次挥手
---

四次挥手即终止 TCP 连接，就是指断开一个 TCP 连接时，需要客户端和服务端总共发送 4 个包以确认连接的断开。

![](https://gitee.com/alvin0216/cdn/raw/master/img/http/wave.png)

## 挥手过程

假设客户端发起关闭连接请求

| 挥手 | 描述                                                                                                                                                                                                                    |
| :--: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1️⃣  | 客户端发送 `FIN,ACK` 包给服务端，告诉他我要关闭请求了，此时进入 `FIN_WAIT` 状态                                                                                                                                         |
|  2️⃣  | 服务端接收到关闭请求后，发送 `ACK` 包给客户端，告诉他我知道了。<br /> 但是我还不确定数据传输完了没，等我确定或者处理完，我这边就发个关闭请求包给你。<br />此时客户端进入 `FIN_WAIT2` 状态，服务端进入 `CLOSE_WAIT` 状态 |
|  3️⃣  | 服务端传输完数据了，发送 `FIN,ACK` 给客户端，告诉他 我传输完数据了，你可以关闭了。                                                                                                                                      |
|  4️⃣  | 客户端收到服务端的关闭请求包后，发送 `ACK` 包给服务端，告诉他我知道了，你可以关闭了。<br /> 服务端收到后，则进入 `CLOSED` 状态。<br /> 由于不确定服务端是否关闭了，客户端还需等待 `2MSL` 后才关闭连接                   |

## 挥手为什么需要四次？

由于 TCP 协议是一种面向连接的、可靠的、基于字节流的运输层通信协议，TCP 是**全双工模式**。

这就意味着，关闭连接时，当 Client 端发出 FIN 报文段时，只是表示 Client 端告诉 Server 端数据已经发送完毕了。

当 Server 端收到 FIN 报文并返回 ACK 报文段，表示它已经知道 Client 端没有数据发送了，但是 Server 端还是可以发送数据到 Client 端的，所以 Server 很可能并不会立即关闭 SOCKET，直到 Server 端把数据也发送完毕。

当 Server 端也发送了 FIN 报文段时，这个时候就表示 Server 端也没有数据要发送了，就会告诉 Client 端，我也没有数据要发送了，之后彼此就会愉快的中断这次 TCP 连接。

## 四次挥手释放连接时，等待 2MSL 的意义?

如果不等待，客户端直接跑路，当服务端还有很多数据包要给客户端发，且还在路上的时候，若客户端的端口此时刚好被新的应用占用，那么就接收到了无用数据包，造成数据包混乱。所以，最保险的做法是等服务器发来的数据包都死翘翘再启动新的应用。
那，照这样说一个 MSL 不就不够了吗，为什么要等待 2 MSL?

- 1 个 MSL 确保四次挥手中主动关闭方最后的 ACK 报文最终能达到对端
- 1 个 MSL 确保对端没有收到 ACK 重传的 FIN 报文可以到达

这就是等待 2MSL 的意义。