import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { UsersRepository } from "@/repositories/users-repository";

interface RegisterServiceParams {
	name: string;
	email: string;
	password: string;
}

export class RegisterService {
	constructor(private usersRepository: UsersRepository) {}

	async execute({ name, email, password }: RegisterServiceParams) {
		const password_hash = await hash(password, 6);

		const userWithSameEmail = await this.usersRepository.findByEmail(email);

		if (userWithSameEmail) {
			throw new Error("User already exists!");
		}

		await this.usersRepository.create({
			name,
			email,
			password_hash,
		});
	}
}
