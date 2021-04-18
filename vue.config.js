
module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                // target:'http://mall-pre.springboot.cn',
                // target:'http://121.199.11.89/api/',
                target:'http://127.0.0.1/',
                changeOrigin:true, //是否将主机头原点更改为目标的url地址
                pathRewrite:{ //转发地址
                    '/api':''
                }
            }
        }
    }
}