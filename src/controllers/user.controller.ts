import { Body, Get, Route, Tags, Post, Path } from "tsoa";
import { User } from "../models";
import {
  createUser,
  getUser,
  getUsers,
  IUserPayload,
} from "../repositories/user.repository";

@Route("users")
@Tags("user")
export default class UserController {
  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  @Get("/:id")
  public async getUser(@Path() id: String): Promise<User | null> {
    return getUser(Number(id));
  }
}
