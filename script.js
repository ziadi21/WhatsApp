let whatsapp = [

{
	name:"John",
	number:"03340000000",
	email:"john@gmail.com",
	status:"Before anything else, preparation is the key to success. ",
	lastTime:"yesterday",
	lastMsg:"Hey Girl Are You There?....",
	messageCheck: "sent",
	img:"boy.jpg"
},
{
	name:"Ileana",
	number:"03340000011",
	email:"Ileana@gmail.com",
	status:"Love is the most dangerous thing in the world.",
	lastTime:"yesterday",
	lastMsg:"Hey Boy Are You There?....",
	messageCheck: "waiting",
	img:"girl1.jpg"
},
{
	name:"Fazil",
	number:"03340000022",
	email:"Fazil@gmail.com",
	status:"Silence is the most powerful scream ",
	lastTime:"yesterday",
	lastMsg:"Hey Girl Are You There?.....",
	messageCheck: "waiting",
	img:"boy2.jpg"
},
{
	name:"Barbie",
	number:"03340000033",
	email:"Barbie@gmail.com",
	status:"An unjust law is no law at all.",
	lastTime:"yesterday",
	lastMsg:"Hey Girl Are You There?....",
	messageCheck: "seen",
	img:"girl2.jpg"
},
{

	name:"Baby Boy",
	number:"03340000044",
	email:"babyBoy@gmail.com",
	status:"Attitude is Everything",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"baby.jpg"
	
},
{
	name:"Haddy",
	number:"00225323353",
	email:"Haddy@gmail.com",
	status:"I dont trust Words,I trust Actions.",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"boy3.jpg"
},
{
	name:"Mehmil",
	number:"0022643233",
	email:"Mehmil@gmail.com",
	status:"War is a crime which involves all other crimes.",
	lastTime:"Tommorow",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"girl3.jpg"
},
{

	name:"Rabeel",
	number:"03340000000",
	email:"Raheel@gmail.com",
	status:"I am Cool",
	lastTime:"yesterday",
	messageCheck: "seen",
	lastMsg:"blah blah blah blah blah....",
	img:"alpha.jpg"
},
{
	name:"Mavra",
	number:"0022643233",
	email:"Mavra@gmail.com",
	status:"True Friends dont judge eachOther... ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"cool.jpg"
},
{
	name:"Tabeer",
	number:"0022643233",
	email:"Tabeer@gmail.com",
	status:"If you can\\\'t do what you want, do what you can.",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"doll.jpg"
},
{
	name:"Inaya",
	number:"0022643233",
	email:"inaya@gmail.com",
	status:"Things ends but memories last forever.",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"sorry.jpg"
},
{
	name:"Alisha",
	number:"00922303",
	email:"alisha@gmail.com",
	status:"Silent gratitude isn\'t much use to anyone.",
	lastTime:"Tommorow",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"music.jpg"

},
{
	name:"Saira",
	number:"002822933",
	email:"saira@gmail.com",
	status:"True will is wishing backed by power.",
	lastTime:"Today",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "seen",
	img:"saira.png"
}
];


function intilizer(){
	const contactlistEL = document.querySelector(".all");
	for (let i = 0; i < whatsapp.length; i++) {

		let icon;
		if (whatsapp[i].messageCheck ==='seen') {
			icon="check-double";
		}else if (whatsapp[i].messageCheck === 'sent') {
			icon ="check";
		} else {
			icon = "clock";
		}

		contactlistEL.innerHTML += `

		<section class="person-item" onclick="changeDetails(${i})">
		<div class="person-img" style="background-image: url(images/${whatsapp[i].img});"></div>
		<div class="detail">
		<div class="centered ">
		<p class="name">${whatsapp[i].name}</p>

		<div class="icon1">
		<i class="fas fa-${icon}"></i>
		<p class="msg">${whatsapp[i].lastMsg}</p>
		</div>
		</div>
		<div>
		<p class="time">${whatsapp[i].lastTime}</p>
		</div>
		</div>
		</section>


		`
	}
}

function changeDetails(indexNumb) {
	document.querySelector("#show-img").style.backgroundImage = `url(images/${whatsapp[indexNumb].img})`;
	document.querySelector("#name").innerHTML = whatsapp[indexNumb].name;
	document.querySelector("#numb").innerHTML =`<i class="fas fa-phone" style="color: green; font-size:30px;margin-right: 13px"></i> ${whatsapp[indexNumb].number}`;
	document.querySelector("#email").innerHTML =`<i class="far fa-envelope" style="color: red; font-size:30px;margin-right: 13px"></i>${whatsapp[indexNumb].email}`;
	document.querySelector(".status").innerHTML = whatsapp[indexNumb].status;
}



