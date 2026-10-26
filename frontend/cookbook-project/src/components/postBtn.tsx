import type { MouseEventHandler } from "react";

interface postBtn {
    name: string,
    isClicked: boolean
}

function PostBtn({ name }: postBtn) {

    const clickBtn: MouseEventHandler<HTMLLabelElement> = (event) => {
        if (event) {
            event.currentTarget.style.background = "#D93402"
            
        }
    }

    return (
        <div>
            <label className="check-label" onClick={(clickBtn)}>
                <input
                    value="starter"
                    type="checkbox"
                    className="post-checkbox"
                />
                {name}
            </label>
        </div>
    )
}

export default PostBtn;