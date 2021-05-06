import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const receivedUser = this.usersRepository.findById(user_id);
    if (!receivedUser) {
      throw new Error("User not found.");
    }
    const user = this.usersRepository.turnAdmin(receivedUser);

    return user;
  }
}

export { TurnUserAdminUseCase };
