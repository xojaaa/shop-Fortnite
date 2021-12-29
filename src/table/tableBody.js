import React from 'react';
import Button from "./UI/button";

// onClick={() => props.remuve(props.post)}

function TableBody(props) {


    return (
        <>
            <tbody>
            <tr>
                <td>{props.number}</td>
                <td>{props.post.title}</td>
                <td>{props.post.stack}</td>
                <td>
                    <Button onClick={() => props.delate(props.post)} class='btn btn-danger'>
                        Delate
                    </Button>
                </td>
            </tr>
            </tbody>

        </>
    );
}

export default TableBody;