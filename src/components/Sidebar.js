import relatedPostImage1 from '../img/related-1.jpg';
import relatedPostImage2 from '../img/related-2.jpg';
import relatedPostImage3 from '../img/related-3.jpg';

function Sidebar() {
    return (
        <>
            <aside>
                <h4>{"Related posts"}</h4>
                <ul class="related">
                    <li class="related-post">
                        <img
                            src={relatedPostImage1}
                            alt="Person programming"
                            width="75"
                            height="75"
                        />
                        <div>
                            <a href="" class="related-link">{"How to Learn Web Development"}</a>
                            <p class="related-author">{"By M. Shoaib Azam"}</p>
                        </div>
                    </li>
                    <li class="related-post">
                        <img
                            src={relatedPostImage2}
                            alt="Lightning"
                            width="75"
                            height="75"
                        />
                        <div>
                            <a href="" class="related-link">{"The Unknown Powers of CSS"}</a>
                            <p class="related-author">{"By Rana Hamza"}</p>
                        </div>
                    </li>
                    <li class="related-post">
                        <img
                            src={relatedPostImage3}
                            alt="JavaScript code on a screen"
                            width="75"
                            height="75"
                        />
                        <div>
                            <a href="" class="related-link">{"Why JavaScript is Awesome"}</a>
                            <p class="related-author">{"By Akif Bhatti"}</p>
                        </div>
                    </li>
                </ul>
            </aside>
        </>
    );
}  
export default Sidebar;