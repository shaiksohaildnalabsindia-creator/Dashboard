
-+(function () {
-+  function toggleSidebar() {
-+    const sidebar = document.getElementById("sidebar");
-+
-+    if (window.innerWidth <= 768) {
-+      sidebar.classList.add("open");
-+      const overlay = document.getElementById("overlay");
-+      if (overlay) {
-+        overlay.classList.add("show");
-+      }
-+    } else {
-+      sidebar.classList.toggle("collapsed");
-+      document.body.classList.toggle("sidebar-collapsed");
-+    }
-+  }
-+
-+  function closeSidebar() {
-+    const sidebar = document.getElementById("sidebar");
-+    const overlay = document.getElementById("overlay");
-+    if (sidebar) {
-+      sidebar.classList.remove("open");
-+    }
-+    if (overlay) {
-+      overlay.classList.remove("show");
-+    }
-+  }
-+
-+  function setActiveLink() {
-+    const page = location.pathname.split("/").pop();
-+    document.querySelectorAll(".sidebar nav a").forEach(link => {
-+      if (link.dataset.page === page) {
-+        link.classList.add("active");
-+      }
-+    });
-+  }
-+
-+  window.toggleSidebar = toggleSidebar;
-+  window.closeSidebar = closeSidebar;
-+
-+  document.addEventListener("DOMContentLoaded", setActiveLink);
-+})();
- 
-EOF
-)
+(function () {
+  function toggleSidebar() {
+    const sidebar = document.getElementById("sidebar");
+
+    if (window.innerWidth <= 768) {
+      sidebar.classList.add("open");
+      const overlay = document.getElementById("overlay");
+      if (overlay) {
+        overlay.classList.add("show");
+      }
+    } else {
+      sidebar.classList.toggle("collapsed");
+      document.body.classList.toggle("sidebar-collapsed");
+    }
+  }
+
+  function closeSidebar() {
+    const sidebar = document.getElementById("sidebar");
+    const overlay = document.getElementById("overlay");
+    if (sidebar) {
+      sidebar.classList.remove("open");
+    }
+    if (overlay) {
+      overlay.classList.remove("show");
+    }
+  }
+
+  function setActiveLink() {
+    const page = location.pathname.split("/").pop();
+    document.querySelectorAll(".sidebar nav a").forEach(link => {
+      if (link.dataset.page === page) {
+        link.classList.add("active");
+      }
+    });
+  }
+
+  window.toggleSidebar = toggleSidebar;
+  window.closeSidebar = closeSidebar;
+
+  document.addEventListener("DOMContentLoaded", setActiveLink);
+})();
