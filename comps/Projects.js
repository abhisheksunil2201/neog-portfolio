import styles from "../styles/Home.module.css";

const Projects = () => {
  const projects = [
    {
      name: "How well do you know me?",
      description: "A CLI based quiz to check how well do you know me.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/how_well_do_you_know_me-",
      link: "https://replit.com/@abhisheksunil92/howwelldoyouknowme-?embed=1&output=1#index.js",
    },
    {
      name: "The Big Bang Theory Quiz App",
      description: "A CLI based quiz to check your TBBT knowledge.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/the_big_bang_theory_quiz",
      link: "https://replit.com/@abhisheksunil92/tbbtquiz?embed=1&output=1#index.js",
    },
    {
      name: "Minion Speak",
      description:
        "A fun translation app that translates english into minion language.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/minion_speak",
      link: "https://abhisheksunil2201.github.io/minion_speak/",
    },
    {
      name: "Klingon Translation App",
      description:
        "A fun translation app that translates english into Klingon language from Star Wars.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/klingon_translator",
      link: "https://abhisheksunil2201.github.io/klingon_translator/",
    },
    {
      name: "Food Emoji Interpreter",
      description:
        "An emoji interpreter app that tells you the meaning of food emojis.",
      tech: "React",
      git: "https://github.com/abhisheksunil2201/food_emoji_interpreter",
      link: "https://zero1.csb.app/",
    },
    {
      name: "Book Recommendation App",
      description: "Books that I recommend from different genres.",
      tech: "React, JavaScript",
      git: "https://github.com/abhisheksunil2201/book_recommendation_app",
      link: "https://675yv.codesandbox.io/",
    },
    {
      name: "Cash Register",
      description:
        "Lets you know the amount to be returned by entering bill amount and given cash.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/cash-register",
      link: "https://abhisheksunil2201.github.io/cash-register/",
    },
    {
      name: "Is your birthday lucky?",
      description:
        "Check if your birthday is lucky by entering your date of birth and your lucky number.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/is-your-birthday-lucky",
      link: "https://abhisheksunil2201.github.io/is-your-birthday-lucky/",
    },
    {
      name: "Fun with triangles",
      description: "A quiz app based on Triangles.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/fun_with_triangles",
      link: "https://fun-with-triangles.herokuapp.com/",
    },
    {
      name: "Palindrome birthday",
      description: "Tell your friends if their birthdates are palindrome.",
      tech: "React, JavaScript",
      git: "https://github.com/abhisheksunil2201/palindrome-birthday",
      link: "https://abhisheksunil2201.github.io/palindrome-birthday/",
    },
    {
      name: "Stock: Profit or Loss",
      description: "Check your profit or loss after buying stock.",
      tech: "JavaScript",
      git: "https://github.com/abhisheksunil2201/stock-profit_or_loss",
      link: "https://abhisheksunil2201.github.io/stock-profit_or_loss/",
    },
  ];
  return (
    <div className="projects_container projectsPage">
      <span
        style={{ position: "absolute" }}
        className={styles.projectsvectorbackground}
        aria-hidden="true"
      >
        Projects
      </span>
      <h2 className={styles.projectHeading}>Projects</h2>
      <div>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div key={project.name} className={styles.project}>
              <p className={styles.projectHead}>{project.name}</p>
              <a href={project.git} className={styles.git}>
                Github
              </a>
              <a href={project.link} className={styles.git}>
                Live View
              </a>
              <p>{project.description}</p>
              <p>{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
