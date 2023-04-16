import { Article } from "../../Components/index";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./Blog.scss";
const Blog = () => {
  return (
    <div id="blog" className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article
            imgURL={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article
            imgURL={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
