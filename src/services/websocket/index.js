const webSocketUrl = 'ws://localhost:19999/webSocket'

class WebSocketUtil {
    constructor (url) {
        const websocket = new WebSocket(webSocketUrl)
        websocket.onopen = this.onOpen()
        websocket.onerror = this.onError()
        websocket.onclose = this.onClose()
    }

    onOpen = () => {
        console.log('WebSocket连接已打开')
    }

    onError = (event) => {
        console.error('WebSocket错误:', event)
    }

    onClose = (event) => {
        console.log('WebSocket连接已关闭:', event)
    }

    // 处理收到的消息
    onMessage (event) {
        if (typeof response === 'string') {
            const msg = JSON.parse(event)
            console.log('收到消息:', msg)
            switch (msg.messageType) {
            case 'friendNotify':
                console.log('好友上线了')
                break
            case 'privateSendTextMessage':
                console.log('私聊文本消息')
                break
            case 'groupSendTextMessage':
                console.log('群聊文本消息')
                break
            case 'privateSendMultipartFileMessage':
                console.log('私聊文件消息')
                break
            case 'groupSendMultipartFileMessage':
                console.log('群聊文件消息')
                break
            }
        }
    }

    // 发送消息
    sendMessage (messageData) {
        this.websocket.send(messageData)
    }

    // 关闭WebSocket连接
    closeConnection () {
        this.websocket.close()
    }
}

export default new WebSocketUtil(webSocketUrl)
