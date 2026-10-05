 const dot = document.querySelector(".dot")
document.addEventListener("mousemove", (e)=>{
    dot.style.left =  `${e.clientX}px`
    dot.style.top =  `${e.clientY}px`
})

/* MODAL AGENDAR CONSULTA */
const btn = document.getElementById("btn-agendar")
const btn_opcao = document.getElementById("btn-abrir-opcao")
const modals = document.getElementById("modal")
const fechar = document.getElementById("fechar")
const Inf = document.getElementById("Inf")
const fechar_modal_opcao = document.getElementById("fechar-modal-opcao")
const Modal_carde = document.getElementById("caida-modal")
const fechar_modal = document.getElementById("fechar-modal")
const Fechar_opcao = document.getElementById("Fechar_opcao")

function  agendarConsulta(){
     modals.classList.add("ativo")
}

function  fecharModal(){
      modals.classList.remove("ativo");
   
}

function abriopcao(){
  Fechar_opcao.style.display = "flex"
}

fechar_modal_opcao.addEventListener("click", ()=>{
   Fechar_opcao.style.display = "none"
})
 
/*Abrir ocao modal*/
btn_opcao.addEventListener("click", ()=>{
   abriopcao()
})

/*Abrir modal*/
 function  AbriModalacesso(){
   Modal_carde.classList.add("ativo")
 }

 function   fehcarModalacesso(){
   Modal_carde.classList.remove("ativo")
 }

Inf.addEventListener("click", ()=>{
     AbriModalacesso() 
})

fechar_modal.addEventListener("click", ()=>{
  fehcarModalacesso()
})

 


document.addEventListener("DOMContentLoaded", () => {
  const alvos = [
    ".carde",
    ".carde-opcao",
    ".carde-historico",
    ".carde-img-ofertas",
    ".detalhes",
    ".header-sobre",
    ".titulo-opcao",
    ".contactos",
    ".dados-img",
    ".dados-links",
    ".dados-contactos",
  ];

  const elementos = document.querySelectorAll(alvos.join(","));
  if (!elementos.length || !("IntersectionObserver" in window)) return;

  // atraso escalonado: cada irmao entra um pouco depois do anterior
  elementos.forEach((el) => {
    const irmaos = [...el.parentElement.children].filter((c) =>
      c.matches(alvos.join(","))
    );
    const posicao = irmaos.indexOf(el);
    el.style.setProperty("--d", `${posicao * 0.15}s`);
    el.classList.add("reveal");
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target); // anima so uma vez
        }
      });
    },
    { threshold: 0.15 }
  );

  elementos.forEach((el) => observador.observe(el));
});


