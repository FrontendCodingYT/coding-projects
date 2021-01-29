import React from 'react';

import './LabelButton.css';

interface Props {
    content: any;
    label: string;
    className?: string;
}

export default function LabelButton({content, label, className}: Props) {
    return <button className={`label-container ${className}`}>{content}<label className="label">{label}</label></button>;
}