const bookWriter=document.getElementById("input-one");
const bookName=document.getElementById("input-two");
const bookCode=document.getElementById("input-three");
const addButton=document.getElementById("add-button");
const tbody=document.getElementById("t-body");

class Book{

    constructor(writer,name,code){
        this.writer=writer;
        this.name=name;
        this.code=code;
    }

arayuzeEkle(){

    const satir=document.createElement("tr");

    const yazarAlani=document.createElement("td");
    yazarAlani.textContent=this.writer;
    satir.appendChild(yazarAlani);

    const kitapAlani=document.createElement("td");
    kitapAlani.textContent=this.name;
    satir.appendChild(kitapAlani);

    const codeAlani= document.createElement("td");
    codeAlani.textContent=this.code;
    satir.appendChild(codeAlani);

    tbody.appendChild(satir);

    
    
    bookWriter.value='';
    bookName.value='';
    bookCode.value='';

    // e.preventDefault();
}
}
addButton.addEventListener("click",function(){

    const writer=bookWriter.value;
    const name=bookName.value;
    const code=bookCode.value;
    
    if(writer==="" || name===""|| code===""){
        alert("Lütfen Gerekli Alanları doldurunuz");
        satir.removeChild(book)
    }
    

    const book=new Book(writer,name,code);
    book.arayuzeEkle();

    
})