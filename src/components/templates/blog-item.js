import { useTranslation } from "react-i18next"

const BlogItem = ({post}) => {
    const { t } = useTranslation();

    const limitText = (text, limit) =>{
        const strippedText = text.replace(/(<([^>]+)>)/gi, '');
        if (strippedText.length <= limit) {
            return strippedText;
        } else {
            return strippedText.substring(0, limit) + '...';
        }
    }

    return (
        <>
        <div id={"post-"+post.id} className="item col web w3-container w3-half w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container" >
                        {
                            (typeof post.yoast_head_json.og_image !== 'undefined') ?
                                <img src={post.yoast_head_json.og_image[0].url} alt="z" className="w3-image" />
                            : ""
                        }
                    	
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container">
                    	<h6>{post.title.rendered}</h6>
                        <div>
                            <small>{limitText(post.excerpt.rendered, 80)}</small>
                        </div>
                        <a target="_blank" rel="noreferrer" href="/blog/{post.link}" className="link">
                            {t("Xem thêm")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BlogItem