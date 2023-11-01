/** @type {import('next').NextConfig} */

const path = require('path')
const { i18n } = require("./next-i18next.config")

const nextConfig = {
    env: {
        NEXT_PUBLIC_I18N: i18n // alex is having issues here w i18n setup even though it worked last week
    },
    output: 'export', 
    images: {
        unoptimized: true,
    },
	webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/style')],
    }
}

module.exports = nextConfig