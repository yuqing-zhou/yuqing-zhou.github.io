// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "https://yuqing-zhou.github.io/learning-blog/index.html";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-become-a-phd-student-george-mason-university-sparkles-smile",
          title: 'I will become a PhD student @ George Mason University! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-my-first-paper-was-accepted-to-cikm-2023-it-is-about-robust-post-click-conversion-rate-prediction-grateful-to-my-co-authors-and-excited-to-meet-the-community",
          title: 'My first paper was accepted to CIKM 2023! It is about robust post-click...',
          description: "",
          section: "News",},{id: "news-one-paper-about-shortcut-learning-in-nlp-was-accepted-to-findings-of-emnlp-2024",
          title: 'One paper about Shortcut Learning in NLP was accepted to Findings of EMNLP...',
          description: "",
          section: "News",},{id: "news-one-paper-about-mitigating-spurious-correlations-in-text-classification-was-accepted-to-naacl-2025",
          title: 'One paper about mitigating spurious correlations in text classification was accepted to NAACL...',
          description: "",
          section: "News",},{id: "news-glad-to-join-aws-as-an-applied-scientist-intern",
          title: 'Glad to join AWS as an Applied Scientist Intern.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
