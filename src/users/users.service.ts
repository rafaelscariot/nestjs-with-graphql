import { Injectable } from '@nestjs/common';
import { User } from '@models/users/';
import { CreateUserInput } from '@src/dto/users/input/create-user.input';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from '@src/dto/users/input/update-user.input';
import { GetUserArgs } from '@src/dto/users/args/get-user.args';
import { GetUsersArgs } from '@src/dto/users/args/get-users.args';
import { DeleteUserInput } from '@src/dto/users/input/delete-user.input';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(createdUserData: CreateUserInput): User {
    const user: User = {
      userId: uuidv4(),
      ...createdUserData,
    };

    this.users.push(user);

    return user;
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find(
      (user) => user.userId === updateUserData.userId,
    );

    Object.assign(user, updateUserData);

    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.userId === getUserArgs.userId);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === deleteUserData.userId,
    );

    const user = this.users[userIndex];

    this.users.splice(userIndex);

    return user;
  }
}
