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
          description: "Research papers on self-evolving AI, robust language models, and unbiased learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Research experience, education, publications, teaching, and academic service. Use the PDF icon to open the full version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching experience at George Mason University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "https://yuqing-zhou.github.io/learning-blog/index.html";
          },
        },{id: "news-i-will-become-a-phd-student-george-mason-university-sparkles-smile",
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
          section: "News",},{id: "news-i-returned-to-aws-as-an-applied-scientist-intern-to-work-on-efficient-llm-reasoning-and-rl-based-post-training",
          title: 'I returned to AWS as an Applied Scientist Intern to work on efficient...',
          description: "",
          section: "News",},{id: "news-the-paper-confidence-orchestrated-self-evolution-against-uncertain-llm-feedback-has-been-accepted-to-emnlp-2026-congratulations-to-all-the-co-authors",
          title: 'The paper “Confidence-Orchestrated Self-Evolution against Uncertain LLM Feedback” has been accepted to EMNLP...',
          description: "",
          section: "News",},{
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
