module.exports = {
    title: 'coldLight-blog',
    description: 'coldLight个人博客',
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: '',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'github',
        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: '',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '',
        // 假如文档放在一个特定的分支下：
        docsBranch: '',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        logo: 'logo.jpg',
        head: [
            ['link', {href: '/logo.jpg', rel: 'shortcut icon'}],
        ],
        search: false,
        searchMaxSuggestions: 10,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { 
                        text: '国际', 
                        items: [
                            { text: 'Japanese', link: '/language/japanese/' }
                        ]
                    },
                ]
            }
        ],
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        displayAllHeaders: true, // 默认值：false
        activeHeaderLinks: false, // 默认值：true
        sidebarDepth: 0,
        sidebar: 'auto', // 自动生成侧栏
        sidebar: [
            '/',
            '/guide/',
            {
                title: '分组1', // 必要的
                path: '', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                initialOpenGroupIndex: -1, // 可选的, 默认值是 0
                children: [
                    '/',
                    '/guide/',
                    // '/config'
                ],
            }
        ]      
    },
    markdown: {
        lineNumbers: true
    }
};