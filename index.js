const questionsBtn = document.querySelectorAll(".questions__btn");

questionsBtn.forEach((item) => {
	item.addEventListener("click", () => {
		item.nextElementSibling.classList.toggle("questions__desc--active");
	});
});
