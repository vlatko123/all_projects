$(function () {


    function showBikes(bikes) {
        let cards = document.querySelector('.card')
        bikes.forEach(function (element) {
            cards.innerHTML += `<div class="col-md-4 space">
                                <div class="cardStyle">
                                         <img src="img/${element.image}.png" class="img-responsive">
                                 <div class="colorPart">
                                         <h2 class = "fontSize">${element.name}</h2>
                                         <p class = "size">${element.price} $</p>
                                </div>
                                 </div>
                                </div>`

        });
    }


    $('.bikeBrand').each(function(){
        let brand = $(this).text();  
        console.log("on load brand name: " + brand);
              
        let countPerBrand = products.filter((bike) => bike.brand === brand).length;
        $(this).next(".badge").text(countPerBrand);
    });

    $('.gender').each(function(){
        let gender = $(this).text().toLowerCase();  
        console.log("on load brand name: " + gender);
              
        let countPerGender = products.filter((sex) => sex.gender.toLowerCase() === gender).length;
        $(this).next(".badge").text(countPerGender);
    });

    $('.all').next('.badge').text(products.length);


    

    function removeAll() {
        $('.card').empty();
    }

    showBikes(products);

    $('#showAll').on('click', function(){
        removeAll();
        showBikes(products);
    })

    $('#male').on('click', function () {
        let filterMale = products.filter((product) => product.gender === "MALE");
        removeAll();
        showBikes(filterMale);
    })

    $('#female').on('click', function(){
        let filterFemale = products.filter((product)=> product.gender === "FEMALE");
        removeAll();
        showBikes(filterFemale);
    })
    // $('#leGrandBikes').on('click', function(){
    //     let firstType = products.filter((product) => product.brand === "LE GRAND BIKES");
    //     removeAll();
    //     showBikes(firstType);
    // })

    $('.bikeBrand').on('click', function(){
        let brandFilter = $(this).text();        
        let filterBrands = products.filter((bike) => bike.brand === brandFilter);
        removeAll();
        showBikes(filterBrands);
    })

    $('.hover').find('a').hover(
        function(){
          $(this).css({color:'orange'})
    },function(){
        $(this).css({color:'black'})
    }
    )
    $('.hover').find('span').hover(
        function(){
          $(this).css({backgroundColor:'orange'})
    },function(){
        $(this).css({backgroundColor:'#d3d3d3'})
    }
    )
  
    






})




// write your code here
// use products array from the other file in here 
// (yes you can use it, it doesn't matter if it's from another file)\

