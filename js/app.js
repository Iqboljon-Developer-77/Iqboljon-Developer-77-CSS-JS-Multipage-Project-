window.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const phoneButton = document.querySelector(".phone-btn");
  const mobileCloseBtn = document.querySelector(".fa-x");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuButton.addEventListener("click", closeMobileMenu);
  mobileCloseBtn.addEventListener("click", closeMobileMenu);
  function closeMobileMenu() {
    mobileMenu.classList.toggle("active");
  }

  const sertificatesContainer = document.querySelector(".sertificates");
  const sertificates = document.querySelectorAll(".sertificate");
  const sInficators = document.querySelectorAll(
    ".sertificates-indicator .indicator "
  );

  const currentItem = document.querySelector(".current-item");

  const stagesIndicators = document.querySelectorAll(".stages-indicator");
  const stagesCircle = document.querySelectorAll(".stages .fa-circle");
  const stagesContents = document.querySelectorAll(".stages-content");

  stagesContents[0].classList.add("show");

  stagesIndicators.forEach((item, idx) => {
    item.addEventListener("click", () => {
      let index = idx;
      stagesIndicators.forEach((element, idx) => {
        if (idx == index) {
          stagesContents[idx].classList.add("show");
          stagesContents[idx].classList.remove("hide");
        } else {
          stagesContents[idx].classList.remove("show");
          stagesContents[idx].classList.add("hide");
        }
        if (idx <= index) {
          element.classList.add("active");
          stagesCircle[idx].classList.add("active");
        } else {
          element.classList.remove("active");
          stagesCircle[idx].classList.remove("active");
        }
      });
    });
  });

  sInficators.forEach((indicator) => {
    indicator.onclick = () => {
      console.log(indicator.id);
      switch (indicator.id) {
        case "2":
          currentItem.style.cssText = `
            left: 48%;
            right: 0%;
          `;
          sertificatesContainer.scrollLeft = sertificates[0].clientWidth + 200;
          console.dir(sertificates[0]);

          break;
        case "1":
          currentItem.style.cssText = `
            left: 0;
            right: 48%;
          `;
          sertificatesContainer.scrollLeft =
            -sertificates[0].clientWidth + -200;
        default:
          break;
      }
    };
  });
});
