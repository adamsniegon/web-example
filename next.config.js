/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: `@import "app/_breakpoints.scss";`
    },
    output: "export"
}

module.exports = nextConfig
