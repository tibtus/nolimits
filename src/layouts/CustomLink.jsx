import React from "react";
import { Link, useMatch } from 'react-router-dom';

export default function CustomLink ({children, to, ...props}) {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            style={{
                color: match ? 'blue' : 'red',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

