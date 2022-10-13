function handleClick() {
  let c = document.querySelectorAll(".category .card"),
    e = document.querySelectorAll(".post"),
    t = document.querySelectorAll(".author"),
    b = document.querySelectorAll(".profile-navgation .arrow");
  function f() {
    b.forEach((i) => {
      i.classList.remove("profileActive");
    });
    this.classList.add("profileActive");
  }

  function a() {
    t.forEach((c) => {
      c.classList.remove("active");
    }),
      this.classList.add("active");
  }
  function i() {
    e.forEach((c) => {
      c.classList.remove("active");
    }),
      this.classList.add("active");
  }
  function s() {
    c.forEach((c) => {
      c.classList.remove("category-active");
    }),
      this.classList.add("category-active");
  }
  e.forEach((c) => {
    c.addEventListener("click", i);
  }),
    c.forEach((c) => {
      c.addEventListener("click", s);
    }),
    t.forEach((c) => {
      c.addEventListener("click", a);
    });
  b.forEach((c) => {
    c.addEventListener("click", f);
  });
}
handleClick();

$(window).scroll(function () {
  let i = $(this).scrollTop();
  $(".anime").each(function () {
    i > $(this).offset().top - 700
      ? $(this).addClass("init-anime")
      : $(this).removeClass("init-anime");
  });
});



