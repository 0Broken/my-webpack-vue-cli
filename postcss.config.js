//给css添加厂家前缀，这样可以兼容多个浏览器
module.exports = {
    "plugins": [
        require('autoprefixer')({
            overrideBrowserslist: [
                "> 1%",
                "last 2 versions",
            ]
        })
    ]
}