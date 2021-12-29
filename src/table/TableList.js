import React from 'react';
import TAbleItem from "./TAbleItem";
import TableBody from "./tableBody";

function TableList({posts, Delate}) {
    return (
            <table className="table border mt-3 table-striped">
                <TAbleItem/>
                {posts.map((post, index) => (
                    <TableBody delate={Delate} number={index + 1} key={post.id} post={post} />
                ))}

            </table>

    );
}

export default TableList;