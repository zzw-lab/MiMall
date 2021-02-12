module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/pay':{
                target:'https://order.imooc.com',
                changeOrigin:false,
                pathRewrite:{
                    '/pay':'/pay'
                }
            }
        }
    }
}