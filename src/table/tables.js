import React, {useState} from 'react';
import TAbleItem from "./TAbleItem";
import TableBody from "./tableBody";
import TableList from "./TableList";
import Button from "./UI/button";
import Slect from "./UI/slect";

function Tables(props) {

    const [posts, setPost] = useState([
        {id: 1, title: 'Java', stack: 'Full'},
        {id: 2, title: 'JavaScript', stack: 'FullStack'},
        {id: 3, title: 'Python', stack: 'PM'},
        {id: 4, title: 'C++', stack: 'Junyor'}
    ])


    const [title, setTitel] = useState('')
    const [stack, setStack] = useState('')
    const [select, setSelect] = useState('')
    const [seach, setSeach] = useState('')


    function add(e) {
        e.preventDefault()
        const addPost = {
            id: Date.now(),
            title,
            stack,
        }
        setPost([...posts, addPost])
        setTitel('')
        setStack('')
    }

    // function getSortedPost() {
    //     console.log('render')
    //     if (select) {
    //         return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
    //     }
    //     return posts
    // }

    // const sertedPost = getSortedPost

    function Delate(id) {
        setPost(posts.filter(post => post.id !== id.id))
    }

    function sortSlectss(sort) {
        setSelect(sort)
        console.log(sort)
    }

    return (
        <>
            <div className="container mt-5 border p-3">
                <form>
                    <h4 className='text-center pb-3'>Create react first post</h4>
                    <input type="text"
                           className='form-control'
                           value={title}
                           onChange={e => setTitel(e.target.value)}
                           placeholder='Programming language'/>
                    <br/>
                    <input type="text"
                           className='form-control'
                           value={stack}
                           onChange={e => setStack(e.target.value)}
                           placeholder='Enter for stack'/>
                    <Button onClick={add}>
                        Add Post
                    </Button>
                    <div className='d-flex ml-auto'>
                        <input type="search"
                               value={seach}
                               onChange={e => setSeach(e.target.value)}
                               className='form-control w-25 mt-3'
                               placeholder='Search...'

                        />
                        <Slect
                            value={select}
                            onChange={sortSlectss}
                            defaultvalue='Sorted name'
                            option={[
                                {value: 'title', name: 'Progrmaing'},
                                {value: 'stack', name: 'Jobs'}
                            ]}
                        />
                    </div>


                </form>
                {posts.length
                    ? <TableList Delate={Delate} posts={posts}/>
                    : <h1 className='text-center text-danger p-3'>Boshqa Qolmadi</h1>

                }

            </div>

        </>
    );
}

export default Tables;