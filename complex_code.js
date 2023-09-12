/* filename: complex_code.js */

// This code demonstrates a complex and elaborate implementation of a social media feed

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "David", age: 32 },
];

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getProfile() {
    return `User ID: ${this.id}\nName: ${this.name}\nAge: ${this.age}\n`;
  }
}

class Post {
  constructor(id, userId, content) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  addComment(user, comment) {
    this.comments.push({ user, comment });
  }

  like() {
    this.likes++;
  }
}

// Simulating database retrieval of posts
const posts = [
  { id: 1, userId: 1, content: "Hello world!" },
  { id: 2, userId: 2, content: "I love coding!" },
];

const feed = [];

// Populate feed with posts and associated user profiles
for (const post of posts) {
  const user = users.find((u) => u.id === post.userId);
  if (user) {
    const userProfile = new User(user.id, user.name, user.age);
    const newPost = new Post(post.id, post.userId, post.content);
    feed.push({ post: newPost, user: userProfile });
  }
}

// Display feed with user profiles, posts, and comments
for (const { post, user } of feed) {
  console.log(`User Profile:\n${user.getProfile()}`);
  console.log(`Post ID: ${post.id}\nContent: ${post.content}`);
  console.log(`Likes: ${post.likes}\n`);

  if (post.comments.length > 0) {
    console.log("Comments:");
    for (const comment of post.comments) {
      console.log(`User: ${comment.user.name}`);
      console.log(`Comment: ${comment.comment}\n`);
    }
  }

  console.log("==================\n");
}

// Simulating interaction: liking a post and adding comments
feed[0].post.like();
feed[0].post.addComment(users[1], "Great post!");

console.log("Updated Post:\n");
console.log(`Post ID: ${feed[0].post.id}\nContent: ${feed[0].post.content}`);
console.log(`Likes: ${feed[0].post.likes}\n`);
console.log("Comments:");
for (const comment of feed[0].post.comments) {
  console.log(`User: ${comment.user.name}`);
  console.log(`Comment: ${comment.comment}\n`);
}