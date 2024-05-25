function OpenSideBar() {
  if (
    document.getElementById("conatinerSideBarcontacts").style.display === "flex"
  ) {
    document.getElementById("containerSideBar").classList.add("open");
    document.getElementById("IconX").style.display = "block";
    document.getElementById("IconMenu").style.display = "none";
    document.getElementById("SubContainerNavbar").style.marginLeft = "15%";
    document.getElementById("containerCharts").style.marginLeft = "12%";
    document.getElementById("subNavBarComponent").style.width = "1046px";
    document.getElementById("subNavBarComponent").style.marginLeft = "0%";

    document.querySelectorAll(".subContainerChart").forEach((item) => {
      item.style.marginRight = "15%";
    });

    document.getElementById("FirstChart").style.width = "528px";
    document.getElementById("FirstChart").style.height = "229px";

    document.getElementById("SecondChart").style.width = "481px";
    document.getElementById("SecondChart").style.height = "260px";

    document.getElementById("ThirdChart").style.width = "528px";
    document.getElementById("ThirdChart").style.height = "229px";

    document.getElementById("FourthChart").style.width = "481px";
    document.getElementById("FourthChart").style.height = "260px";

    document.getElementById("FiveChart").style.width = "460px";
    document.getElementById("FiveChart").style.height = "411px";

    document.getElementById("SixChart").style.width = "590px";
    document.getElementById("SixChart").style.height = "400px";
  } else {
    var WidthScreen = screen.width;
    if (WidthScreen <= 400) {
      document.getElementById("subNavBarComponent").style.width = "63%";
      document.getElementById("subNavBarComponent").style.marginRight = "16px";
      document.getElementById("containerChart").style.justifyContent =
        "flex-end";
      document.getElementById("containerSideBar").classList.add("open");
      document.getElementById("IconX").style.display = "block";
      document.getElementById("IconMenu").style.display = "none";
      document.getElementById("SubContainerNavbar").style.marginLeft = "15%";
    } else {
      document.getElementById("containerSideBar").classList.add("open");
      document.getElementById("IconX").style.display = "block";
      document.getElementById("IconMenu").style.display = "none";
      document.getElementById("SubContainerNavbar").style.marginLeft = "15%";
      document.getElementById("containerCharts").style.marginLeft = "12%";
      document.getElementById("subNavBarComponent").style.width = "1283px";
      document.getElementById("subNavBarComponent").style.marginLeft = "14%";

      document.querySelectorAll(".subContainerChart").forEach((item) => {
        item.style.marginRight = "0%";
      });

      document.getElementById("FirstChart").style.width = "690px";
      document.getElementById("FirstChart").style.height = "343px";

      document.getElementById("SecondChart").style.width = "555px";
      document.getElementById("SecondChart").style.height = "300px";

      document.getElementById("ThirdChart").style.width = "690px";
      document.getElementById("ThirdChart").style.height = "345px";

      document.getElementById("FourthChart").style.width = "545px";
      document.getElementById("FourthChart").style.height = "300px";

      document.getElementById("FiveChart").style.width = "345px";
      document.getElementById("FiveChart").style.height = "300px";

      // document.getElementById("Six").style.width = "515px"
      // document.getElementById("Six").style.height = "400px"
    }
  }
}

function OpenSideBarContacts() {
  if (
    window.getComputedStyle(document.getElementById("containerSideBar"))
      .display === "flex"
  ) {
    document.getElementById("conatinerSideBarcontacts").style.display = "flex";
    document.getElementById("IconUser").style.display = "none";
    document.getElementById("IconXContacts").style.display = "flex";
    document.getElementById("subNavBarComponent").style.width = "1046px";
    document.getElementById("subNavBarComponent").style.marginLeft = "0%";
    document.getElementById("containerCharts").style.marginLeft = "0%";

    document.querySelectorAll(".subContainerChart").forEach((item) => {
      item.style.marginRight = "0%";
    });

    document.getElementById("FirstChart").style.width = "528px";
    document.getElementById("FirstChart").style.height = "229px";

    document.getElementById("SecondChart").style.width = "481px";
    document.getElementById("SecondChart").style.height = "260px";

    document.getElementById("ThirdChart").style.width = "528px";
    document.getElementById("ThirdChart").style.height = "229px";

    document.getElementById("FourthChart").style.width = "481px";
    document.getElementById("FourthChart").style.height = "260px";

    document.getElementById("FiveChart").style.width = "460px";
    document.getElementById("FiveChart").style.height = "411px";

    document.getElementById("SixChart").style.width = "590px";
    document.getElementById("SixChart").style.height = "400px";
  } else {
    document.getElementById("conatinerSideBarcontacts").style.display = "flex";
    document.getElementById("IconUser").style.display = "none";
    document.getElementById("IconXContacts").style.display = "flex";
    document.getElementById("subNavBarComponent").style.width = "1046px";
    document.getElementById("subNavBarComponent").style.marginLeft = "-11%";
    document.getElementById("containerCharts").style.marginLeft = "-12%";
    document.getElementById("containerCharts").style.marginLeft = "-12%";

    document.querySelectorAll(".subContainerChart").forEach((item) => {
      item.style.marginRight = "0%";
    });

    document.getElementById("FirstChart").style.width = "690px";
    document.getElementById("FirstChart").style.height = "300px";

    document.getElementById("SecondChart").style.width = "555px";
    document.getElementById("SecondChart").style.height = "300px";

    document.getElementById("ThirdChart").style.width = "690px";
    document.getElementById("ThirdChart").style.height = "300px";

    document.getElementById("FourthChart").style.width = "545px";
    document.getElementById("FourthChart").style.height = "300px";

    document.getElementById("FiveChart").style.width = "585px";
    document.getElementById("FiveChart").style.height = "400px";

    document.getElementById("SixChart").style.width = "700px";
    document.getElementById("SixChart").style.height = "400px";
  }
}

function CloseSideBar() {
  if (
    document.getElementById("conatinerSideBarcontacts").style.display === "flex"
  ) {
    document.getElementById("containerSideBar").classList.remove("open");
    document.getElementById("IconX").style.display = "none";
    document.getElementById("IconMenu").style.display = "block";
    document.getElementById("SubContainerNavbar").style.marginLeft = "0%";
    document.getElementById("subNavBarComponent").style.width = "1283px";
    document.getElementById("subNavBarComponent").style.marginLeft = "-11%";
    document.getElementById("containerCharts").style.marginLeft = "-12%";

    document.querySelectorAll(".subContainerChart").forEach((item) => {
      item.style.marginRight = "0%";
    });

    document.getElementById("FirstChart").style.width = "690px";
    document.getElementById("FirstChart").style.height = "343px";

    document.getElementById("SecondChart").style.width = "555px";
    document.getElementById("SecondChart").style.height = "300px";

    document.getElementById("ThirdChart").style.width = "690px";
    document.getElementById("ThirdChart").style.height = "345px";

    document.getElementById("FourthChart").style.width = "545px";
    document.getElementById("FourthChart").style.height = "300px";

    document.getElementById("FiveChart").style.width = "585px";
    document.getElementById("FiveChart").style.height = "400px";

    document.getElementById("SixChart").style.width = "700px";
    document.getElementById("SixChart").style.height = "400px";
  } else {
    if (WidthScreen <= 400) {
      document.getElementById("subNavBarComponent").style.width = "85%";
      document.getElementById("subNavBarComponent").style.marginRight = "0px";
      document.getElementById("containerChart").style.justifyContent = "center";
      document.getElementById("containerSideBar").classList.remove("open");
      document.getElementById("IconX").style.display = "none";
      document.getElementById("IconMenu").style.display = "block";
      document.getElementById("SubContainerNavbar").style.marginLeft = "";
    } else {
      document.getElementById("containerSideBar").classList.remove("open");
      document.getElementById("IconX").style.display = "none";
      document.getElementById("IconMenu").style.display = "block";
      document.getElementById("SubContainerNavbar").style.marginLeft = "0%";
      document.getElementById("subNavBarComponent").style.width = "1400px";
      document.getElementById("subNavBarComponent").style.marginLeft = "0%";
      document.getElementById("containerCharts").style.marginLeft = "0%";

      document.querySelectorAll(".subContainerChart").forEach((item) => {
        item.style.marginRight = "0%";
      });

      document.getElementById("FirstChart").style.width = "690px";
      document.getElementById("FirstChart").style.height = "343px";

      document.getElementById("SecondChart").style.width = "555px";
      document.getElementById("SecondChart").style.height = "300px";

      document.getElementById("ThirdChart").style.width = "690px";
      document.getElementById("ThirdChart").style.height = "345px";

      document.getElementById("FourthChart").style.width = "545px";
      document.getElementById("FourthChart").style.height = "300px";

      document.getElementById("FiveChart").style.width = "585px";
      document.getElementById("FiveChart").style.height = "400px";

      document.getElementById("SixChart").style.width = "700px";
      document.getElementById("SixChart").style.height = "400px";
    }
  }
}

function CloseSideBarContacts() {
  if (
    window.getComputedStyle(document.getElementById("containerSideBar"))
      .display === "flex"
  ) {
    document.getElementById("conatinerSideBarcontacts").style.display = "none";
    document.getElementById("IconUser").style.display = "flex";
    document.getElementById("IconXContacts").style.display = "none";
    document.getElementById("subNavBarComponent").style.width = "1283px";
    document.getElementById("subNavBarComponent").style.marginLeft = "15%";
    document.getElementById("containerCharts").style.marginLeft = "12%";

    document.querySelectorAll(".subContainerChart").forEach((item) => {
      item.style.marginRight = "15%";
    });

    document.getElementById("FirstChart").style.width = "528px";
    document.getElementById("FirstChart").style.height = "229px";

    document.getElementById("SecondChart").style.width = "481px";
    document.getElementById("SecondChart").style.height = "260px";

    document.getElementById("ThirdChart").style.width = "528px";
    document.getElementById("ThirdChart").style.height = "229px";

    document.getElementById("FourthChart").style.width = "481px";
    document.getElementById("FourthChart").style.height = "260px";

    document.getElementById("FiveChart").style.width = "311px";
    document.getElementById("FiveChart").style.height = "311px";

    document.getElementById("FiveChart").style.width = "585px";
    document.getElementById("FiveChart").style.height = "400px";

    document.getElementById("SixChart").style.width = "700px";
    document.getElementById("SixChart").style.height = "400px";
  } else {
    document.getElementById("conatinerSideBarcontacts").style.display = "none";
    document.getElementById("IconUser").style.display = "flex";
    document.getElementById("IconXContacts").style.display = "none";
    document.getElementById("IconXContacts").style.display = "none";
    document.getElementById("subNavBarComponent").style.width = "1400px";
    document.getElementById("subNavBarComponent").style.marginLeft = "0%";
    document.getElementById("containerCharts").style.marginLeft = "0%";

    document.getElementById("FiveChart").style.width = "585px";
    document.getElementById("FiveChart").style.height = "400px";

    document.getElementById("SixChart").style.width = "700px";
    document.getElementById("SixChart").style.height = "400px";
  }
}

window.onload = () => {
  var win = document.getElementById("FirstChart");
  win.removeAttribute("style");
};
