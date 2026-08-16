function openSettings() {
  const sidebar = document.getElementById("settings-sidebar");
  if (sidebar) {
    sidebar.classList.remove("translate-x-full");
  }
}

function closeSettings() {
  const sidebar = document.getElementById("settings-sidebar");
  if (sidebar) {

    sidebar.classList.add("translate-x-full");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const fontButtons = document.querySelectorAll(".font-option");

  const savedFont = localStorage.getItem("selectedFont");
  if (savedFont) {
    document.body.classList.add(`font-${savedFont}`);

    fontButtons.forEach((btn) => {
      if (btn.getAttribute("data-font") === savedFont) {
        btn.classList.add("active");
        btn.setAttribute("aria-checked", "true");
      }
    });
  }

  fontButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const fontName = btn.getAttribute("data-font");

      document.body.classList.remove(
        "font-cairo",
        "font-alexandria",
        "font-tajawal",
      );

      if (fontName) {
        document.body.classList.add(`font-${fontName}`);
        localStorage.setItem("selectedFont", fontName);
      }

      fontButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-checked", "false");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-checked", "true");
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle-button");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    htmlElement.classList.add("dark");
    if (toggleBtn) toggleBtn.setAttribute("aria-pressed", "true");
  } else if (savedTheme === "light") {
    htmlElement.classList.remove("dark");
    if (toggleBtn) toggleBtn.setAttribute("aria-pressed", "false");
  }


  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      
      const isDark = htmlElement.classList.toggle("dark");

      toggleBtn.setAttribute("aria-pressed", isDark);

      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});


function colorSite() {
    let color = "";
    color += `
    <button
        type="button"
        data-color="blue text-blue-600 bg-blue-600"
        class="w-8 h-8 rounded-full bg-blue-600 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
     
    </button>

    <button
        type="button"
        data-color="purple"
        class="w-8 h-8 rounded-full bg-purple-600 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label="">
    </button>

    <button
        type="button"
        data-color="green"
        class="w-8 h-8 rounded-full bg-emerald-500 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        
    </button>

    <button
        type="button"
        data-color="red"
        class="w-8 h-8 rounded-full bg-rose-500 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        
    </button>

    <button
        type="button"
        data-color="amber"
        class="w-8 h-8 rounded-full bg-amber-500 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        
    </button>

    <button
        type="button"
        data-color="cyan"
        class="w-8 h-8 rounded-full bg-cyan-500 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label=" ">
    </button>
    `;

  
    document.getElementById("theme-colors-grid").innerHTML = color;

   
    const colorMap = {
        blue: "#2563eb",
        purple: "#9333ea",
        green: "#10b981",
        red: "#f43f5e",
        amber: "#f59e0b",
        cyan: "#06b6d4"
    };

    
    const buttons = document.querySelectorAll("#theme-colors-grid button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const selectedColor = btn.getAttribute("data-color");
            const hexColor = colorMap[selectedColor];

            if (hexColor) {
              
                document.documentElement.style.setProperty("--primary-color", hexColor);
               
                localStorage.setItem("selectedColor", hexColor);
            }
        });
    });
}
colorSite();

const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
    document.documentElement.style.setProperty("--primary-color", savedColor);
}