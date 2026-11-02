import type { MouseEventHandler } from "react";

interface postBtn {
    name: string,
    isClicked: boolean
}

function PostBtn({ name }: postBtn) {
    let clicked = true;
    const clickBtn: MouseEventHandler<HTMLLabelElement> = (event) => {
        console.log("Clicked:", clicked);
        if (!clicked) {
            event.currentTarget.style.background = "#D93402";
        } else {
            event.currentTarget.style.background = "#8E1818";
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