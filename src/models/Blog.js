import { Profile } from "./Account.js"


export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt).toLocaleDateString()
        this.creator = new Profile(data.creator)
    }
}

// {
//     "_id": "63f7fde0f3a113f7505b71bf",
//     "title": "Durkadurastan",
//     "body": "Welcome to Durkadurkstan where the days are hot, But the nights are hotter!! ;D",
//     "imgUrl": "https://i0.wp.com/wevegoneonholidaybymistake.com/wp-content/uploads/2020/03/durka4-2.jpg?resize=768%2C386&ssl=1",
//     "tags": [],
//     "published": true,
//     "creatorId": "63f68ae04acb57b270e06d0e",
//     "createdAt": "2023-02-23T23:59:28.896Z",
//     "updatedAt": "2023-02-23T23:59:28.896Z",
//     "__v": 0,
//     "creator": {
//         "_id": "63f68ae04acb57b270e06d0e",
//         "subs": [
//             "auth0|63f68adf121cf007a2dd6f8f"
//         ],
//         "email": "trickydicky@trickydicky.com",
//         "name": "trickydicky",
//         "picture": "https://s.gravatar.com/avatar/03326ddd99017a008b534dc1b724576f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ftr.png",
//         "bio": "i like ducks",
//         "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
//         "github": "",
//         "linkedin": "",
//         "resume": "",
//         "class": "",
//         "graduated": true,
//         "createdAt": "2023-02-22T21:44:53.763Z",
//         "updatedAt": "2023-02-27T17:23:01.504Z",
//         "__v": 0,
//         "id": "63f68ae04acb57b270e06d0e"
//     },
//     "id": "63f7fde0f3a113f7505b71bf"
// }