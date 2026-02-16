// Simple client-side router for Job Notification Tracker routes

(function () {
  var ROUTES = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/saved": "Saved",
    "/digest": "Digest",
    "/settings": "Settings",
    "/proof": "Proof",
  };

  function getPathFromHash() {
    var hash = window.location.hash || "";
    if (!hash || hash === "#/" || hash === "#") {
      return "/";
    }
    // Expect format "#/path"
    return hash.replace(/^#/, "");
  }

  function setHashForPath(path) {
    if (path === "/") {
      window.location.hash = "#/";
    } else {
      window.location.hash = "#" + path;
    }
  }

  function updateRoute(path) {
    var titleEl = document.getElementById("route-title");
    var subtitleEl = document.getElementById("route-subtitle");

    // Unknown route → calm 404 state
    if (!ROUTES[path]) {
      if (titleEl) {
        titleEl.textContent = "Page Not Found";
      }
      if (subtitleEl) {
        subtitleEl.textContent =
          "This section does not exist yet. Use the navigation above to continue.";
      }

      var unknownLinks = document.querySelectorAll(".kn-nav__link");
      unknownLinks.forEach(function (link) {
        link.classList.remove("kn-nav__link--active");
      });

      return;
    }

    var title = ROUTES[path];
    if (titleEl) {
      titleEl.textContent = title;
    }
    if (subtitleEl) {
      subtitleEl.textContent = "This section will be built in the next step.";
    }

    // Update nav active link
    var links = document.querySelectorAll(".kn-nav__link");
    links.forEach(function (link) {
      var route = link.getAttribute("data-route");
      if (route === path || (path === "/" && route === "/dashboard")) {
        link.classList.add("kn-nav__link--active");
      } else {
        link.classList.remove("kn-nav__link--active");
      }
    });
  }

  function handleNavClick(evt) {
    var link = evt.target.closest(".kn-nav__link");
    if (!link) return;
    evt.preventDefault();
    var route = link.getAttribute("data-route") || "/dashboard";
    setHashForPath(route);
  }

  function setupNavToggle() {
    var nav = document.querySelector(".kn-nav");
    var toggle = document.querySelector(".kn-nav__toggle");
    if (!nav || !toggle) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("kn-nav--open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when a nav link is selected (on small screens)
    nav.addEventListener("click", function (evt) {
      if (evt.target.closest(".kn-nav__link")) {
        nav.classList.remove("kn-nav--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  window.addEventListener("hashchange", function () {
    var path = getPathFromHash();
    updateRoute(path);
  });

  window.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector(".kn-nav");
    if (nav) {
      nav.addEventListener("click", handleNavClick);
    }

    setupNavToggle();

    var initialPath = getPathFromHash();
    updateRoute(initialPath);
  });
})();

