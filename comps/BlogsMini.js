import styles from "../styles/Home.module.css";
import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      title: "JavaScript Interview Checklist (Basics)",
      link: "https://abhisheksunil.hashnode.dev/javascript-interview-checklist-basics",
      tags: "#javascript #interview #developer #web-development",
      img: "https://abhisheksunil.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1627553104737%2FCXoe7MHor.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    },
  ];
  return (
    <section id="blogs" className={styles.blogs}>
      <h2 className={styles.projectHeading}>Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.title} className={styles.blog}>
          <img className={styles.blogImg} src={blog.img} alt="blog-img" />
          <a href={blog.link} className={styles.blogLink}>
            {blog.title}
            <div>{blog.tags}</div>
          </a>
        </div>
      ))}
      <Link href="/Blogs">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className={styles.blog}
        >
          <p className={styles.blogLink}>View all blogs</p>
        </div>
      </Link>
    </section>
  );
};

export default Blogs;
