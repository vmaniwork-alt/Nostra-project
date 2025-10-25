//   Collection functuion 

var productcontainer=document.getElementById("collection-container")
var searchbox=document.getElementById("searchbox")
var collectionlist=productcontainer.querySelectorAll("div")

searchbox.addEventListener("keyup",()=>{

     var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<collectionlist.length;count=count+1){

        var productname=collectionlist[count].querySelector("h2").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            collectionlist[count].style.display="none"
        }
        else{
            collectionlist[count].style.display="block"
        }
        }
})

//  close the offer box
const closeBtn = document.getElementById("offer-box-close");
const offerBox = document.getElementById("Offer");


closeBtn.addEventListener("click", () => {
    offerBox.style.display = "none";
});

// Close sidebar 
var menubar = document.getElementById("side-menubar");
var side = document.getElementById("side-navbar");
var closenav = document.getElementById("closenav");



menubar.addEventListener("click", function () {
    side.style.marginLeft = "0";
});


closenav.addEventListener("click", function () {
    side.style.marginLeft = "-60%";
});


// checkbox

const checkboxes = document.querySelectorAll('input[name="tags"]');
const products = document.querySelectorAll('#collection-container > div');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterProducts);
});

function filterProducts() {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value.toLowerCase());

  // If nothing selected → show all
  if (selected.length === 0) {
    products.forEach(p => p.style.display = 'block');
    return;
  }

  // Check if "new" or "old" is selected
  const isNew = selected.includes('new');
  const isOld = selected.includes('old');

  // If "new" or "old" selected → random show
  if (isNew || isOld) {
    showRandomProducts();
    return;
  }

  // Normal filtering (summer, party, etc.)
  products.forEach(product => {
    const title = product.querySelector('h2').textContent.toLowerCase();
    const match = selected.some(val => title.includes(val));
    product.style.display = match ? 'block' : 'none';
  });
}

// Function to show random products
function showRandomProducts() {
  const productArray = Array.from(products);
  
  // Hide all first
  productArray.forEach(p => p.style.display = 'none');

  // Shuffle the array
  const shuffled = productArray.sort(() => 0.5 - Math.random());

  // Show random half
  const half = Math.ceil(shuffled.length / 2);
  const randomSet = shuffled.slice(0, half);

  randomSet.forEach(p => p.style.display = 'block');
}


