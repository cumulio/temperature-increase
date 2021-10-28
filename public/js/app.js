const dashboardId = "676cc49f-198e-4617-a621-5deef60fe556";
const dashboardOptions = {
  dashboardId: dashboardId,
  container: "#dashboard-container",
  loader: {
    background: "#EEF3F6",
    spinnerColor: "#004CB7",
    spinnerBackground: "#DCDCDC",
    fontColor: "#000000",
  },
};

const loadDashboard = async (elem) => {
  Cumulio.addDashboard(dashboardOptions);
  document.querySelectorAll(".menu-item").forEach((el) => {
    el.classList.remove("active");
  });
  elem.classList.add("active");
  toggleMenu(false);
};

const loadInfo = async (elem) => {
  fetch("info.html").then((r) =>
    r
      .text()
      .then(
        (t) => (document.getElementById("dashboard-container").innerHTML = t)
      )
  );
  document.querySelectorAll(".menu-item").forEach((el) => {
    el.classList.remove("active");
  });
  elem.classList.add("active");
  toggleMenu(false);
};

const toggleMenu = (boolean) => {
  if (boolean) {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("open");
  } else {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
  }
};

function changeLanguage(language, elem) {
  document.querySelectorAll(".language-btn").forEach((el) => {
    el.classList.remove("active");
  });
  elem.classList.add("active");
  toggleMenu(false);
  dashboardOptions.language = language;
  loadDashboard();
}

window.onload = async () => {
  document
    .getElementById("gated-content")
    .style.setProperty("display", "flex", "important");
  loadDashboard(document.getElementById("temp-dashboard"));
};
