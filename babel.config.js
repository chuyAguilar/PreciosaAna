module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-runtime'
    ],
    // Directorio de salida configurado aquí
    // Asegúrate de que coincida con lo que espera Vercel
    outDir: 'build'
  };
  