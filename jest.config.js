const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup.ts"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.module.css$": "identity-obj-proxy",
        "\\.css$": "<rootDir>/src/test-utils/css.ts",
    },
    testEnvironment: "jsdom",
    transform: {
        "\\.(js|jsx|ts|tsx)$": [
            "babel-jest",
        ],
    },
    transformIgnorePatterns: [],
}

export default config
