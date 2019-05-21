import React from 'react';
import './Users.scss';
const Users = (props) => {

    const { users, text, photos, posts} = props;
   // const newUsers = users.map((user, index) => ({ ...user, ...photos[index] }))
    const newUsers = users.map((user,index )=> {
        const userPosts = posts.filter(post => post.userId === user.id);
        console.log( userPosts );
        return { ...user, ...photos[index], posts: userPosts }

    })
    let filterUsers= newUsers.filter(newUser => newUser.name.toLowerCase().replace(/\s/g,'').indexOf(text.toLowerCase().replace(/\s/g,''))>-1)
 
    return (
        <div className="users-container">
            <ul>
                {filterUsers.map((user) => (
                    <div className="user-content" key={user.id} >
                        <div className="user-contact">
                        <div className="user-photo">
                            <img src={user.thumbnailUrl} alt="user"  className="user-photo_circle"/>
                        </div>
                        <div className="user-detail">
                            <p>{user.name}</p>
                            <p>{user.email} | {user.address.city}</p>
                        </div>
                        </div>
                        <div className="user-posts">
                        <ul>
                        {user.posts.map(post => (
                            <div key={post.id}> 
                                <p><span className="post-title">{post.title}</span></p>
                                <p><span className="post-body">{post.body}</span></p>
                            </div>
                        ))}
                        </ul>
                        </div>

                    </div>
                 
                ))}
                
                     

            </ul>
        </div>
    )
}

export default Users;


