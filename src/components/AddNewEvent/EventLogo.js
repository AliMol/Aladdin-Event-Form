import React, { useEffect, useState } from 'react';

export const EventLogo = ({ logo, thumbSize = "140px" }) => {
    const [preview, setPreview] = useState("");
    useEffect(() => {
        setPreview(logo ? URL.createObjectURL(logo) : "");
    }, [logo]);
    const classNames = `event-logo align-self-center image`;
    const IMG = () => <img src={preview} alt="Image Preview"
        className={classNames}
        style={{ width: thumbSize, height: thumbSize }} />;

    return (
        <div>
            {logo ?
                <IMG></IMG> :
                <span>Image Preview</span>}
        </div>
    );
};
