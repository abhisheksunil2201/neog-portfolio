import styles from "../styles/Home.module.css";
import Link from "next/link";

const ProjectsMini = () => {
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
  ];
  return (
    <section id="projects" className="projects_container">
      <span className={styles.projectsvectorbackground} aria-hidden="true">
        Projects
      </span>
      <h2 className={styles.projectHeading}>Projects</h2>
      <div>
        <div className={`${styles.projects} ${styles.mini}`}>
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
          <Link href="/Projects">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              className={styles.project}
            >
              <p className={styles.projectHead}>View all</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMini;
