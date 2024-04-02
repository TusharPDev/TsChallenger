// Define interfaces

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Post {
  id: number;
  userId: number;
  content: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  userId: number;
  postId: number;
  content: string;
}

export interface Interaction {
  userId: number;
  postId: number;
}

// Define utility class
export class SocialMediaUtility {
  private users: User[];
  private posts: Post[];
  private comments: Comment[];

  constructor() {
    this.users = [];
    this.posts = [];
    this.comments = [];
  }

  // Method to add a user
  addUser(user: User): void {
    this.users.push(user);
  }

  // Method to get all users
  getAllUsers(): User[] {
    return this.users;
  }

  // Method to add a post
  addPost(post: Post): void {
    this.posts.push(post);
  }

  // Method to get all posts
  getAllPosts(): Post[] {
    return this.posts;
  }

  // Method to add a comment
  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  // Method to get all comments for a post
  getCommentsForPost(postId: number): Comment[] {
    return this.comments.filter(comment => comment.postId === postId);
  }

  // Method to like a post
  likePost(interaction: Interaction): void {
    const post = this.posts.find(post => post.id === interaction.postId);
    if (post) {
      post.likes++;
    }
  }

  // Method to comment on a post
  commentOnPost(comment: Comment): void {
    this.addComment(comment);
  }
}

