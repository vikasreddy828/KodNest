// Simple client-side router for Job Notification Tracker routes

(function () {
  var ROUTES = {
    "/": {
      title: "Stop Missing The Right Jobs.",
      subtitle: "Precision-matched job discovery delivered daily at 9AM.",
      showCta: true,
      showSettings: false,
    },
    "/dashboard": {
      title: "Dashboard",
      subtitle:
        "No jobs yet. In the next step, you will load a realistic dataset.",
      showCta: false,
      showSettings: false,
    },
    "/settings": {
      title: "Settings",
      subtitle: "This section will be built in the next step.",
      showCta: false,
      showSettings: true,
    },
    "/saved": {
      title: "Saved Jobs",
      subtitle:
        "Nothing saved yet. In the next step, you will keep the roles that matter here.",
      showCta: false,
      showSettings: false,
    },
    "/digest": {
      title: "Daily Digest",
      subtitle:
        "No digests yet. In the next step, you will see a calm daily summary here.",
      showCta: false,
      showSettings: false,
    },
    "/proof": {
      title: "Proof Workspace",
      subtitle:
        "This page will collect proof artifacts for your builds in the next step.",
      showCta: false,
      showSettings: false,
    },
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
    var ctaEl = document.getElementById("route-cta");
    var settingsEl = document.getElementById("settings-fields");

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

      if (ctaEl) {
        ctaEl.hidden = true;
      }
      if (settingsEl) {
        settingsEl.hidden = true;
      }

      return;
    }

    var config = ROUTES[path];
    if (titleEl) {
      titleEl.textContent = config.title;
    }
    if (subtitleEl) {
      subtitleEl.textContent = config.subtitle;
    }

    if (ctaEl) {
      ctaEl.hidden = !config.showCta;
    }
    if (settingsEl) {
      settingsEl.hidden = !config.showSettings;
    }

    // Update nav active link
    var links = document.querySelectorAll(".kn-nav__link");
    links.forEach(function (link) {
      var route = link.getAttribute("data-route");
      if (route === path) {
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
    var route = link.getAttribute("data-route") || "/";
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

    var ctaEl = document.getElementById("route-cta");
    if (ctaEl) {
      ctaEl.addEventListener("click", function () {
        setHashForPath("/settings");
      });
    }
  });
})();

