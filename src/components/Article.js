import authorImage from '../img/author-pic.png';
import postImage from '../img/post-img.jpg';

function Article() {
    return(
        <article id="articles">
            <h2 class="second-header">{"The Basic Language of the Web: HTML"}</h2>
            <div class="author-container">
                <img
                src={authorImage}
                alt="Portrait of author"
                height="50px"
                width="auto"
                class="author-img"
                />
                <p id="author">
                {"Poster by "}<strong>{"Shoaib Azam"}</strong>{" on Monday, 4th April 2022"}
                </p>
            </div>
            <img
                src={postImage}
                alt="Code on screen"
                width="500"
                height="200"
                class="post-img"
            />
            <p>
                {"All modern websites and web applications are built using three"}
                <em>fundamental</em>
                technologies: HTML, CSS and JavaScript. These are the languages of the
                web.
            </p>
            <p>
                {"In this post, let's focus on HTML. We will learn what HTML is all"}
                {"about, and why you too should learn it."}
            </p>
            <h3>What is HTML?</h3>
            <p>
                HTML stands for <strong>H</strong>yper<strong>T</strong>ext
                <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup
                language that web developers use to structure and describe the content
                of a webpage (not a programming language).
            </p>
            <p>
                {"HTML consists of elements that describe different types of content:"}
                {"paragraphs, links, headings, images, video, etc. Web browsers"}
                {"understand HTML and render HTML code as websites."}
            </p>
            <p>{"In HTML, each element is made up of 3 parts:"}</p>
            <ol>
                <li class="first-li">{"The opening tag"}</li>
                <li>{"The closing tag"}</li>
                <li>{"The actual element"}</li>
            </ol>
            <p>
                {"You can learn more at"}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    class="mdn"
                >
                    {"MDN Web Docs"}
                </a>
            </p>
            <h3>{"Why should you learn HTML?"}</h3>
            <p>
                {"There are countless reasons for learning the fundamental language of the web. Here are 5 of them:"}
            </p>
            <ul>
                <li class="first-li">
                {"To be able to use the fundamental web dev language"}
                </li>
                <li>
                {"To hand-craft beautiful websites instead of relying on tools like Worpress or Wix"}
                </li>
                <li>{"To build web applications"}</li>
                <li>{"To impress friends"}</li>
                <li>{"To have fun "}😃</li>
            </ul>
            <p>{"Hopefully you learned something new here. See you next time!"}</p>
            <div class="register">
                <h2 class="register">{"REGISTER FREE OR PURCHASE PREMIUM"}</h2>
            </div>
        </article>
    );
}
export default Article;