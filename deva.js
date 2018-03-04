function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);

    }
  };
  xhr.send();
}

getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
  eduinfo(data.education);
});
var main=document.querySelector('.flex-parent');

function basicinfo(basic){
  var profile=document.getElementById("profile");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var Email=document.createElement("h4");
  Email.innerHTML=basic.email;
  profile.appendChild(Email);
}
var right=document.createElement("div");
right.classList.add("content-child");
//append
main.appendChild(right);

//education div
var e1=document.createElement("div");
e1.classList.add("edu");
//append
right.appendChild(e1);
var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.textContent=("Education details");
h1.appendChild(document.createElement("HR"));
console.log(right);
//append
e1.appendChild(h1);
function eduinfo(education) {
  for(i in education){
    //course creation
    var h2=document.createElement("h2");
    h2.classList.add("edu1");
    h2.textContent=education[i].course;
    //appendChild
    h1.appendChild(h2);
    //college creation
    var h3=document.createElement("h3");
    h3.classList.add("edu2");
    h3.textContent=education[i].college;
    //appendChild
h2.appendChild(h3);

    //for data getting
    var ul=document.createElement("ul");
    ul.classList.add("edu3");
    h3.appendChild(ul);
   //for(j in education.data){
    var li=document.createElement("li");
    li.textContent= education[i].data;
ul.appendChild(li);
    //}

  }

}
