module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["./jest-setup.js"], // Arquivo de configuração adicional
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"], // Ignora as pastas padrão
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Alias para o diretório src
  },
};
