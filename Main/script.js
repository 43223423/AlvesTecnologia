var WidthScreen = screen.width;

function OpenSideBar() {
  document.getElementById("containerSideBar").style.transform =
    "translateX(0%)";
  document.getElementById("IconMenu").style.display = "none";
  document.getElementById("IconX").style.display = "flex";

  if (WidthScreen >= 1200) {
    document.getElementById("SubContainerNavbar").style.marginLeft = "14%";
  } else {
  }
}

function OpenSideBarContacts() {
  if (
    document.getElementById("conatinerSideBarcontacts").style.transform ===
    "translateX(100%)"
  ) {
    document.getElementById("conatinerSideBarcontacts").style.transform =
      "translateX(0%)";
  } else {
    document.getElementById("conatinerSideBarcontacts").style.transform =
      "translateX(100%)";
  }
}

function CloseSideBar() {
  document.getElementById("IconMenu").style.display = "flex";
  document.getElementById("IconX").style.display = "none";
  document.getElementById("containerSideBar").style.transform =
    "translateX(-100%)";
  document.getElementById("SubContainerNavbar").style.marginLeft = "0%";
}

function CloseSideBarContacts() {
  window.getComputedStyle(
    document.getElementById("conatinerSideBarcontacts")
  ).display = "flex";
}

window.onload = () => {
  var win = document.getElementById("FirstChart");
};

function NavigationWeb(url) {
  var HostName = window.location.hostname;
  var Port = window.location.port;
  if (HostName === "127.0.0.1") {
    return (window.location.href = `http://127.0.0.1:${Port}/${url}`);
  } else if (HostName === "thiagohenrique847.github.io") {
    return (window.location.href = `https://thiagohenrique847.github.io/AlvesTecnologia/${url}`);
  }
}
