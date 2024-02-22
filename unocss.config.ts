import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: {
    'flexbox': 'flex justify-center items-center'
  }
});
