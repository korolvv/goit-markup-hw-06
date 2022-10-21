window.addEventListener("DOMContentLoaded", () => {
	(() => {
		const refs = {
			openModalBtn: document.querySelector("[data-modal-open]"),
			closeModalBtn: document.querySelector("[data-modal-close]"),
			modal: document.querySelector("[data-modal]"),
			body: document.querySelector("body"),
			modalWindow: document.querySelector(".modal-window"),
		};

		refs.openModalBtn.addEventListener("click", toggleModal);
		refs.closeModalBtn.addEventListener("click", toggleModal);

		refs.closeModalBtn.addEventListener("click", () => {
			refs.modal.classList.add("closed-style");
			setTimeout(function () {
				refs.modal.classList.remove("closed-style");
			}, 2000);
		});

		function toggleModal() {
			refs.modal.classList.toggle("is-hidden");
			refs.body.classList.toggle("is-visible");
			refs.modalWindow.classList.toggle("modal-window-animation");
		}
	})();
});
