 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/sidebar.js b/sidebar.js
new file mode 100644
index 0000000000000000000000000000000000000000..0f7a755431e11304c2458397b10d0302501654f2
--- /dev/null
+++ b/sidebar.js
@@ -0,0 +1,41 @@
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
 
EOF
)
