export interface PostList {
  slice: any;
  id?:number;
  title?:string;
}

export class PostDetail{
  id?:number;
  body?:string;
  title?:string;
}

export interface PostComments {
  name: string;
  email: string;
  body: string;
  id: number;
  postId: number;
  isAdded: boolean;
}
