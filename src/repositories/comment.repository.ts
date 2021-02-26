import { getRepository } from "typeorm";
import { Comment } from "../models";

export interface ICommentPayload {
    content: String;
    userId: number;
    postId: number;
}

export const getComments = async (): Promise<Array<Comment>> => {
    const commentRepository = getRepository(Comment);
    return commentRepository.find();
}