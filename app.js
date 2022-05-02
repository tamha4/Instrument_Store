let instrument = [
    {
        name:"Fender Frontman 10G Electric Guitar Amplifier",
        price:"99.99",
        image:"https://media.sweetwater.com/api/i/f-webp__q-82__ha-9d017ceac6a88013__hmac-2221bd04ce0321fb33db3ce8fc1733b39fa0162d/images/guitars/StratECBLK/US21042652/US21042652-front-large.jpg.auto.webp",
        Brand: "Fender",
        fender: "red",

    },
    {
        name:"Fender Eric Clapton Stratocaster",
        price:"1,999.99",
        image:"https://m.media-amazon.com/images/I/81zMm+OVoZL._AC_SX679_.jpg",
        Brand: "Fender",
        fender:"red",

    }
];

let instrumentTwo = [
    {
        name:"Yamaha F335 Acoustic Guitar",
        price:"169.99",
        image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmMNGqaYnumLfpzPM3YXKf93512zee0dr33Cu_icbdRGHoYyVSXJl0Wu107jE4nJvwejhJGkw-azoownk3K-eI6G0QUbuq4tDv4HipxsBF&usqp=CAE",
        Brand: "Yamaha",
        yamaha: "green"
    },
    {
        name:"Bass Drum Cranberry Red",
        price:"709.99",
        image:"https://media.guitarcenter.com/is/image/MMGS7/J07117000002000-00-720x720.jpg",
        Brand: "Yamaha",
        yamaha: "green"

    }
];

let instrumentThree = [
    {
        name:"Maton EBG 808C Michael Fix Used",
        price:"2,199.99",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_Bmn8xpuDNTFbLhfn8JoBZwgM04Ge_eY_vqSOyDBbUJHDXmA0_Mv4u_1IHeMw-6uIIWEOUOpaeY3Bax5OAGljDwLAJZGraYGAbge6Mz7E3zY1ZkJbL0bA&usqp=CAE",
        Brand:"Maton",
        maton: "blue",

    },
    {
        name:"Maton SRS70C Acoustic Guitar",
        price:"2,699.00",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgacpqTztp4f3jr702iTyDnZzDJOE_VcGOl_PY4lrmi8ua3XF7DccJQmOcrFTSUoKhKDM1RhFZFRmHNIAe-MOO-y5sypo6EDZsKXWDX4Tr8GtVUiTg415LGw&usqp=CAE",
        Brand: "Maton",
        maton: "blue",

    }

];


let mainBody = document.querySelector("body");
let firsPopup = document.createElement("div");

firsPopup.style.width = "100%";
firsPopup.classList.add("popUp");
firsPopup.style.height = "100hv";
firsPopup.style.backgroundColor = "grey";
firsPopup.style.opacity = "0.5";


//one

let imgContainer = document.createElement("div");
imgContainer.style.position = "absolute";
imgContainer.style.left = "50%";
imgContainer.style.top = "50%";
imgContainer.style.transform = "translate(-50%, -50%)";


let images = document.createElement("img");
images.src = instrument[0].image;
images.style.display = "flex";
images.style.width = "50%";
images.style.margin = "auto";

let firstName = document.createElement("h1");
firstName.textContent = instrument[0].name;
firstName.style.textAlign = "center";

let instrumentPrice = document.createElement("h2");
instrumentPrice.textContent = "$"+instrument[0].price;
instrumentPrice.style.textAlign = "center";

let instrumentBrand = document.createElement("h3");
instrumentBrand.textContent = instrument[0].Brand;
instrumentBrand.style.textAlign = "center";

imgContainer.appendChild(images);
imgContainer.appendChild(firstName);
imgContainer.appendChild(instrumentPrice);
imgContainer.appendChild(instrumentBrand);

imgContainer.style.display = "none";
firsPopup.appendChild(imgContainer);

//two

let secondContainer = document.createElement("div");
secondContainer.style.position = "absolute";
secondContainer.style.top = "50%";
secondContainer.style.left = "50%";
secondContainer.style.transform = "translate(-50%,-50%)";

let image2 = document.createElement("img");
image2.src = instrument[1].image;
image2.style.display = "flex";
image2.style.width = "50%";
image2.style.margin = "auto";

let secondName = document.createElement("h1");
secondName.textContent = instrument[1].name;
secondName.style.textAlign = "center";

let instrumentPrice2 = document.createElement("h2");
instrumentPrice2.textContent = "$"+instrument[1].price;
instrumentPrice2.style.textAlign = "center";

let instrumentBrand2 = document.createElement("h3");
instrumentBrand2.textContent = instrument[1].Brand;
instrumentBrand2.style.textAlign = "center";

secondContainer.appendChild(image2);
secondContainer.appendChild(secondName);
secondContainer.appendChild(instrumentPrice2);
secondContainer.appendChild(instrumentBrand2);
secondContainer.style.display = "none";
firsPopup.appendChild(secondContainer);

// three

let thirdContainer = document.createElement("div");
thirdContainer.style.position = "absolute";
thirdContainer.style.top = "50%";
thirdContainer.style.left = "50%";
thirdContainer.style.transform = "translate(-50%,-50%)";

let image3 = document.createElement("img");
image3.src = instrumentTwo[0].image;
image3.style.display = "flex";
image3.style.width = "50%";
image3.style.margin = "auto";

let thirdName = document.createElement("h1");
thirdName.textContent = instrumentTwo[0].name;
thirdName.style.textAlign = "center";

let instrumentPrice3 = document.createElement("h2");
instrumentPrice3.textContent = "$"+instrumentTwo[0].price;
instrumentPrice3.style.textAlign = "center";

let instrumentBrand3 = document.createElement("h3");
instrumentBrand3.textContent = instrumentTwo[0].Brand;
instrumentBrand3.style.textAlign = "center";

thirdContainer.appendChild(image3);
thirdContainer.appendChild(thirdName);
thirdContainer.appendChild(instrumentPrice3);
thirdContainer.appendChild(instrumentBrand3);
thirdContainer.style.display = "none";
firsPopup.appendChild(thirdContainer);
firsPopup.style.display = "none";

//four

let fourthContainer = document.createElement("div");
fourthContainer.style.position = "absolute";
fourthContainer.style.top = "50%";
fourthContainer.style.left = "50%";
fourthContainer.style.transform = "translate(-50%,-50%)";

let image4 = document.createElement("img");
image4.src = instrumentTwo[1].image;
image4.style.display = "flex";
image4.style.width = "50%";
image4.style.margin = "auto";

let fourthName = document.createElement("h1");
fourthName.textContent = instrumentTwo[1].name;
fourthName.style.textAlign = "center";

let instrumentPrice4 = document.createElement("h2");
instrumentPrice4.textContent = "$"+instrumentTwo[1].price;
instrumentPrice4.style.textAlign = "center";

let instrumentBrand4 = document.createElement("h3");
instrumentBrand4.textContent = instrumentTwo[1].Brand;
instrumentBrand4.style.textAlign = "center";

fourthContainer.appendChild(image4);
fourthContainer.appendChild(fourthName);
fourthContainer.appendChild(instrumentPrice4);
fourthContainer.appendChild(instrumentBrand4);
fourthContainer.style.display = "none";
firsPopup.appendChild(fourthContainer);
firsPopup.style.display = "none";


//five

let fifthContainer = document.createElement("div");
fifthContainer.style.position = "absolute";
fifthContainer.style.top = "35%";
fourthContainer.style.left = "50%";
fourthContainer.style.transform = "translate(-50%,-50%)";

let image5 = document.createElement("img");
image5.src = instrumentThree[0].image;
image5.style.display = "flex";
image5.style.width = "55%";
image5.style.marginLeft = "130%";

let fifthName = document.createElement("h1");
fifthName.textContent = instrumentThree[0].name;
fifthName.style.textAlign = "center";
fifthName.style.width = "50%";
fifthName.style.marginLeft = "130%";

let instrumentPrice5 = document.createElement("h2");
instrumentPrice5.textContent = "$"+instrumentThree[0].price;
instrumentPrice5.style.textAlign = "center";
instrumentPrice5.style.width = "50%";
instrumentPrice5.style.marginLeft = "130%";

let instrumentBrand5 = document.createElement("h3");
instrumentBrand5.textContent = instrumentThree[0].Brand;
instrumentBrand5.style.textAlign = "center";
instrumentBrand5.style.width = "50%";
instrumentBrand5.style.marginLeft = "130%";

fifthContainer.appendChild(image5);
fifthContainer.appendChild(fifthName);
fifthContainer.appendChild(instrumentPrice5);
fifthContainer.appendChild(instrumentBrand5);
fifthContainer.style.display = "none";
firsPopup.appendChild(fifthContainer);
firsPopup.style.display = "none";

//sixth

let sixthContainer = document.createElement("div");
sixthContainer.style.position = "absolute";
sixthContainer.style.top = "50%";
sixthContainer.style.left = "50%";
sixthContainer.style.transform = "translate(-50%,-50%)";

let image6 = document.createElement("img");
image6.src = instrumentThree[1].image;
image6.style.display = "flex";
image6.style.width = "50%";
image6.style.margin = "auto";

let sixthName = document.createElement("h1");
sixthName.textContent = instrumentTwo[1].name;
sixthName.style.textAlign = "center";

let instrumentPrice6 = document.createElement("h2");
instrumentPrice6.textContent = "$"+instrumentThree[1].price;
instrumentPrice6.style.textAlign = "center";

let instrumentBrand6 = document.createElement("h3");
instrumentBrand6.textContent = instrumentThree[1].Brand
instrumentBrand6.style.textAlign = "center";

sixthContainer.appendChild(image6);
sixthContainer.appendChild(sixthName);
sixthContainer.appendChild(instrumentPrice6);
sixthContainer.appendChild(instrumentBrand6);
sixthContainer.style.display = "none";
firsPopup.appendChild(sixthContainer);
firsPopup.style.display = "none";

mainBody.appendChild(firsPopup);






let newDiv = document.createElement("div");
newDiv.className = ".popUp";
document.body.appendChild(newDiv);

for(obj of instrument) {
    let innerDiv = document.createElement("div");
    newDiv.appendChild(innerDiv);


    innerDiv.classList.add("product");
    // innerDiv.classList.add("fender");
    // innerDiv.classList.add("maton");
    // innerDiv.style.position = "relative";
    let image = document.createElement("img");
    image.src = obj.image;
    image.style.position = "relative";

    if (obj.name === "Fender Frontman 10G Electric Guitar Amplifier") {
        image.src = "https://media.sweetwater.com/api/i/f-webp__q-82__ha-9d017ceac6a88013__hmac-2221bd04ce0321fb33db3ce8fc1733b39fa0162d/images/guitars/StratECBLK/US21042652/US21042652-front-large.jpg.auto.webp";
    } else{
        image.src = "https://m.media-amazon.com/images/I/81zMm+OVoZL._AC_SX679_.jpg";
    }

    innerDiv.appendChild(image);

    innerDiv.onclick = function (e){
        let PopUp = e.path[0];
        if(PopUp.src === images.src){
            firsPopup.style.display= "block";
            imgContainer.style.display = "block";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display="none";
            // fifthContainer.style.display="none";
            // sixthContainer.style.display="none";
        }
        else if(PopUp.src === image2.src){
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "block";
            thirdContainer.style.display = "none";
            fourthContainer.style.display="none";
            // fifthContainer.style.display="none";
            // sixthContainer.style.display="none";
        }
        else if(PopUp.src === image3.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "block";
            fourthContainer.style.display="none";
            // fifthContainer.style.display="none";
            // sixthContainer.style.display="none";
        }
        else if(PopUp.src === image4.src){
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display="block";
            // fifthContainer.style.display="none";
            // sixthContainer.style.display="none";
        }
        else if(PopUp.src === image5.src){
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display="none";
            // fifthContainer.style.display="block";
            // sixthContainer.style.display="none";
        }
        else if(PopUp.src === image6.src){
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display="none";
            // fifthContainer.style.display="none";
            // sixthContainer.style.display="block";
        }
    }

    firsPopup.onclick = function () {
        firsPopup.style.display = "none";
        imgContainer.style.display = "none";
        secondContainer.style.display = "none";
        thirdContainer.style.display = "none";
        fourthContainer.style.display="none";
        // fifthContainer.style.display="none";
        // sixthContainer.style.display="none";
    }

    let instrumentName = document.createElement("p");
    let text = obj.name;
    instrumentName.append(text);
    innerDiv.append(instrumentName);
}

for(obj of instrumentTwo) {
    let innerDivTwo = document.createElement("div");
    newDiv.appendChild(innerDivTwo);

    innerDivTwo.classList.add("productTwo");

    let imageTwo = document.createElement("img");
    imageTwo.src = obj.image;

    imageTwo.style.position = "relative";
    imageTwo.style.width = "100%";

    if (obj.name === "Yamaha F335 Acoustic Guitar") {
        imageTwo.src = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmMNGqaYnumLfpzPM3YXKf93512zee0dr33Cu_icbdRGHoYyVSXJl0Wu107jE4nJvwejhJGkw-azoownk3K-eI6G0QUbuq4tDv4HipxsBF&usqp=CAE";
    } else {
        imageTwo.src = "https://media.guitarcenter.com/is/image/MMGS7/J07117000002000-00-720x720.jpg";
    }

    innerDivTwo.appendChild(imageTwo);

    innerDivTwo.onclick = function (e) {
        let PopUptwo = e.path[0];
        if (PopUptwo.src === images.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "block";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUptwo.src === image2.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "block";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUptwo.src === image3.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "block";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUptwo.src === image4.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "block";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUptwo.src === image5.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "block";
            sixthContainer.style.display = "none";
        } else if (PopUptwo.src === image6.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "block";
        }
    }

    firsPopup.onclick = function () {
        firsPopup.style.display = "none";
        imgContainer.style.display = "none";
        secondContainer.style.display = "none";
        thirdContainer.style.display = "none";
        fourthContainer.style.display="none";
        fifthContainer.style.display="none";
        sixthContainer.style.display="none";
    }

    let instrumentName = document.createElement("p");
    let text = obj.name;
    instrumentName.append(text);
    innerDivTwo.append(instrumentName);
}

for(obj of instrumentThree) {
    let innerDivThree = document.createElement("div");
    newDiv.appendChild(innerDivThree);

    innerDivThree.classList.add("productThree");

    let imageThree = document.createElement("img");
    imageThree.src = obj.image;

    imageThree.style.position = "relative";
    imageThree.style.width = "90%";

    if (obj.name === "Maton EBG 808C Michael Fix Used") {
        imageThree.src = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_Bmn8xpuDNTFbLhfn8JoBZwgM04Ge_eY_vqSOyDBbUJHDXmA0_Mv4u_1IHeMw-6uIIWEOUOpaeY3Bax5OAGljDwLAJZGraYGAbge6Mz7E3zY1ZkJbL0bA&usqp=CAE";
    } else {
        imageThree.src = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgacpqTztp4f3jr702iTyDnZzDJOE_VcGOl_PY4lrmi8ua3XF7DccJQmOcrFTSUoKhKDM1RhFZFRmHNIAe-MOO-y5sypo6EDZsKXWDX4Tr8GtVUiTg415LGw&usqp=CAE";

    }

    innerDivThree.appendChild(imageThree);
    innerDivThree.onclick = function (e) {
        let PopUpthree = e.path[0];
        if (PopUpthree.src === images.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "block";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUpthree.src === image2.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "block";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUpthree.src === image3.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "block";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUpthree.src === image4.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "block";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "none";
        } else if (PopUpthree.src === image5.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "block";
            sixthContainer.style.display = "none";
        } else if (PopUpthree.src === image6.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";
            fourthContainer.style.display = "none";
            fifthContainer.style.display = "none";
            sixthContainer.style.display = "block";
        }
    }

    firsPopup.onclick = function () {
        firsPopup.style.display = "none";
        imgContainer.style.display = "none";
        secondContainer.style.display = "none";
        thirdContainer.style.display = "none";
        fourthContainer.style.display="none";
        fifthContainer.style.display="none";
        sixthContainer.style.display="none";
    }

        let instrumentName = document.createElement("p");
        let text = obj.name;
        instrumentName.append(text);
        innerDivThree.append(instrumentName);
}

