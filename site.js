

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$(".btn-scroll-to-top").css('display', 'block');
	} else {
		$(".btn-scroll-to-top").css('display', 'none');
	}
}

function topFunction() {
	$('html, body').animate({scrollTop:0 }, 1400);
}
window.onscroll = function() {
	scrollFunction()
};


 //Animar todos os itens na tela que tiverem meu atributo data-anime

 const item = document.querySelectorAll("[data-anime]")

 const animeScroll = () => {
   const windowTop = window.pageYOffset + window.innerHeight * 0.85
   console.log(windowTop)
 
   item.forEach((element) => {
	 if (windowTop > element.offsetTop) {
	   element.classList.add("animate")
	 } else {
	   element.classList.remove("animate")
	 }
   })
 }
 animeScroll()
 
 window.addEventListener("scroll", ()=>{
   animeScroll()
 })
