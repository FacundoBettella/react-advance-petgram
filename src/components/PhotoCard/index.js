import React from "react";

const DEFAULT_PHOTO = "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO}) => {
    return(
        <article>
            <a href={`/detail/${id}`}>
                <div>
                    <img src={src} />
                </div>
            </a>
            <button>
                {likes} likes!
            </button>
        </article>
    )
}