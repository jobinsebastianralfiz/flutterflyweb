
  let mobileNav=document.querySelector(".mobile-nav");
  const menu_btn=document.querySelector(".menu-btn");

  console.log(mobileNav);
  console.log(menu_btn);

  menu_btn.addEventListener('click',()=>{

    let close_btn=document.querySelector(".close-btn");

    console.log("hello");
    mobileNav.style.display = 'block';


    close_btn.addEventListener('click',()=>{

        
        mobileNav.style.display = 'none';
    })

    
    





  })





  
  var tablinks = document.querySelectorAll('.tablinks');
    var tabContents = document.querySelectorAll('.tab-content');

    tablinks.forEach(function(tablink, index) {
        tablink.addEventListener('click', function() {
            openTab(index);
        });
    });

    function openTab(tabIndex) {
        var i;

        for (i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
        }

        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        tabContents[tabIndex].style.display = "block";
        tablinks[tabIndex].classList.add("active");
    }

