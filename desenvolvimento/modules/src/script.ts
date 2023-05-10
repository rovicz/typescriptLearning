import { Produto, URL_BASE } from "./global";
import pluginSlide from "./pluginSlide";

console.log(URL_BASE); // https://victorferreira.dev.

const livro: Produto = {
  nome: "Star Wars",
  preco: 50,
}; // retorna normalmente feito o export e import.

pluginSlide("img"); // Criar Slide: img.
