// Theme toggle script
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   document.documentElement.classList.add('dark');
   themeToggleDarkIcon.classList.remove('hidden');
} else {
   document.documentElement.classList.remove('dark');
   themeToggleLightIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function () {
   // Toggle icon
   themeToggleLightIcon.classList.toggle('hidden');
   themeToggleDarkIcon.classList.toggle('hidden');

   // If set via local storage previously
   if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
         document.documentElement.classList.add('dark');
         localStorage.setItem('color-theme', 'dark');
      } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('color-theme', 'light');
      }

      // If NOT set via local storage previously
   } else {
      if (document.documentElement.classList.contains('dark')) {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('color-theme', 'light');
      } else {
         document.documentElement.classList.add('dark');
         localStorage.setItem('color-theme', 'dark');
      }
   }
});
