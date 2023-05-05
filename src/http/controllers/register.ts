import { RegisterService } from "@/services/register";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";

export const registerController = async (
	request: FastifyRequest,
	reply: FastifyReply
) => {
	const registerBodySchema = z.object({
		email: z.string().email(),
		password: z.string().min(8).max(100),
		name: z.string().min(4),
	});

	const { email, password, name } = registerBodySchema.parse(request.body);

	try {
		const prismaUserRepository = new PrismaUserRepository();
		const registerService = new RegisterService(prismaUserRepository);

		await registerService.execute({ email, password, name });
	} catch (error) {
		return reply.status(409).send(error);
	}

	return reply.status(201).send("User created!");
};
