<template>
	<main>
		<h1 style="display: block; margin: 0; cursor: default; text-shadow: 0 0 2px grey; font-family:'Comfortaa', cursive;">Krado</h1>
		<h2 style="display: block; margin-top: 0; cursor: default; text-shadow: 0 0 3px grey; font-family:'Comfortaa', cursive;">Now Brewing...🍷</h2>
		<small style="display: inline-block; margin-top: 24px; padding: 4px 8px; border-radius: 1em; background: #fff; border: solid 1px #ccc;"><a href="https://www.novalumo.llc/" target="_blank">&copy; 2020 Novalumo G.K.</a></small>
	</main>
</template>

<script>
export default {
  layout: '',
  head() {
    return {
      title: 'Krado - The Best CSS Framework Ever.'
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap");
html, body {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f8f9fa;
  color: #333;
  font-family:'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  user-select: none;
}
main {
  text-align: center;
}
a {
  text-decoration: none;
  color: #333;
}
small:hover {
  opacity: .8;
}
h1 {
  font-size: 3.7rem;
}
h2 {
  font-size: 2rem;
}
</style>