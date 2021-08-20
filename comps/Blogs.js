import styles from "../styles/Home.module.css";

const Blogs = () => {
  const blogs = [
    {
      title: "What is an Event Loop in JavaScript ?",
      link: "https://abhisheksunil.hashnode.dev/what-is-an-event-loop-in-javascript",
      tags: "#javascript #interview #web-development #developer #event-loop",
      img: "https://abhisheksunil.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1628224938465%2F7l3JNVL6c.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    },
    {
      title: "JavaScript Interview Checklist (Basics)",
      link: "https://abhisheksunil.hashnode.dev/javascript-interview-checklist-basics",
      tags: "#javascript #interview #developer #web-development",
      img: "https://abhisheksunil.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1627553104737%2FCXoe7MHor.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    },
    {
      title: "Debugging Javascript Efficiently using Chrome DevTools",
      link: "https://abhisheksunil.hashnode.dev/debugging-javascript-efficiently-with-chrome-devtools",
      tags: "#javascript #chrome #devtools",
      img: "https://abhisheksunil.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1619687773877%2F6AxWHApHt.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
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
    </section>
  );
};

export default Blogs;
