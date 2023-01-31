const hideMessage = document.querySelectorAll("hide_message");
const idIsSame = document.querySelector(".id_issame");
const idIsNo = document.querySelector(".id_isno");
const idForm = document.querySelector(".id_form");
const pwIsntSame = document.querySelector(".pw_issame");

const id = document.querySelector(".id"); //id input
const pw = document.querySelector(".pw"); //pw input
const pwCheck = document.querySelector(".pw_check"); //pw 확인 input
const sameCheck = document.querySelector(".same__btn"); //id 중복확인 버튼

sameCheck.addEventListener("click", function () {
	if (id.value === "") {
		console.log("빈칸으로 클릭되는 중");
		idIsNo.classList.remove("hide");
		setTimeout(function () {
			idIsNo.classList.add("hide");
		}, 3000);
		id.value === "";
	} else if (!(id.value.includes("@") && id.value.includes("."))) {
		console.log("ff 눌린채로 클릭되는 중");
		idForm.classList.remove("hide");
		setTimeout(function () {
			idForm.classList.add("hide");
		}, 3000);
		id.value === "";
	} else {
		idIsSame.classList.remove("hide");
		setTimeout(function () {
			idIsSame.classList.add("hide");
		}, 3000);
		id.value === "";
	}
});

pwCheck.addEventListener("click", function () {
	console.log("focus 되는 중");
	if (pwCheck.value !== pw.value) {
		console.log("if문 동작중");
		pwIsntSame.classList.remove("hide");
	} else if (pwCheck.value === pw.value) {
		pwIsntSame.classList.add("hide");
	}
});

function noRegister() {
	swal("!!", "아이디를 입력해주세요");
}

function noReady() {
	swal("제주", "서비스 준비중입니다");
}
