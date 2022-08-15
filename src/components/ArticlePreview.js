import React from 'react'

const ArticlePreview = ({author,title}) => {
    return (
        <div>
            <i>{author}</i><br/>
            {title}
        </div>
    )
}

export default ArticlePreview
