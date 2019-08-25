(function () {
  const openingBtn = document.querySelector('.sidebar__hamburger__icon');
   const sidebar = document.querySelector('.sidebar');

  openingBtn.addEventListener("click", function () {
     
    if (openingBtn.classList.contains("active")) {
      openingBtn.classList.remove("active");
      sidebar.classList.remove('sidebar--opened');
    } else {
      openingBtn.classList.add("active");
    sidebar.classList.add('sidebar--opened');
       }

     }); 

}());
